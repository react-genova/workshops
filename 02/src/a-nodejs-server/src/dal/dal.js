var fs = require( 'fs' );
var path = require( 'path' );

const MOVIES_FOLDER = path.join(__dirname, 'movies');

const readMovie = name => {
    var movieName = path.join(MOVIES_FOLDER, name);
    return JSON.parse(fs.readFileSync(movieName, 'utf8'));
}

const writeMovie = (name, data) => {
    var movieName = path.join(MOVIES_FOLDER, name);
    fs.writeFileSync(movieName, JSON.stringify(data), 'utf8');
}

const createFileName = id => id + '.json';

const getMovies = () => {
    const files = fs.readdirSync(MOVIES_FOLDER);
    if(files) {
        const movies = {};
        files.forEach( function( file, index ) {
            const movie = readMovie(file);
            movies[movie.id] = movie;
        } );
        return movies;
    }
    return null;
};

const rate = (id, rating) => {
    const file = createFileName(id);
    const movie = readMovie(file);
    if(movie) {
        movie.rating = rating;
        writeMovie(file, movie);
        return movie;
    }
    return null;
};

module.exports = { getMovies, rate };