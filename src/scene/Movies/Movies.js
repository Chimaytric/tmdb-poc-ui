import React, { useState } from 'react';

import { filterMovies } from '../../utils';
import { Loader } from '../../components';
import { MoviesContainer } from './styles';
import Movie from './Movie';

const Movies = ({ movies, isLoading, genreFilters }) => {
    const [selectedMovie, setSelectedMovie, toggleMovie] = [
        ...useState(null),
        movieId => {
            console.log('toto',movieId,selectedMovie)
            selectedMovie === movieId ? setSelectedMovie(null) : setSelectedMovie(movieId)
        },
    ];
    const moviesList = filterMovies(movies, genreFilters)
        .map(movie => (
            <Movie key={movie.id} {...movie} isSelected={movie.id === selectedMovie} toggleIsSelected={() => toggleMovie(movie.id)} />
        ));
    
    console.log(selectedMovie)

        return isLoading ? <Loader /> : <MoviesContainer>{moviesList}</MoviesContainer>;
};

export default Movies;