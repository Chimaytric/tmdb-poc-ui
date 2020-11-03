import React, { useState } from 'react';
import { LocalOffer } from '@material-ui/icons';

import { MovieContainer, Poster, Details, Title, Synopsis, Genres, Genre } from './styles';

const Movie = (movie) => {
    const [isSelected, setIsSelected, toggleIsSelected] = [...useState(false), () => setIsSelected(!isSelected)];

    const { poster, title, synopsis, genres } = movie;

    return (
        <MovieContainer isSelected={isSelected} onClick={toggleIsSelected} >
            <Poster isSelected={isSelected} src={poster} />
            <Details isSelected={isSelected}>
                <Title>{title}</Title>
                <Synopsis>{synopsis}</Synopsis>
                <Genres>
                    {genres.map(({ id, name }) => (
                        <Genre key={id}><LocalOffer />{name}</Genre>
                    ))}
                </Genres>
            </Details>
        </MovieContainer>
    );
}

export default Movie;
