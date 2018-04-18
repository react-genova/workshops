# React Components & Patterns

## 1. Introduction

Components are React foundation, the deeper we understand them the better.  
Therefore in this guide (and its related workshop) we'd like to clarify some concepts and dig a little bit more and enter the white rabbit hole.  
There are plenty of articles in the web talking about Components, maybe too much articles. The following chapters try to summarize all information into a single short reading.  

## 2. Components (and Elements)

The first sentence of the _Introduction_ chapter is a lie or a simplification, make your choice. The truth is: **React Elements** are React building blocks, not React Components. We are used to create components and ignore what elements are, because of the magic of **JSX**. So let's start discovering what a React Element really is.

### 2.1 React Element

A React Element is a little json object describing a DOM node. It has few properties and the most important (for us) are: type and props. Let's see a real React Element.  
The following html node:

```html
<div>Hallo World!</div>
```

becomes the React Element:

```js
{
    type: 'div',
    props: {
        children: 'Hallo World!',
    }
}
```

A React Element has some more properties, internally managed by React itself, but the idea should be clear now: a React Element is a simple plain object which describes how to render a DOM node... or a React Component.

### 2.2 React Component

The **type** field of the React Element in the previous example is a string, which identify a HTML tag. But it could be also a function or a class. In this case, React knows that the element is representing a React Component and not directly a DOM node. So React asks the Component how it renders and the component returns a React Element describing itself.  
We can make a little change to the past example, still using only elements and DON nodes.

```html
<div>
    <span>Hallo World!</span>
</div>
```

its representation in React is:

```js
{
    type: 'div',
    props: {
        children: {
            type: 'span'
            props: {
                children: 'Hallo World!'
            }
        }
    }
}
```

Now, let's introduce a React Component called MyText in place of the **span** tag. We can suppose our MyText componet could add some style to the basic span, maybe a default red color for the text or something like that.

```html
<div>
    <MyText>Hallo World!</MyText>
</div>
```

and the resulting element tree:

```js
{
    type: 'div',
    props: {
        children: {
            type: MyText
            props: {
                children: 'Hallo World!'
            }
        }
    }
}
```

When React encounters the type **MyText** recognizes it as a React Component and asks the component to render itself. The component will return another React Element:

```js
{
    type: 'span',
    props: {
        className: 'redTextClass', // changes the color to red
        children: 'Hallo World!'
    }
}
```

This is the main idea beyond react: a plain object to describe the DOM using html **and** components, easy to generate, simple to parse and fast to compare with. In shorts: the Virtual DOM.  
The other winning idea of React is the **JSX syntax**. Instead of creating elements using json object or React.createElement function, React allows us to use a sort of pseudo html code, easy to write and read. Everyone is using JSX and this is why we can forget how React represents elements internally.  
We talked about React Components, but we still haven't written any components. In the further paragraphs we will see how to create a React Component, of course using JSX.

### 2.3 Stateless Functional Component (SFC)

A Stateless Functional Component is a function with props as parameters and a React Component as return value.  
The **MyText** component of the past example should look like:

```js
function MyText(props) {
    return (
        <span className="redTextClass">{props.children}</span>;
    );
}
```

or using ES6/7 syntax:

```js
const MyText = ({children}) => <span className="redTextClass">{children}</span>;
```

### 2.4 Class Component

A Class Component is a ES6 class which extends **React.Component** class and has a **render()** method which returns a React Element.  
So the **MyText** class component will be:

```js
class MyText extends Component {
    render() {
        return (
            <span className="redTextClass">{props.children}</span>;
        );
    }
}
```

A Class Component has something more than a Stateless Functional Component:

* a lifecycle and lots of callbacks to manage it (componentWillMount, componentDidMount, ... lots of these methods are deprecated, since v16.3.0 of React. In React v17.x.x they will disappear. Pay attention)
* an internal state used to store data
* an instance: React will manage istances for us and we shall not care about their existance, but it could interesting to know that React creates an instance for each occurrence of the component into our app, to invoke callback and call imperative method on it (a set focus, for example)

### 2.5 Components composition

So far we saw simple React Components, but we can compose components as we do for regular html by nesting them.

