import styled from 'styled-components';

export const SearchBar = styled.div`
    display: flex;
    justify-content: center;
    padding: 40px 20px;
`;

export const SearchInput = styled.input`
    padding : 10px 25px;
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-right: none;
    border-radius: 10px 0 0 10px;
    outline: none;
    width: 600px;
    max-width: 75%;

    ::placeholder {
        font-size: 1.5rem;
        color: rgba(0, 0, 0, 0.4);
    }
`;

export const SearchButton = styled.button`
    padding-right: 25px;
    background: none;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-left: none;
    border-radius: 0 10px 10px 0;
    outline: none;
    cursor: pointer;
`;