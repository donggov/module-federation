const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8000,
  },
  publicPath: "http://localhost:8000",
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
    config.plugin("module-federation-plugin").use(require("webpack").container.ModuleFederationPlugin, [
      {
        name: "main",
        filename: "remoteEntry.js",
        remotes: {
          menu: "menu@http://localhost:8001/remoteEntry.js",
          basket: "basket@http://localhost:8002/remoteEntry.js",
        },
        exposes: {
          "./Store": "./src/store/modules/basket",
        },
        shared: require("./package.json").dependencies,
      },
    ]);
  },
});
