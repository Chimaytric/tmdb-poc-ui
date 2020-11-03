import { useState } from 'react';
import { append, equals, find, ifElse, pipe, without, uniq } from 'ramda';

const useGenreFilters = (genres) => {
    const [
        genreFilters,
        setGenreFilters,
        addGenreFilter, 
        removeGenreFilter,
        toggleGenreFilter,
    ] = [
        ...useState([]),
        genreId => setGenreFilters(pipe(
            append(genreId),
            uniq,
        )(genreFilters)),
        genreId => setGenreFilters(without([genreId], genreFilters)),
        genreId => find(equals(genreId), genreFilters)
            ? removeGenreFilter(genreId)
            : addGenreFilter(genreId)
    ];

    return { genreFilters, toggleGenreFilter };
};

export default useGenreFilters;