import path from 'path'
const projectRoot = path.resolve(__dirname, '../server/')
export default {
  entry: {
    app: path.resolve(projectRoot, './app.js'),
  },
  output: {
    publicPath: '/',
    path: path.resolve(projectRoot, '../dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },
  devtool: 'source-map',
}
