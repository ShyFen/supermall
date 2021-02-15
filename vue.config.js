const path = require('path')
function resolve(dir){
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': resolve('src/assets'),
        'components': resolve('src/components'),
        'views': resolve('src/views'),
        'network': resolve('src/network')
      }
    }
  }
  // chainWebpack: config => {
  //   config.resolve.alias
  //       .set('assets', resolve('./src/assets'))
  //     .set('components',resolve('./src/components'))
  //
  // }
}
