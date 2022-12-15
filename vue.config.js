const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: '/love-coffee-admin/',
  outputDir: 'www',
  devServer: {
    type: 'http',
    allowedHosts: [
      'localhost' 
    ],
    port: 4004,
  }

}

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})
