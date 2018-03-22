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

### 2.6 SFC or Class Component

One of the most discussed arguments on the community is when to use a Class Component and when a Stateless Functional Component. The best answer, as often occurs, depends on the context and there's no one rule to follow. Let's try to underline some common considerations/questions/faqs about components.

#### Use SFC the more you can

Dan Abramov himself on the React.js official site invites everybody to use SFC. There are several reasons for it, infact SFC:

* are (should be) pure function, and we love pure function
* force you to write simple components. The simplier a thing is the better
* have no lifecycle nor logic so they are perfect for presentational components, where we want to describe only the appearance of something and not its behaviour (presentationals how things look like, containers how things work, best description I've ever heard so far, can't remind the source)
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

### 2.7 Further readings

* [React Components, Elements, and Instances - by Dan Abramov](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html)
* [React Elements VS React Components - by Tyler McGinnis](https://medium.freecodecamp.org/react-elements-vs-react-components-fdc776705880)
* [React Elements vs React Components vs Component Backing Instances - by Willson Mock](https://medium.com/@fay_jai/react-elements-vs-react-components-vs-component-backing-instances-14d42729f62)

## 3. Patterns

### 3.1 Children to parent

#### 3.1.1 Callback (direct)

#### 3.1.2 Common store (indirect)

### 3.2 Parent to children

#### 3.2.1 Higher Order Component pattern

#### 3.2.2 Clonation pattern

#### 3.2.3 Provider/Consumers pattern

#### 3.2.4 Render prop pattern

#### 3.2.4.1 Function as children pattern