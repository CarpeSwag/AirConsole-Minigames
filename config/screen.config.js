var HTMLWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
   template: __dirname + '/../src/screen/screen.html',
   filename: 'screen.html',
   inject: 'body'
});
var UglifyJSPluginConfig = new UglifyJSPlugin({
   extractComments: true
}); 

module.exports = {
   entry: __dirname + '/../src/screen/screen.js',
   module: {
      loaders: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
         },
		 {
            test: /\.html$/,
            loader: 'raw-loader!html-minifier-loader'
         }
      ]
   },
   output: {
      filename: 'screen.js',
      path: __dirname + '/../build'
   },
   plugins: [
      HTMLWebpackPluginConfig,
	  UglifyJSPluginConfig
   ]
};
