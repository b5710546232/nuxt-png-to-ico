# nuxt-png-to-ico

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Nuxt.js module for auto generating favicons

- This modules will generate favicon.ico from your `.png` image

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `nuxt-png-to-ico` dependency to your project

```bash
yarn add nuxt-png-to-ico # or npm install nuxt-png-to-ico
```

2. Add `nuxt-png-to-ico` to the `modules` section of `nuxt.config.js`

```js
// prepare input and output path
const inputIconFilePath = resolve(__dirname, './static/icon.png')
const outputIconFilePath = resolve(__dirname, './static/favicon.ico')

{
  modules: [
    [
      'nuxt-png-to-ico',
      {
        /* module options */

        inputIconFilePath,
        outputIconFilePath
      }
    ]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

Thank you nice project

- [png-to-ico](https://github.com/steambap/png-to-ico#readme)

## License

[MIT License](./LICENSE)

Copyright (c) b5710546232 <safe.suk@gmail.com>

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-png-to-ico/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-png-to-ico
[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-png-to-ico.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-png-to-ico
[github-actions-ci-src]: https://github.com/b5710546232/nuxt-png-to-ico/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/b5710546232/nuxt-png-to-ico/actions?query=workflow%3Aci
[codecov-src]: https://img.shields.io/codecov/c/github/b5710546232/nuxt-png-to-ico.svg
[codecov-href]: https://codecov.io/gh/b5710546232/nuxt-png-to-ico
[license-src]: https://img.shields.io/npm/l/nuxt-png-to-ico.svg
[license-href]: https://npmjs.com/package/nuxt-png-to-ico
