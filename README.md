# Last Time <sup>[demo](https://igor1201.github.io/last-time/)</sup>

Track when was the last time you did something.

## iOS and Android

Use the default React Native Packager for iOS and Android:

Script | Description
---|---
`react-native start` | Starts React Native Packager
`react-native run-ios` | Runs the iOS app
`react-native run-android` | Runs the Android app


## Web

`react-native-web` does not use the React Native Packager, so you need to use [webpack](https://webpack.github.io/) to compile your app. This example app contains a complete webpack configuration that is optimized for development and production.

Script | Description
---|---
`npm run web` | Starts the development server on port `3000`.
`npm run web:build:vendor-dev` | Builds the `react-native-web` library for development.<br/>(The `web` task will automatically run this if it does not exist.)
`npm run web:build` | Builds your app for production. <br/>(Runs `web:build:vendor` and `web:build:app`.)
`npm run web:build:vendor` | Builds the `react-native-web` library for production.
`npm run web:build:app` | Builds your app, and any implicit vendored libraries.
`npm run web:serve` | Serves the production build on port `3001`.
`npm run web:clean` | Deletes all generated files.
`npm run publish` | Publishes it to `gh-pages` branch.
