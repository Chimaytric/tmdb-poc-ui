import React from 'react';

import { filterMovies } from '../../utils';
import { MoviesContainer } from './styles';
import Movie from './Movie';

const Movies = ({ movies, isLoading, genreFilters }) => {
    const moviesList = filterMovies(movies, genreFilters)
        .map(movie => (
            <Movie key={movie.id} {...movie} />
        ));

    return <MoviesContainer>{moviesList}</MoviesContainer>
};

export default Movies;