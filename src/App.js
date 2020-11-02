import React, { Suspense } from 'react';

import { useFetchData } from './hooks';
import { Loader } from './scene';

const Content = React.lazy(() => import('./scene/Content'));

const fetchUrl = async (url) => {
    const result = await fetch(url);
    return result.json();
}

const fetchMovies = async () => await fetchUrl('http://localhost:2000/movies');

const fetchGenres = async () => await fetchUrl('http://localhost:2000/genres');

const App = () => {
    const { data : [movies, genres], isLoading } = useFetchData(
        { fetchFunction : fetchMovies, initialValue : [] },
        { fetchFunction : fetchGenres, initialValue : [] },
    );

    const loader = <Loader />;

    return isLoading ? loader : (
        <Suspense fallback={loader}>
            <Content movies={movies} genres={genres} />
        </Suspense>
    );
};

export default App;