var path = require('path');
var webpack = require('webpack');
var LessPluginCleanCSS = require('less-plugin-clean-css');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:3030', 'webpack/hot/only-dev-server', './src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: [
					'react-hot', 'babel'
				],
				include: path.join(__dirname, 'src')
			}, {
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff"
			}, {
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "file-loader"
			}, {
				test: /\.less$/,
				loader: "style!css!less"
			}
		]
	},
  lessLoader: {
  lessPlugins: [
    new LessPluginCleanCSS({advanced: true})
  ]
}
};
