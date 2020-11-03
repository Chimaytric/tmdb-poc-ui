import { filter, identity, ifElse, intersection, isEmpty, map, not, pipe, prop } from 'ramda';

const filterMovies = (movies, genreFilters) => ifElse(
    () => isEmpty(genreFilters),
    identity,
    filter(pipe(
        prop('genres'),
        map(prop('id')),
        intersection(genreFilters),
        isEmpty,
        not,
    )),
)(movies);

export default filterMovies;