```js
import React, { Component } from 'react';

const MyText = ({children}) => <span className="redTextClass">{children}</span>;

const MyLayout = ({textAlign, backcgroundColor}) => (
    <div style={{textAlign, backcroundColor, width:'100%'}}>
        <MyText>Hallo World!</MyText>
    </div>
);

class MyApp extends Component {
    render() {
        return <MyLayout textAlign="center" backcgroundColor="black" />;
    }
}

```

We created three components, two stateless functional and one class component, all written using JSX syntax and composed the same way we would have done using html.

### 2.6 Presentational vs Container Components

React Components can be divided into two main categories: presentational or dumb components and containers or smart components. Both can be SFC or Class, even if 95% of your presentational components will be SFC and 90% of your containers will be classes.  
In shorts, what's the difference?  
_"Presentationals how things look like, Containers how things work"_, best description I've ever heard so far, can't recall the source.  
Presentational components truly are your user interface collection. They should be a little step over your mockups. And, for sure, they must be little and simple, the more you keep them small the better. If one presentational component starts growing too much, rethink it and split it into several components.  
You will use Containers components whenever you need some kind of logic or mantain a state, this is why we call them also smart components: they do something more than just show data. They manipulate and store informations on different levels, depending on their complexity. Moreover container components aggregate other presentational or container components. Infact, presentational components can aggregate other presentational components, but it is highly discouraged to let them wrap container ones. It's not only a matter of concerns separation, it's also very importanto to keep thing simple and testable. For example, a presentational component containing a connected container component becomes very hardly to test, infact a connected component will expect a mocked store in order to work.  

#### 2.6.1 The counter app example

Let's think about a typical example: a counter app. We can create three different components. Two presentational components, a button to increment/decrement and a label to show the actual count, and a container components, to store the count variable and increment or decrement it, when a button is pressed.

```js
const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>;
```

You could ask why we create a button which is just a bare proxy to an actual html tag. Well, first this is a pattern, the proxy pattern. Second, it's the right way to proceed, infact you can style your button here and reuse it everywhere in your code base, whithout the need to rewrite/restyle/retest it. We must create a component, everytime we have the possibility to do it. Smae considerations are valid for the following simple component.

```js
const CountValue = ({value}) => <span>{value}</span>;
```

Finally we create our container, which will aggregate our presentational components and pass them the necessary callbacks and props.

```js
class Counter extends Component {
    state = { count: 0 };

    changeCount = changer => () => this.setState({ count: changer(this.state.count) });

    onAddClick = this.changeCount(count => count + 1);

    onRemoveClick = this.changeCount(count => Math.max(0, count - 1));

    render() {
        const { count } = this.state;
        return (
            <Fragment>
                <Button text="-" onClick={this.onRemoveClick} />
                <CountValue value={count} />
                <Button text="+" onClick={this.onAddClick} />
            </Fragment>
        );
    }
}
```

So that, easy to see, either just looking at its line of codes. Containers are more complex. Presentationals are simplier. Obviously this is a very basic example, but your components shall never be so much different from these ones. Did you write a 30 lines presentational component? Please, refactor it. Something went wrong. You could split it up for sure!

#### 2.6.2 FP: an arrogant introduction

You just read a bunch of _functional programming_ (changeCount function and its occurences) in the container above. The easiest and simpliest use of functional programming, very basic. It could be a test for you: if you did not get it or found it hard to understand, you need to study the FP fundamentals. Why? Because it's cool. Because it's the past. Because it's the present. Because (maybe) it's the future. Because it's 2018. Because we _should be_ software developers.

### 2.7 SFC or Class Component

One of the most discussed arguments on the community is when to use a Class Component and when a Stateless Functional Component. The best answer, as often occurs, depends on the context and there's no one single rule to follow. Let's try to underline some common considerations/questions/faqs about components.

#### Use SFC the more you can

Dan Abramov himself on the React.js official site invites everybody to use SFC. There are several reasons for it, infact SFC:

* are (should be) pure function, and we love pure function
* force you to write simple components. The simplier a thing is the better
* have no lifecycle nor logic so they are perfect for presentational components, where we want to describe only the appearance of something and not its behaviour
* are very easy to design, using for example styleguidist
* are super simple to test, just with a shallow and a toMatchSnapshot
* are _shorter_ than Class Components, so less boilerplate code

So we can think we're done. We will always use SFC. Well nope, we won't.

#### Performance

