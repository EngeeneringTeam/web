var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		app: './src/index.jsx',
		admin: './src/admin.jsx',
		user: './src/user.jsx',
	},
	output: {
    path: path.join(__dirname, './public'),
    filename: '/[name].bundle.js'
  },
	module: {
		loaders: [
			{
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.s?css$/,
        loaders: ['style','css','sass'],
        exclude: /(node_modules)/,
        include: path.join(__dirname, '/src')
      },
			{
					test: /\.(jpe?g|png|gif|svg)$/i,
					loader: 'file-loader?name=images/[name]-[hash].[ext]'
			},
			{
					test: /\.(woff|woff2|eot|ttf)$/i,
					loader: 'file-loader?name=fonts/[name]-[hash].[ext]'
			},
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
 		new webpack.NoErrorsPlugin()
	],
	devServer: {
		proxy: {
      '**': {
				bypass: function(req, res, proxyOptions) {
					if(req.path.indexOf('/admin') === 0) {
						return "/admin.html";
					}
					if(req.path.indexOf('/user') === 0) {
						return "/user.html";
					}
					if(req.path.indexOf('/assets') === 0) {
						return req.path;
					}
		      if (req.headers.accept.indexOf("html") !== -1) {
		        return "/index.html";
		      }
		    },
        secure: false
      }
		},
		historyApiFallback: true,
		contentBase: path.join(__dirname, "./public"),
		port: 4000,
		host: '0.0.0.0',
		hot: true,
		watch: true,
		inline: true,
	},
	"build-dev": {
		devtool: "sourcemap",
		debug: true
	}
};
