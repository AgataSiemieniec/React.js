const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = () => ({
  entry: './src/index.js', // wskazuje, w którym pliku JS znajduje się główny kod aplikacji. Wszystkie pozostałe pliki są importowane w tym pliku itd.
  output: { // wskazuje miejsce, gdzie ma być wygenerowana wersja produkcyjna, stworzona za pomocą npm run bulid. Jest też odpowiedzialny za nazwę pliku, w którym znajdzie się scalony i skonwertowany kod JS naszej aplikacji.
    path: path.join(__dirname, 'dist'),
    filename: 'scripts_bundle.js',
  },
  module: { // zawiera konfigurację dla różnych typów plików - np. JS czy Sccs. 
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  }, 
  plugins: [ //lista wtyczek webpacka, które są niezbędne w naszej aplikacji.
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
});

const devConfig = () => ({
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            query: {
              modules: true, 
              localIdentName: '[name]_[local]_[hash:base64:5]',
            },
          }, 
          'sass-loader',
        ],
      },
    ],
  },
});

const prodConfig = () => ({
  module: {
    rules: [
      {
        test:/\.(s*)css$/,
        use:[
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            query: {
              modules: true, 
              localIdentName: '[name]_[local]_[hash:base64:5]',
            },
          }, 
          'sass-loader',
        ],
      },
    ],
  }, 
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles_bundle_[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});

module.exports = (env, argv) => {
  const modeConfig = argv.mode == 'production' ? prodConfig : devConfig;

  return merge(baseConfig(), modeConfig());
};
