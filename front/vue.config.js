// const CompressionPlugin = require('compression-webpack-plugin')
// const ImageminPlugin = require('imagemin-webpack-plugin').default
// const imageminMozjpeg = require('imagemin-mozjpeg')
// const TerserPlugin = require('terser-webpack-plugin')

const INPROD = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: INPROD ? './' : '/',
  runtimeCompiler: true,

  chainWebpack: config => {
    config.optimization.minimize(INPROD)
    // if (INPROD) config.optimization.minimizer('TerserPlugin').use(new TerserPlugin())

    config.optimization.delete('splitChunks')
    config.plugins.delete('prefetch')
    // if (INPROD) config.plugin('CompressionPlugin').use(CompressionPlugin)
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => Object.assign(options, {
        transformAssetUrls: {
          'v-img': ['src', 'lazy-src'],
          'v-card': 'src',
          'v-card-media': 'src',
          'v-responsive': 'src',
          'v-carousel-item': 'src',
          'v-parallax': 'src'
        }
      }))
    // config.plugin('VuetifyLoaderPlugin').tap(args => [{
    //   progressiveImages: true
    // }])
  },

  transpileDependencies: ['vuetify'],

  configureWebpack: {
    devtool: INPROD ? false : 'source-map',
    // plugins: [new ImageminPlugin({
    //   disable: !INPROD,
    //   pngquant: {
    //     quality: 50
    //   },
    //   plugins: [
    //     imageminMozjpeg({
    //       quality: 85
    //     })
    //   ]
    // })]
  },

  pwa: {
    name: 'AMPARO',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    themeColor: '#1976D2',
    manifestPath: 'manifest.json'
  }
}
