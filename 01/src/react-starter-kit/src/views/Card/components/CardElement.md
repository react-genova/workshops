### Simple CardElement ###

```js
<CardElement title="Google" description="One of the best search engine"  url="https://www.google.it/" />
```

### Nested CardElements ###

```js
<CardElement title="Search engines" description="A not  exhaustive list of search engines" url="">
    <CardElement title="Google" description="One of the best search engine" url="https://www.google.it/" />
    <CardElement title="Duck Duck Go" description="Another search engine" url="https://duckduckgo.com/" />
</CardElement>
```

### Very Nested CardElements ###

```js
<CardElement title="Most popular sites" description="" url="" >
    <CardElement title="e-commerce" description="" url="" >
        <CardElement title="Amazon" description="" url="https://www.amazon.it/" />
        <CardElement title="Alibaba" description="" url="https://www.alibaba.com/" />
    </CardElement>
    <CardElement title="Search engines" description="" url="" >
        <CardElement title="Google" description="" url="https://www.google.it/" />
        <CardElement title="Duck Duck Go" description="" url="https://duckduckgo.com/" />
    </CardElement>
</CardElement>
```