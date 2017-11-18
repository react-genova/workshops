### Simple label ###

```js
<LabelLink title="Google" description="One of the best search engine" url="http://www.google.it/" onClick={()=>null}/>
```

### On click behaviour ###

```js
initialState = { clickedUrl: 'none' };
function onClick(clickedUrl) {setState({clickedUrl})};
<div>
<div style={{display:'flex', justifyContent:'space-evenly'}}>
    <LabelLink title="Google" description="One of the best search engine" url="http://www.google.it/" onClick={onClick}/>
    <LabelLink title="Duck Duck Go" description="Another search engine" url="https://duckduckgo.com/" onClick={onClick}/>
</div>
<div style={{paddingTop:'1.4em', fontSize:'1.2em'}}>
    <span>You clicked on: </span>
    <span style={{fontWeight:'bold', color:'green'}}>{state.clickedUrl}</span>
</div>
</div>
```