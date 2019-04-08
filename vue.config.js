const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/tools/tools.scss";`,
        includePaths: [
          path.resolve(__dirname, 'node_modules/normalize-scss/sass')
        ]
      }
    }
  },
  lintOnSave: process.env.NODE_ENV !== 'production'
}
