import React from 'react';
import { LocalOffer } from '@material-ui/icons';

import { MovieContainer, Poster, Details, Title, Synopsis, Genres, Genre } from './styles';

const Movie = ({ poster, title, synopsis, genres, isSelected, toggleIsSelected }) => (
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

export default Movie;
