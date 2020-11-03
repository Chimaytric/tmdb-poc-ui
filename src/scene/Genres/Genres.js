import React, { useState } from 'react';
import { LocalOffer } from '@material-ui/icons';

import { GenresContainer, Genre } from './styles';

const Genres = ({ isLoading, genres, genreFilters, toggleGenreFilter }) => {

    const genresList =  genres.map(({ id, name }) => (
        <Genre
            key={id}
            isActive={Boolean(genreFilters.find(genre => genre === id) || genreFilters.length === 0)}
            onClick={() => toggleGenreFilter(id)}
        >
            <LocalOffer />
            {name}
        </Genre>
    ));

    return (
        <GenresContainer>
            {genresList}
        </GenresContainer>
    );
};

export default Genres;
