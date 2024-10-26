// webpack config

const path=require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports={
    mode: "development",
    entry : "./src/load.js" ,
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