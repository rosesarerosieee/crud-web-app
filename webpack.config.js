const path = require("path");

module.exports = {
  resolve: {
    fallback: {
      zlib: require.resolve("browserify-zlib"),
      querystring: require.resolve("querystring-es3"),
      path: require.resolve("path-browserify"),
      crypto: require.resolve("crypto-browserify"),
      fs: false, // Set to false if you don't need the 'fs' module
      stream: require.resolve("stream-browserify"),
      http: require.resolve("stream-http"),
      net: false, // Set to false for 'net' as it's not available in browsers
      os: require.resolve("os-browserify/browser"),
    },
  },
  entry: "./src/index.js", // Adjust based on your entry file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // Add loaders, plugins, etc., if needed
};
