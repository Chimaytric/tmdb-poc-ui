import React from 'react';

import { useFetchData, useGenreFilters, useSearch } from './hooks';
import { fetchUrl } from './utils';
import { Search, Genres, Movies } from './scene';
import { URL, GENRES_ENDPOINT} from './constants';

const fetchGenres = async () => await fetchUrl(`${URL}${GENRES_ENDPOINT}`)

const App = () => {
    const [genres, genresLoading] = useFetchData(fetchGenres);

    const { genreFilters, toggleGenreFilter } = useGenreFilters(genres);

    const [movies, moviesLoading, search] = useSearch(genres);

    return (
        <>
            <Search search={search} />
            <Genres isLoading={genresLoading} genres={genres} genreFilters={genreFilters} toggleGenreFilter={toggleGenreFilter} />
            <Movies isLoading={moviesLoading} genreFilters={genreFilters} movies={movies} />
        </>
    );
};

export default App;