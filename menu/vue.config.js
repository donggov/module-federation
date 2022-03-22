const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8001,
  },
  publicPath: "http://localhost:8001",
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
    config.plugin("module-federation-plugin").use(require("webpack").container.ModuleFederationPlugin, [
      {
        name: "menu",
        filename: "remoteEntry.js",
        remotes: {
          main: "main@http://localhost:8000/remoteEntry.js",
        },
        exposes: {
          "./Chicken": "./src/components/Chicken.vue",
        },
        shared: require("./package.json").dependencies,
      },
    ]);
  },
});
