# React Starter Kit

An extension of Create React App, with all the stuff you need to develop a full, functional and complex web application.  
The react-starter-kit inside src folder is a the React Application coataining all the slide shown during the presentation. It's a cool react example, not the easiest one, but effective. If you're looking for a simplier application, have a look at [Workshop 02](../02).

## Installation

 * Download or git clone **workshop** repository
 * Open a terminal on **01/src/react-starter-kit** folder
 * Run in the terminal **npm install**
 * Wait for node modules downloading process
 * Run in the terminal **npm start**

## All you need is L.O.V.S - List Of Valuable Suggestions

### Developer tools (setting you up, boring part)

 * [Node.js (the engine behind the curtain)](https://nodejs.org/it/)
 * [Visual Studio Code (your IDE and your best friend)](https://code.visualstudio.com/)
	- Babel ES6/ES7
	- ESLint
	- Flow Language Support
	- Path Intellisense
	- Relative Path

### React (here is the big guy)

 * [create-react-app (the tool which simplifies the mess)](https://github.com/facebookincubator/create-react-app)
 * [recompose (HOC based useful library)](https://github.com/acdlite/recompose)
 * [styled-components (CSS inline to the next level)](https://www.styled-components.com/)

### Redux (Dan Abramov AKA gaeron AKA the genius)

 * [redux (the core of the business logic)](https://redux.js.org/)
 * [react-redux (link our two main actors)](https://github.com/reactjs/react-redux)
 * [reselect (cool selectors management)](https://github.com/reactjs/reselect)
 * [redux-immutable (immutable in redux store)](https://github.com/gajus/redux-immutable)

### Testing (the better you test, the longer you rest)

 * [jest (the test engine)](https://facebook.github.io/jest/)
 * [react-styleguidist (design your components)](https://react-styleguidist.js.org/)
 * [enzyme (test your components)](https://github.com/airbnb/enzyme)
 * static testing (not today. next time. keep in touch)

### Libraries (and yes, there's no jQuery)

 * [axios (a fetch library)](https://github.com/axios/axios)
 * [lodash (the mother of all underscore)](https://lodash.com/)
 * [immutable (immutable, from heaven to hell and back)](https://facebook.github.io/immutable-js/)

### In-depth technological study (not enough? some more stuff)

 * project folder structure (really, are you serious?)
 * middleware in redux (the redux source of power)
 * Higher Order Components (how inheritance works in math)
 * avoiding side effects (redux-saga, redux-effects, redux-cycles)
 * npm and package.json (I am root)
 * Functional Reactive Programming (FRP or F&RP, the long fight)

## Conclusions - Yeah, interesting, so in short?

### Just the first time

 * Download and install Node.js
 * Download and install Visual Studio Code and its plugins
 * ```> npm install -g create-react-app```
 * ```> npm install -g flow-bin flow-typed```

### Each time you create an app

 * ```> create-react-app your-app-pretty-cool-name```
 * ```> cd your-app-pretty-cool-name```
 * ```> npm install --save styled-components recompose react-redux flow-bin redux redux-immutable redux-logger reselect axios axios-mock-adapter immutable lodash enzyme jest-immutable-matchers enzyme-adapter-react-16 enzyme-to-json react-styleguidist react-test-renderer redux-test-utils```
 * [Configure your 'package.json' file](https://github.com/react-genova/workshops/blob/master/01/resources/pacakge.json.addons)
 * [Add linter config file '.eslintrc'](https://github.com/react-genova/workshops/blob/master/01/resources/.eslintrc)
 * [Add flow config file '.flowconfig'](https://github.com/react-genova/workshops/blob/master/01/resources/.flowconfig)
 * [Add styleguidist config file 'styleguide.config.js'](https://github.com/react-genova/workshops/blob/master/01/resources/styleguide.config.js)
 * [Add test config file 'setupTests.js'](https://github.com/react-genova/workshops/blob/master/01/resources/setupTests.js)
 * ```> flow-typed install enzyme@3.0.0 jest@20.0.0 lodash@4.0.0 recompose@0.24.0 styled-components@2.2.3 reselect@3.0.1 axios@0.17.1```
 * ```> npm start```

### Visual Studio Code configuration hints

#### Aliases in webpack

If using aliases in webpack, code navigation could break in Visual Studio Code: ctrl+click or navigate to definition or any other command could no longer work. 
To fix it, add following option to your **jsconfig.json** file in your root directory:

```
"compilerOptions": {
    "moduleResolution": "node",
},
```

#### JSX file navigation

If using **jsx** for your React Component file extension, code naviation could breack again. 
To fix it, add following option to your **jsconfig.json** file in your root directory:

```
"compilerOptions": {
    "jsx": "react",
},
```
