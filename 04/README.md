### ReasonML + React.js: Lesson One

If you wanna have a look at ReasonML + React, then you're in the right place.  
This is a very simple project, written in ReasonML and using the ReasonReact library. We will learn to set up a ReasonReact environment, create some React Components, add some CSS and compose them. This is not a ReasonML tutorial, but we will write some Reason code lines, so it could help to learning something about this language too.

### Source code

You can find the source code of this workshop at this link: [source coce](./src)
I kept the code very very simple. The UI is pretty ugly, but that's not the task of this workshop (and I'm a engineer not a designer!). Each reason component focuses on a particular feature and, just for fun, I applied different style on each page, using flex-box, css-grid and some horrible transitions :)

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

After creating a Component skeleton, we should proceed writing our real component, implementing the required **render** function. Remmber to always spread the component skeleton into your component and do not inline create-and-spread it, otherwise you would ever create a new component instance. We could notice that the only two parameters listed into the code, _children_ and _self_, are preceeded by a underscore, which means we're not going to use those variables.

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

### Component props

Since a ReasonReact Component is always a function, component props cannot be other then simple function paramenters. All props are **named parameters** and named parameters are preceded by a **~**. For example if you wanna pass a *title* to a component you should write something like this:

```js
let make = (~title: string, _children) => {
  ...component,
  render: _self => <span>(ReasonReact.string(title))</span>
};
```

Parameter typing is not strictly needed, since bs could easily infer it, but I'd like to explict props types. As in previous examples, we need to write an underscore in front of **children** prop, since we're still not using it. 

### Component composition

The main difficulty I faced writing some components with ReasonReact is how to combine components. I mean the simple child/parent relationship and the use of the children prop. In Reason everything is types, even children, and that force you be more aware of the code you write. I used to type props also in ReactJS, but the children prop has always been some sort of exception and the reason is just _lazyness_. My children prop looks often like this:

```js
/* Using PropTypes */
MyComp.propTypes = {
  children: PropTypes.any,
};

/* Using Flow */
type Props = {
  children:any,
}
```

With ReasonReact you have to be more accurate and this is an advantage for suce, but it's another pita! Moreover, at the moment this document is written and at current ReasonReact library version (0.4.2), ReasonReact has some opened issues/nicetohaves or improvements in progress to help creating and composing components in a easy way.  
THe following examples cover my experience in creating components and could be similator to your experience if you also have coded in ReactJS.

First we write a parent component capable to render some children, using the children prop like we would have done in React. We call our component GenericParent.

```js
/* GenericParent.re */
let make = (children) => {
  ...component,
  render: _self => <div>{children}</div>
};
```

As we can see, this time the underscore before children prop is missing, because we're using children in our component. Now we can create another component, use the GenericParent component and pass it a single node. Due to some JSX internal constrains and some choices made into the library itself, ReasonReact always converts our JSX elements into an array (an Array, not a List, see ReasonML documention for details). The easiest way so satisfy our GenericParent signature is spreading components into JSX. 

```js
let make = (~title, _children) => {
  ...component,
  render: _self => 
    <MyParent>
    ...(<span>(ReasonReact.string(title))</span>)
    </MyParent>
};
```

The spread operator creates an array of elements out of the box for us. This is verbose. And I don't really appreciate this way of writing JSX. It adds useless code, increases the bug area and makes render method less readaable. The current version of ReasonReact (0.4.2) does not offer us any other solution for our GenericParent. What we can do is try to explicit the number of children, using tuple (n-ple) inn our parent signature. 

```js
/* SingleChildParent.re */
let make = ([| theonlychild |]) => {
  ...component,
  render: _self => <div>{theonlychild}</div>
};
```

So now we can omit the spread operator during composition.

```js
let make = (~title, _children) => {
  ...component,
  render: _self => 
    <MyParent>
      <span>(ReasonReact.string(title))</span>
    </MyParent>
};
```

THe code above is more clear and readable and also strictly types. We have full control about the number of children our parent component handles. So I would rather prefer using this explicit syntax, anytime I can.

### Insline styling

Currently I'm writing React component using styled-components as css-in-js library. I like it, pros win over cons, something is not perfect, but it works well. Sometimes I also write some inline css into the style property of the component, mostly during the design phase of a component, but think about a component rendered thousands of times just because its position is changing and nothing else. You cannot use a styled-component, otherwise you will create thousands of useless identical css classes. A left field passed directly to the inline style would be a bette choice.  
ReasonReact gives us a special method from the ReactDOMRe class to create inline styles.

```js
<span style=(
      ReactDOMRe.Style.make(
          ~width="20px",
          ~height="20px",
          ~backgroundColor="red",
          ())
      )
/>
```  

The make method accepts all css attributes as named parameters, just like the same method of a component. 

### First impressions

I found writing React Components in ReasonReact a little too much verbose. The syntax is not so immediate to learn and inline styling is totally a pita. **But** (a big red but) this is my first experience and it could only get better and better. Moreover maybe this is the cost you have to pay to write in a safer language. And finally, the css-in-js approach could not be the best way to style ReasonReacst components.  
On the other side I started appreciating ReasonML. So, I'm eager to dig deep under the surface. Into the next lessons I would like to create a reducer component and some utility modules, just to add a little more complexity and start approaching a more structured application. Then I should add some testing and try to understand the better way to style a ReasonReact component. Another lesson shall cover component composition patterns, such as HOC, render prop and context provider.