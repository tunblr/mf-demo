const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4202/",
    uniqueName: "acpapp2",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "profile2",
      filename: "remoteEntry.js",
      exposes: {
        p: "./src/app/profile/profile.module.ts",
        t: "./src/app/test/module.ts",
      },
      shared: {
        "@angular/core": { eager: true, singleton: true },
        "@angular/common": { eager: true, singleton: true },
        "@angular/router": { eager: true, singleton: true },
        jquery: { eager: true, singleton: true },
      },
    }),
  ],
};
