const path = require('path')
const { resolve } = path

const inputIconFilePath = resolve(__dirname, './static/icon.png')
const outputIconFilePath = resolve(__dirname, './static/favicon.ico')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  modules: [{ handler: require('../') }],
  buildModules: [
    [require('../lib/module'), { inputIconFilePath, outputIconFilePath }]
  ],
  head: {
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
}
