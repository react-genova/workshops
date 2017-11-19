### Simple CardElement ###

```js
<CardElement title="Google" description="One of the best search engine" onClick={()=>null} url="https://www.google.it/" />
```

### Nested CardElements ###

```js
const onClick = ()=>null;
<CardElement title="Search engines" description="A not  exhaustive list of search engines" url="" onClick={onClick}>
    <CardElement title="Google" description="One of the best search engine" url="https://www.google.it/" onClick={onClick}/>
    <CardElement title="Duck Duck Go" description="Another search engine" url="https://duckduckgo.com/" onClick={onClick}/>
</CardElement>
```

### Very Nested CardElements ###

```js
const onClick = ()=>null;
<CardElement title="Most popular sites" description="" url="" onClick={onClick}>
    <CardElement title="e-commerce" description="" url="" onClick={onClick}>
        <CardElement title="Amazon" description="" url="https://www.amazon.it/" onClick={onClick}/>
        <CardElement title="Alibaba" description="" url="https://www.alibaba.com/" onClick={onClick}/>
    </CardElement>
    <CardElement title="Search engines" description="" url="" onClick={onClick}>
        <CardElement title="Google" description="" url="https://www.google.it/" onClick={onClick}/>
        <CardElement title="Duck Duck Go" description="" url="https://duckduckgo.com/" onClick={onClick}/>
    </CardElement>
</CardElement>
```