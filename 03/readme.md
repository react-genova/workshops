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

Now, let's introduce a React Component called MySpan in place of the **span** tag. We can suppose our MySpan componet could add some style to the basic span, may a default red color for the text or something like that.

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

* a lifecycle and lots of callbacks to manage it (componentWillMount, componentDidMount, ...)
* an internal state used to store data
* an instance: React will manage istances for us and we shall not care about their existance, but it could interesting to know that React creates an instance for each occurrence of the component into our app, to invoke callback and call imperative method on it (a set focus, for example)

### 2.5 Components composition

So far we saw simple React Components, but we can compose components as we do for regular html, nesting them.

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

React Components can be divided into two main categories: presentational or dumb components and containers or smart components. Both can be SFC or Class, even if 95% ofyour presentational components will be SFC and 90% of your containers will be classes.  
In shorts, what's the difference?  
_"Presentationals how things look like, containers how things work"_, best description I've ever heard so far, can't reacall the source.  
Presentational components truly are your user interface collection. They should be a little step over your mockups. And, for sure, they must be little and simple, the more you keep them small the better. If one presentational component starts growing too much, rethink it and split it into several components.  
Intead you will use Containers components whenever you need some kind of logic or mantain a state, this is why we call them also smart components: they do something more than just show data. They manipulate and store informations on different levels, depending on their complexity. Moreover container components aggregate other presentational or container components. Infact, presentational components can aggregate other presentational components, but it is highly discouraged to let them wrap container ones. It's not only a matter of concerns separation, it's also very importanto to keep thing simple and testable. For example, a presentational component containing a connected container component becomes very hardly to test, infact a connected component will expect a mocked store in order to work.  

#### 2.6.1 The counter app example

Let's think about a typical example: a counter app. We can create three different components. Two presentational components, a button to increment/decrement and a label to show the actual count, and a container components, to store the count variable and increment or decrement it, when a button is pressed.

```js
const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>;
```

You could ask why we create a button which is just a bare proxy to an actual html tag. Well, first this is a patter, the proxy pattern. Second, it's the right way to proceed, infact you can style your button here and reuse it everywhere in your code base, whithout the need to rewrite/restyle/retest it. We must create a component, everytime we have the possibility to do it. Smae considerations are valid for the following simple component.

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

One of the most discussed arguments on the community is when to use a Class Component and when a Stateless Functional Component. The best answer, as often occurs, depends on the context and there's no one rule to follow. Let's try to underline some common considerations/questions/faqs about components.

#### Use SFC the more you can

Dan Abramov himself on the React.js official site invites everybody to use SFC. There are several reasons for it, infact SFC:

* are (should be) pure function, and we love pure function
* force you to write simple components. The simplier a thing is the better
* have no lifecycle nor logic so they are perfect for presentational components, where we want to describe only the appearance of something and not its behaviour
* are very easy to design, using for example styleguidist
* are super simple to test, just with a shallow and a toMatchSnapshot
* are _shorter_ than Class Components, so less boilerplate code

So we can think we're done. We will always use SFC. Well no, we won't.

#### Performance

Some time ago, rumors spread about possible incoming performance improvements on SFC. They're still rumors. Nothing has changed.  
And, beneath React creates an instance for every occurences of a React Component, creating a SFC is not much faster than creating a Class Component. The two take similar time, so no performance issue here.  
On the other side, Class Components allow us to improve performance, by transforming them in Pure components. A Pure component does not call its render method if props are not changed and this is a great performance improvement (if we're using **redux**, all connected components become **pure** automatically).

```js
class MyPureComponent extends React.PureComponent { } // easy one, isn't it?!
```

So you should think Class Components win, because perforance are crucial. Well, they don't. React reconciliator is fast. The VirtualDOM is fast. React is fast. Very fast. And you probably will never have a performance issue, unless very particular case. And rendering hundreds of inputs or labels is not that case.

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

## 3. Patterns

We may easily change name of this parageph to **Composition**. Why? Because the first thing we should start learning is how to compose software. We all learnt **OOP** and, as I recently discovered, we learnt in the worst way. All I knew was wrong, well, not the whole package, just the main principle: inheritance is bad, very bad, and multiple iheritance is evil, very evil.  
We can't talk in deep about software composition in this document, it's a too vast argument. Just remember one single simple concept: **Composition over Inheritance**, EVER! Inheritance is the worst way to approach OOP. It's not necessary and has tons of disadvanges. You do something with inheritance, you can do it better with functions and objects composition. This is the main point: we learnt inheritance in OOP when we should have learnt object composition in OOP.  
Yes, ES6 introduces classed in javascript. Yes, you can inheritate in js. Yes again, you must not. Use functional programming and function composition to build your software. You should not necessary learn fucntional programming theory in dept (monoid, mondad, functor, endofunctor, category...). Neither you should write your code using Heskell. Just the base, it's simple, it's easy, it's cool.  
So, in next paragraphs we will see how to create our software, composing React components and learning the best tecnique to pass information from children to parent and viceversa.

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

The **NumberList** component receives a list of numbers, renders them into separated divs and registers a different callback for each entry. The callback receive the clicked number itself, so that the container can pass it to another component, which renders the selected number into a span.  
This is a typical example, a simple one, but quite interesting and generic of how child component can pass an informationa (the selected number) to its parent.

#### 3.1.2 Common store (indirect)

Another classical use case is storing data into a common store. When the store changes, React re-renders its tree.  
The most common _store manager_ is Redux, but mobx is another valid alternative or, dunno why you should but you could, write your own one. Anyway, the concept is always the same. We're not goint to talk about Redux in this document, since it's not the right place. You just know Redux. If not, go and learn it!

### 3.2 Parent to children

#### 3.2.1 Higher Order Component pattern

#### 3.2.2 Clonation pattern

#### 3.2.3 Provider/Consumers pattern

#### 3.2.4 Render prop pattern

#### 3.2.4.1 Function as children pattern