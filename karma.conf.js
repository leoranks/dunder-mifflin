var webpackConfig = require('./webpack.config')

module.exports = config => {
  config.set({
    basePath: "",

    frameworks: ["jasmine"],

    files: [
      'src/app.tests.js'
    ],

    preprocessors: {
      'src/app.tests.js': ['webpack']
    },

    webpack: { ...webpackConfig, mode: 'development', optimization: undefined }, 
    //webpack: { ...webpackConfig, mode: 'development', optimization: { splitChunks: false, runtimeChunk: false } },
  
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'], // 'Chrome', 'Chrome_without_security', 'ChromeHeadless'
    singleRun: true,
    concurrency: Infinity
  })
}