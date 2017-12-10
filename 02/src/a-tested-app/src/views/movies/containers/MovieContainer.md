### MovieContainer ###

```js
require('semantic-ui-css/semantic.min.css');
const onRate=(id,newRate)=>{alert(id+": "+newRate);console.log(id,newRate)};
const movies = [
    {
        id: "2",
        title: "Ave, Cesare!",
        original: "Hail, Caesar!",
        rating: 3,
        year: 2016
    },
    {
        id: "3",
        title: "Frantic",
        original: "Frantic",
        rating: 3,
        year: 1988
    },
    {
        id: "4",
        title: "Il ritorno dello Jedi",
        original: "Return of the Jedi",
        rating: 4,
        year: 1983
    }
];

<MovieContainer movies={movies} onRate={onRate}/>
```