// webpack config

const path=require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports={
    mode: "development",
    entry : "./src/index.js" ,
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
      watchFiles: ["./src/template.html", "./src/styles.css"],
        static: {
          directory: path.join(__dirname, 'src'),
        },
        compress: true,
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/template.html",
        }),
        new CopyWebpackPlugin({
          patterns: [
              { from: path.resolve(__dirname, 'src/styles/images'), to: 'styles/images' }
          ],
      }),
      ],
     module: {
    rules: [
      {
        test: /\.css$/i,                                        // css
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,                     // images
        type: "asset/resource",
      },
    ],
  },
};