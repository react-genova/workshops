### MovieContainer List ###

```js
const postRating=({id,rating})=>{alert(id+": "+rating);console.log(id,rating)};
const moviesFetch = {
    fulfilled: true,
    value: {
        "2": {
            id: "2",
            title: "Ave, Cesare!",
            original: "Hail, Caesar!",
            rating: 3,
            year: 2016
        },
        "3": {
            id: "3",
            title: "Frantic",
            original: "Frantic",
            rating: 3,
            year: 1988
        },
        "4": {
            id: "4",
            title: "Il ritorno dello Jedi",
            original: "Return of the Jedi",
            rating: 4,
            year: 1983
        }
    }
};

<MovieContainer moviesFetch={moviesFetch} postRating={postRating}/>
```

### MovieContainer Error ###

```js
const postRating=({id,rating})=>{alert(id+": "+rating);console.log(id,rating)};
const moviesRefresh=()=>{alert("refresh")}
const moviesFetch = {
    rejected: true
};

<MovieContainer moviesFetch={moviesFetch} moviesRefresh={moviesRefresh}/>
```

### MovieContainer pending ###

```js
const moviesFetch = {
    pending: true
};

<MovieContainer moviesFetch={moviesFetch} />
```