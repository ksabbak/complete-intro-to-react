const path = require('path');

module.exports = {
	context: __dirname,
	entry: './js/ClientApp.jsx',
	devtool: 'cheap-eval-source-map',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	// Load this with: ./node_modules/.bin/webpack-dev-server
	devServer: {
		publicPath: '/public', // right side is the path for your shit.
		historyApiFallback: true // Client will worry about the routing
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},
	stats: {
		colors: true,
		reasons: true,
		chunks: true
	},
	module: {
		rules: [
			{
				// This does lint stuff, runs it while watch is running
				enforce: 'pre',
				test: /\.jsx?$/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
			}
		]
	}
};
