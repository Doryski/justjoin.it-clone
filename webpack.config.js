const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.join(__dirname, '/build'),
		filename: 'bundle.js',
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.ts', '.js', '.tsx', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.(css)$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader',
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: ['file-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
	devServer: {
		historyApiFallback: true,
	},
}
