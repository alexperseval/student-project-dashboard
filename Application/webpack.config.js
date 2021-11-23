const path = require('path');

module.exports = {
  entry: './src/main/js/index.js',

  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'main/resources/static/built/bundle.js'
  },

  mode : 'development',  // 'production'
  devtool: 'eval-source-map',

  module: {
   rules: [
     {
       test: /\.js$/,
       exclude: (/node_modules/),
       use: [
          { loader: 'babel-loader' }
       ]
     },
     {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'}
        ]
      },
     {
       test: /\.(png|jpg|gif)$/,
       use: [
         {
           loader: 'file-loader',
           options: {
              name : '[name].[ext]',
             outputPath : 'images'
           }
         }
       ]
     }
   ]
 }
};