Some time ago, rumors spread about possible incoming performance improvements on SFC. Recently Andrew Clark twitted about possible performance improvements for SFC, due to their referencial transpacency (javascript first class function). They're still rumors. Nothing has changed.  
And, beneath React creates an instance for every occurences of a React Component, creating a SFC is not much faster than creating a Class Component. The two take similar time, so no performance issue here.  
On the other side, Class Components allow us to improve performances, by transforming them in Pure components. A Pure component does not call its render method if props are not changed and this is a great performance improvement (if we're using **redux**, all connected components become **pure** automatically).

```js
class MyPureComponent extends React.PureComponent { } // easy one, isn't it?!
```

So you should think Class Components win, because perforance are crucial. Well, they don't. React reconciliator is fast. The VirtualDOM is fast. React is fast. Very fast. And you probably will never have a performance issue, unless very particular case. And rendering tens of inputs or labels is not that case, nor hundreds, maybe thousands ones.

#### Readability

Developers coming from an OO programming language find Class syntax more familiar and easy to understand.  
We can agree on, if we refer to the first time we see the new arrow function sytax, with destructured parameters and direct object return approach. The first time. Maybe the second time. But if we can't understand it on the third time, well... MFC is still there, waiting for us :)

#### Conclusions

* Always write State Functional Components
* Use Class Components when you need an internal state or a lifecycle method
* Use Pure Class Components when you need to optimize performances

### 2.8 Further readings

* [React Components, Elements, and Instances - by Dan Abramov](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html)
* [React Elements VS React Components - by Tyler McGinnis](https://medium.freecodecamp.org/react-elements-vs-react-components-fdc776705880)
* [React Elements vs React Components vs Component Backing Instances - by Willson Mock](https://medium.com/@fay_jai/react-elements-vs-react-components-vs-component-backing-instances-14d42729f62)
* [Composing Software: An Introduction - by Eric Elliott](https://medium.com/javascript-scene/composing-software-an-introduction-27b72500d6ea)

## 3. Patterns

We may easily change name of this parageph to **Composition**. Why? Because the first thing we should start learning is how to compose software. We all learnt **OOP** and, as I recently discovered, we learnt in the worst way. All I knew was wrong, well, not the whole package, just the main principle: inheritance is bad, very bad, and multiple inheritance is evil, very evil.  
We can't talk in deep about software composition in this document, it's a too vast argument. Just remember one single simple concept: **Composition over Inheritance**, EVER! Inheritance is the worst way to approach OOP: it creates a *is-a* relationship which tightly couples objects together. It's not necessary and has tons of disadvanges. You do something with inheritance, you can do it better with functions and objects composition. This is the main point: we learnt inheritance in OOP when we should have learnt object composition in OOP.  
Yes, ES6 introduces classed in javascript. Yes, you can inheritate in js. Yes again, you must not. Use functional programming and function composition to build your software. You should not necessary learn functional programming theory in dept (monoid, mondad, functor, endofunctor, category...). Neither you should write your code using Heskell. Just the base, it's simple, it's easy, it's cool.  
Moving over, in next paragraphs we will see how to create our software, composing React components and learning the best tecnique to pass information from children to parent and viceversa.

### 3.1 Children to parent

Comunication from children to parent is very straightforward. We have two main solutions: direct and indirect. Let's see what we're talking about, it's all simplier than it could seem.

#### 3.1.1 Callback (direct)

You will use this tecnique over and over while developing React components. Just a hint to remember: don't exceed with it. It's easy to abuse with this simple pattern, so think twice every time you're going to code a new feature.  
Easy way to pass some kind of information from a child to a parent is using a callback, a function implemented by the parent, passed to the child and invoked by the child itself. Think about the simple case of a component containing a list of element and you want to communicate to the parent when an item is clicked, so the parent could store the selected item and do some other stuff (show it in a label, for example).

```js
import React, { Fragment, Component } from 'react';
import { render } from 'react-dom';

const NumberList = ({ numbers, onNumberClick }) => <Fragment>{numbers.map(n => <div onClick={() => onNumberClick(n)}>{n}</div>)}</Fragment>;

const SelectedNumber = ({ number }) => <span>Selected: {number}</span>;

class Counter extends Component {
  state = { number: 0 };

  onNumberClick = number => this.setState({ number });

  render() {
    const { number } = this.state;
    return (
      <Fragment>
        <NumberList onNumberClick={this.onNumberClick} numbers={[42, 101, 202]} />
        <SelectedNumber number={number} />
      </Fragment>
    );
  }
}
```

The **NumberList** component receives a list of numbers, renders them into separated divs and registers a different callback for each entry. The callback receives the clicked number itself, so that the container can pass it to another component, which renders the selected number into a span.  
This is a typical example, a simple one, but quite interesting and generic of how child component can pass an information (the selected number) to its parent.

#### 3.1.2 Common store (indirect)

Another classical use case is storing data into a common store. When the store changes, React re-renders its tree.  
The most common _store manager_ is Redux, but mobx is another valid alternative or, dunno why you should but you could, write your own one. Anyway, the concept is always the same. We're not goint to talk about Redux in this document, since it's not the right place. You just know Redux. If not, go and learn it!  
This pattern could seem obvious and infact so it is, but it has an unestimable importance, since it's the only way to _pass_ information between not related components. I mean if you want to share information between components that do not have a parent/children relationship, you need to use a shared store. That's it.

### 3.2 Parent to children

Techincally parents can pass informations to children only using 2 different tecniques:

* **props**: we know them
* **context**: a particular object filled by a provider component, passed by React down throught the components tree and read by consumer components

In this chapter we're going to see a simple example: a cointainer reads mouse coordinates and passes them to its children. We want the container to be generic and with the ability to pass the coordinates to whichever components we need, so that we can reuse it along our code base.  
So, first of all let's write a container which passes mouse **x** and **y** directly to its children, coupling tightly parent and children together. Then, into following paragraphs we will learn patterns to make our container generic.

#### 3.2.1 Direct properties

This is not either a pattern. It's the base of React components composition. Let's see the full example.

```js
import React, { Component } from 'react';
import { render } from 'react-dom';

const Coordinate = ({ label, coord }) => (
  <div>
    <span style={{ color: '#CCCCCC'}}>{label}: </span>
    <span style={{ color: 'white' }}><b>{coord}</b></span>
  </div>
);

const Coordinates = ({ coords: { x, y } }) => (
  <div style={{position: 'absoulte', padding: '5px' }}>
    <Coordinate label="x" coord={x} />
    <Coordinate label="y" coord={y} />
  </div>
);

class MouseWrapper extends Component {
  state = { coordinates: { x: 0, y: 0} };
  onMouseMove = e => this.setState({ coordinates: { x: e.clientX, y: e.clientY }});
  render() {
    const { coordinates } = this.state;
    return (
      <div style={{ width: '100%', height: '100%'}} onMouseMove={this.onMouseMove}>
        <Coordinates coords={coordinates} />
      </div>
    );
  }
}

const App = () => (
  <div style={{display: 'flex', width: '400px', height: '400px', backgroundColor: 'green'}}>
    <MouseWrapper />
  </div>
);

render(<App />, document.getElementById('root'));
```

First look at the **MouseWrapper** component. It's definetely not generic. It directly encapsulates the **Coordinates** component, so that it can only shows coordinates and nothing more. So our MouseWrapper should be called MouseCoordinates, rather than a generic wrapper. What if we'd want to add a circle under the mouse pointer?

```js
const Circle = ({ coords: { x, y }, radius: r = 10 }) => (
  <div
    style={{
      position: "absolute",
      backgroundColor: "yellow",
      left: `${x - r}px`,
      top: `${y - r}px`,
      width: `${r / 2}px`,
      height: `${r / 2}px`,
      borderRadius: `${r}px`
    }}
  />
);
```

If we'd want to wrap just the Circle component, without the Coordinates component we should create another wrapper, called for example **MousePointerWrapper**. And if we would like to use Circle together with Coordinates? **MousePointerAndCoordinatesWrapper**? I guess you got the point: it's not a scalable approach.

```js
class MousePointerAndCoordinatesWrapper extends Component {
  state = { coordinates: { x: 0, y: 0} };
  onMouseMove = e => this.setState({ coordinates: { x: e.clientX, y: e.clientY }});
  render() {
    const { coordinates } = this.state;
    return (
      <div style={{ width: '100%', height: '100%'}} onMouseMove={this.onMouseMove}>
        <Coordinates coords={coordinates} />
        <Circle coords={coordinates} />
      </div>
    );
  }
}
```

What we need is a generic MouseWrapper component to manage and hide mouse interaction and pass the coordinates somehow to generic children, so that we can use our wrapper all along our code base. In the following paragraphs we will learn the main patterns to make our **MouseWrapper** really generic and reusable.

#### 3.2.2 Clonation pattern

First way we can choose to generalize our *Wrapper* component is to clone all children Components, adding the **coordinates** prop to each child. React exposes a specific API to iterate over children (React.Children) and another API to clone an element (React.cloneElement).

```js
import React, { Component } from "react";

class MouseWrapper_CloneElement extends Component {
  state = { coordinates: { x: 0, y: 0 } };
  onMouseMove = e => this.setState({ coordinates: { x: e.clientX, y: e.clientY } });
  render() {
    return (
      <div style={{ width: "100%", height: "100%" }} onMouseMove={this.onMouseMove}>
        {React.Children.map(this.props.children, child =>
          React.cloneElement(child, { coords: this.state.coordinates })
        )}
      </div>
    );
  }
}

export default MouseWrapper_CloneElement;
```

And its usage:

```js
<MouseWrapper_CloneElement>
    <Coordinates />
    <Circle />
</MouseWrapper_CloneElement>
```

This is a very simple approach, but it's not a really good one. Infact it works only with direct children. Suppose to need a wrapping div to style Coordinates component or Circle component or both.

```js
<MouseWrapper_CloneElement>
    <div style={{fontFamily: 'Arial'}}>
        <Coordinates />
    </div>
    <Circle />
</MouseWrapper_CloneElement>
```

This little change will break our MouseWrapper_CloneElement, since it clones and add the coords prop to its children and, in the above example, Coordinates component is not a direct child anymore. The coords prop will be passed to the div element instead, that is not what we need. So, keep in mind this little tricky situation.

#### 3.2.3 Higher Order Component pattern

Higher Order Component aka HOC component is a more elegant solution. Community loves HOCs since they're pure function and compose well. In math, a higher order function is a function which returns a function and/or accepts functions as paramenters. Fortunately, javascript has first class function, so we implements this pattern easily.  
Talking about components, a HOC is a function which takes a component as parameter and returns a new enhanced component. In our example we will enhance our component adding a _coords_ prop.

```js
import React, { Component } from "react";

const mouseWrapper_HOC = Comp => {
  class MouseWrapper_HOC extends Component {
    state = { coordinates: { x: 0, y: 0 } };
    onMouseMove = e => this.setState({ coordinates: { x: e.clientX, y: e.clientY } });
    render() {
      return (
        <div style={{ width: "100%", height: "100%" }} onMouseMove={this.onMouseMove}>
          <Comp coords={this.state.coordinates} />
        </div>
      );
    }
  }
  return MouseWrapper_HOC;
};

export default mouseWrapper_HOC;
```

Usage:

```js
const EnhancedComponent = mouseWrapper_HOC(Coordinates);

<EnhancedComponent />
```

If you paid enough attention, you could notice this pattern does not resolve the problem of enhancing multiple nested components. It actually neither let you enhance more than one component at time. To do that, you need to create another component, containing for example our Coordinates and Circle component:

```js
const Both = ({ coords }) => (
  <Fragment>
    <Coordinates coords={coords} />
    <Circle coords={coords} />
  </Fragment>
);
```

And enhance it:

```js
const EnhancedBoth = mouseWrapper_HOC(Both);

<EnhancedBoth />
```

HOC pattern has another little tricky problem when applied in serie: prop naming collisions. I mean, if I create two HOCs, both adding the prop _visibility_, the last one applied will overwrite previous instance of _visibility_ property. Facebook is considering a new pattern for HOCs (Andrew Clark twitted about this proposal): HOCs may add extra arguments instead of adding extra props. This would solve the naming collision problem, but it's only a rumor so far.

#### 3.2.4 Provider/Consumers pattern (context)

A couple of paragraphs ago we introduced the context concept. We defined it as _a particular object filled by a provider component, passed by React down throught the components tree and read by consumer components_. Before React 16.3.X using context was a little more complicated. Nothing special, actually, just a couple of methods for the parent and a couple of methods for the client. But since React 16.3.X things are much more interesting and easy to implement. Previous versions of React yet supported the context pattern, but we're going to see how to use context mechanism in React 16.3.0+.  
First we need to create a React context, using the specific API:

```js
import React from 'react';
const CoordinatesContext = React.createContext({ coordinates: { x: 0, y: 0 } });
```

The **createContext** API accepts a default context parametes, to initialize the context itself. Our context value is an object containing _x_ and _y_ fields. The API returns a context, which contains a Consumer and a Provider components. The Provider component propagates the content of its **value** prop down to all its children tree. And our precious Wrapper component becomes:

```js
class MouseWrapper_Context extends Component {
  state = { coordinates: { x: 0, y: 0 } };
  onMouseMove = e => this.setState({ coordinates: { x: e.clientX, y: e.clientY } });
  render() {
    return (
      <div style={{ width: "100%", height: "100%" }} onMouseMove={this.onMouseMove}>
        <CoordinatesContext.Provider value={this.state.coordinates}>
          {this.props.children}
        </CoordinatesContext.Provider>
      </div>
    );
  }
}
```

Finally we need a consumer for our context value (remind that the consumer has to be a descendant of the provider):

```js
<MouseWrapper_Context>
  <CoordinatesContext.Consumer>
  { coordinates => <Both coords={coordinates} />}
  </CoordinatesContext.Consumer>
</MouseWrapper_Context>
```

Have a look at the implementation. We have a **function**, not components, passed as children to **CoordinatesContext.Consumer**. This is because the new Context API uses internally the **Render prop pattern**, our next and last pattern to learn.

#### 3.2.5 Render prop pattern

We all know component props and used it to pass objects or values or even functions, such as a click callback. So we talk of _render prop pattern_ when a component receives a prop in its function and calls that function to render a particular react child component. The parent component can call the render function with all the parameters it needs. A component can expose more than one single render prop. But if you have only one render prop, by convention and out of imagination, the best practice is to call the prop **render**. Our Wrapper shall invoke a the prop _render_, passing its internal coordinates as argument:

```js
class MouseWrapper_RenderProp extends Component {
  state = { coordinates: { x: 0, y: 0 } };
  onMouseMove = e => this.setState({ coordinates: { x: e.clientX, y: e.clientY } });
  render() {
    return (
      <div style={{ width: "100%", height: "100%" }} onMouseMove={this.onMouseMove}>
        {this.props.render(this.state.coordinates)}
      </div>
    );
  }
}
```

All we need to do is passing a function in the render prop which renders our Both component using the coordinates value received into the function itself:

```js
<MouseWrapper_RenderProp render={coordinates => <Both coords={coordinates} />} />
```

#### 3.2.5.1 Function as children pattern

A little variant on the render pattern applies the pattern to a particular prop: **children**. The prop children is a prop like every other prop, so we can pass a function as children and the result is:

```js
class MouseWrapper_RenderProp extends Component {
  state = { coordinates: { x: 0, y: 0 } };
  onMouseMove = e => this.setState({ coordinates: { x: e.clientX, y: e.clientY } });
  render() {
    return (
      <div style={{ width: "100%", height: "100%" }} onMouseMove={this.onMouseMove}>
        {this.props.children(this.state.coordinates)}
      </div>
    );
  }
}

<MouseWrapper_RenderProp>
{coordinates => <Both coords={coordinates} />}
<MouseWrapper_RenderProp>
```

This is a particular case of the render prop pattern and, actually, at the moment is the preferred one. React community fell in love with the function as children pattern, for this reason I keep it as the last pattern of this document. To be sure you will remmeber the **Function as children pattern**.

### 3.3 Further readings

* [Advanced React.jd Lectures - by Ryan Florence](https://medium.com/@ryanflorence/free-advanced-react-js-lectures-a9fdcad008f3)
* [Learn React Fundamentals and Advanced Patterns - by Kent C. Dodds](https://blog.kentcdodds.com/learn-react-fundamentals-and-advanced-patterns-eac90341c9db)
* [Composition vs Inheritance - by The React Team](https://reactjs.org/docs/composition-vs-inheritance.html)

## 4. Exercises

If you'd like to test what you just learned, open [code sandbox](https://codesandbox.io/), chose React and try write your own application, using one or more patterns. Here's a couple of proposal for you.

### 4.1 Key logger

Create a generic component which reads each pressed keys from the keyboard and propagates the last pressed key to its child.  
You could also create a child component to show last pressed key and another child component which shows a **is a number** label if the key pressed is between "0" and "9". Just a hint: if you want to intercept the keyPress event on a div, rember to set the _tabIndex_ attribute...