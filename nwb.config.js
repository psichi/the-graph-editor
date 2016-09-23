const path = require('path')

module.exports = {
  type: 'react-app',
  webpack: {
    devtool: 'eval-source-map'
  },
  babel: {
    plugins: [
      'transform-export-extensions',
      'transform-es2015-destructuring'
    ]
  }
}
