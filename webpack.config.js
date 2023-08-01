const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: "./bootstrap.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bootstrap.js",
	},

	mode: "development",
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name][contenthash].css",
			chunkFilename: "[id].css",
			ignoreOrder: false,
		}),
		new HTMLWebpackPlugin({
			filename: "index.html",
			template: "./index.html", // css will be linked in this file
			// favicon: "/favicon.ico",
		}),
	],
	experiments: {
		asyncWebAssembly: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					MiniCssExtractPlugin.loader, // extract css into files
					"css-loader", // convert css to js string css
				],
			},
		],
	},
	// entry: ["./css/bars.css"],
};
