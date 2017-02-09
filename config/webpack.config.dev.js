var merge = require('webpack-merge')
var base = require('./webpack.config.base')

var outputFile = 'mura-vue'
var globalName = 'MuraVue'

module.exports = merge(base, {
  output: {
    path: './dist',
    filename: outputFile + '.common.js',
    library: globalName,
    libraryTarget: 'umd',
  },
  devtool: 'eval-source-map',
})
