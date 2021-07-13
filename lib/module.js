import fs from 'fs'
import path from 'path'
import pngToIco from 'png-to-ico'
import mkdirp from 'mkdirp'
const chalk = require('chalk')

module.exports = function ({ inputIconFilePath, outputIconFilePath }) {
  const { nuxt } = this
  nuxt.hook('build:before', async () => {
    try {
      const buf = await pngToIco(inputIconFilePath)
      const dirPath = path.dirname(outputIconFilePath)
      mkdirp(dirPath, function (err) {
        if (err) {
          throw err
        }
        fs.writeFileSync(outputIconFilePath, buf)
      })
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(chalk.red(err))
    }
  })
}

module.exports.meta = require('../package.json')
