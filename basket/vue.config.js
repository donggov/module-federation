const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8002,
  },
  publicPath: "http://localhost:8002",
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
    config.plugin("module-federation-plugin").use(require("webpack").container.ModuleFederationPlugin, [
      {
        name: "basket",
        filename: "remoteEntry.js",
        exposes: {
          "./Basket": "./src/components/Basket.vue",
        },
        shared: require("./package.json").dependencies,
      },
    ]);
  },
});
