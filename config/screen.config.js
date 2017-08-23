var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
   template: __dirname + '/../src/screen/screen.html',
   filename: 'screen.html',
   inject: 'body'
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
            tes	t: /\.html$/,
            loader: 'raw-loader!html-minifier-loader'
         }
      ]
   },
   output: {
      filename: 'screen.js',
      path: __dirname + '/../build'
   },
   plugins: [HTMLWebpackPluginConfig]
};
