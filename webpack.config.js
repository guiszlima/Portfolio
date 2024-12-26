const path = require('path');

module.exports = {
  // Entry point - the file where Webpack will start bundling
  entry: './src/index.js',

  // Output - where to save the bundled file
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },

  // Development mode configuration
  mode: 'development', // Change to 'production' for minified builds

  // Development server configuration
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Directory to serve
    compress: true, // Enable gzip compression
    port: 9000, // Port for the dev server
  },
  optimization: {
    portableRecords: true,
  },
  // Loaders and Plugins
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Don't process files in node_modules
        use: {
          loader: 'babel-loader', // Use Babel to transpile JavaScript
        },
      },
    ],
  },

  // Optional: Add source maps for better debugging
  devtool: 'source-map',
};
