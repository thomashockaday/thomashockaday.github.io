const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: "./src/js/app.js",
	output: {
		path: __dirname,
		filename: "./dist/js/build.js"
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader!sass-loader"
				})
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader"
				}
			},
			{
        		test: /\.(png|jpg|gif)$/,
        		use: [
          			{
            			loader: "file-loader",
            			options: {
            				useRelativePath: true,
            				outputPath: "dist/img/"
            			}  
          			}
        		]
      		}
		]
	},
	plugins: [
		new ExtractTextPlugin("dist/css/style.css")
	]
};