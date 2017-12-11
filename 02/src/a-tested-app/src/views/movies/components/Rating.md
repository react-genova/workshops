### Rating ###

```js
require('semantic-ui-css/semantic.min.css');
const onRate=(newRate)=>{alert(newRate);console.log(newRate)};
<Rating maxRating={10} rating={5} id={1} onRate={onRate}/>
```