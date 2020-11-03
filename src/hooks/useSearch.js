import { useState } from 'react';
import { evolve, equals, find, map, pipe, prop } from 'ramda';

import { URL, SEARCH_ENDPOINT } from '../constants';
import { fetchUrl } from '../utils';

const useSearch = (genres) => {
    const [{ movies, isLoading}, setData] = useState({ movies : [], isLoading : false });

    const search = async (searchKey) => {
        setData({ movies : [], isLoading : true});
        let results = await fetchUrl(`${URL}${SEARCH_ENDPOINT}${encodeURI(searchKey)}`);
        results = map(
            pipe(
                evolve({
                    genres : map(gId => find(pipe(prop('id'), equals(gId)))(genres)),
                }),
            ),
            results,
        );
        setData({ movies : results, isLoading : false });
    };

    return [movies, isLoading, search];
};

export default useSearch;
