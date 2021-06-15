const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js', //archivo principal y donde esta para punto de entrada
  output: {
    //hacia donde se envia el proyecto donde se va a guardar o compilar, permitiendo saber donde estoy en la carpeta con __dirname, se le dice crear carpeta dist(distribution) que se envia a prodcution
    path: path.resolve(__dirname, 'dis'),
    filename: 'bundle.js', //como se llama el archivo resultante asi se compila todo el resultado se añade automatico al html por htmlplugin
    publicPath: '/'
  },
  devtool: 'source-map',
  resolve: {
    //extensiones o elementos que va a escuchar para preparar el compilado
    extensions: ['.js', '.jsx'],
  },
  module: {
    //modulo que va a tener reglar y particularidades necesarias para el recurso
    rules: [
      //indicar la logica con la que estamos trabajando(js,jsx,imagenes...)
      {
        //indentificar los archivos js y el uso de babel
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, //excluye los que estan node modules
        use: {
          loader: 'babel-loader',
        },
      },
      {
        //archivos html
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        //css
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      //se inicia el plugin y se le pasa la configuracion interna
      template: './public/index.html', //se indica punto de entrada del recurso
      filename: './index.html', //como se va a preparar cuando se mande a production
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
  ],
  devServer: {
    //crear servidor de trabajo local para observar cambios
    contentBase: path.join(__dirname, 'dis'),
    compress: true, //comprimir
    historyApiFallback: true,
    port: 3005, //puerto donde se inicia
  },
};
