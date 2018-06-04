### ReasonML + React.js: Lesson 01

If you wanna have a look at ReasonML + React, then you're in the right place.  
This is a very simple project, written in ReasonML and using the ReasonReact library. We will learn to set up a ReasonReact environment, create some React Components, add some CSS and compose them. That's all folks.  
Other workshops are to come in the future, to learn how to test and how to use a state in your ReasonReact project.

### Setting up the environment

First we need to install BuckleScript, the ReasonML compiler. Everything relies on it and you will need it in all your ReasonML projects, so install it globally.

```js
npm install -g bs-platform
```

Now we should create our react project. We can use BuckleScript internal scripting utility or, if you're familiar with create-react-app, use ReasonScript. I used the last one approach.

#### Using Yarn

```js
yarn create react-app YOUR_APP_NAME --scripts-version reason-scripts
cd YOUR_APP_NAME
yarn start
```

#### Using Npm

```js
npx create react-app YOUR_APP_NAME --scripts-version reason-scripts
cd YOUR_APP_NAME
npm start
```

### A React Component with ReasonReact

The syntax to create a ReasonReact Component is pretty simple, just a little bit different compared to a plain javascript class or function. Let's write a very simple component and explain it. 

```js
[%bs.raw {|require("./MyComponent.css")|}];

let component = ReasonReact.statelessComponent("MyComponent");

let make = (_children) => {
  ...component,
  render: _self => <div className="my-component-main" />
};
```

We could save this code and name the file _MyComponent.re_. Infact, **re** is the extension of all ReasonML files. When BS processes our files, automatically creates a ReasonML module named _MyComponent_. The **make** function transforms our module in a React Component, available to all other modules.

#### Stylesheet import

```js
[%bs.raw {|require("./MyComponent.css")|}];
```

With the first line we're telling BuckleScript to import out _MyComponent.css_ stylesheet file. This is the syntax to import external file within bs.

#### Component Skeleton creation

```js
let component = ReasonReact.statelessComponent("MyComponent");
```

The _statelessComponent_ method of the ReactReason library creates a skeleton for a stateless component. We could have create also a _statefull_ Component, with a reducer to manage its internal state, but we're not going to create any statefull component in this workshop. Future lessons will cover this feature.

#### Component design

```js
let make = (_children) => {
  ...component,
  render: _self => <div className="my-component-main" />
};
```

After creating a Component skeleton, we should proceed writing our real component, implementing the required **render** function. Remmber to always spread the component skeleton into your component. We could notice that the only two parameters listed into the code, _children_ and _self_, are preceeded by a underscore, which means we're not going to use those variables.

#### bsconfig.json configuration

Our application starts with a generated _bsconfig.json_ file. It's the configuration file for BuckcleScript. It has a default code folder, written into the field **sources**. Usually it refers to **src**. If you store your reason file in a different folder, for example the subfolder **src/my-folder**, you should add that path to the bsconfig.json file.

```json
{
  "sources": [
    "src",
    "src/my-folder"
  ]
}
```

BuckleScript automatically searches for reason file into those folders and transpile them into common javascript file.