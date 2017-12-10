### Movie ###

```js
require('semantic-ui-css/semantic.min.css');
const onRate=(newRate)=>{alert(newRate);console.log(newRate)};
<Movie id="1" title="Il grande Lebowski" original="The Big Lebowski" rating={5} year={1998} onRate={onRate}/>
```