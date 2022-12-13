const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: '/love-coffee-admin/'
}

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})
