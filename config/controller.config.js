var HTMLWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
   template: __dirname + '/../src/controller/controller.html',
   filename: 'controller.html',
   inject: 'body'
});
var UglifyJSPluginConfig = new UglifyJSPlugin({
   extractComments: true
}); 

module.exports = {
   entry: __dirname + '/../src/controller/controller.js',
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
      filename: 'controller.js',
      path: __dirname + '/../build'
   },
   plugins: [
      HTMLWebpackPluginConfig,
      UglifyJSPluginConfig
   ]
};
