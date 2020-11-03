import React, { useState } from 'react';
import { Search as SearchIcon } from '@material-ui/icons';

import { SearchBar, SearchInput, SearchButton } from './styles';

const Search = ({ search }) => {
    const [searchKey, setSearchKey, setSearchKeyFromEvent] = [...useState(''), e => setSearchKey(e.target.value)];

    const onEnterPress = (e) => {
        const code = e.keyCode || e.which;

        if (code === 13) {
            search(searchKey);
        }
    }

    return (
        <SearchBar>
            <SearchInput type="text" placeholder="Look for movies" value={searchKey} onChange={setSearchKeyFromEvent} onKeyPress={onEnterPress} />
            <SearchButton onClick={() => search(searchKey)} ><SearchIcon /></SearchButton>
        </SearchBar>
    );
};

export default Search;
