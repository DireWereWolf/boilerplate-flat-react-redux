# boilerplate-flat-react-redux

Features:
* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [SASS (scss syntax)](http://sass-lang.com/)
* [Webpack 2](https://webpack.js.org/)

## CLI commands
* `yarn dev` or `npm run dev` - development build with all logs (create `.tmp` folder)
* `yarn dev:watch` or `npm run dev:watch` - run development server with HMR and watch all changes (log of webpack is minimized)
* `yarn prod` or `npm run prod` - build and minify all files for production (create `dist` folder)
* `yarn clean` or `npm run clean` - remove `dist` and `.tmp` folders

## Global Application State debug
To debug global application state use [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)

## Coding agreement

Lets start using editorconfig and jscs for this project. This help us to have one code style for the whole project. All code styles rules should be specified in `/.editorconfig`, `/.eslintrc`, `/.jscsrc` or `/.stylintrc`.

## Add/remove icon

To add icon just add it svg-file to `src/images/icons` folder. If you want to remove just remove file from the folder. And no more icon fonts, please.
