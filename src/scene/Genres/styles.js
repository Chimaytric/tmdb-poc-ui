import styled from 'styled-components';

export const GenresContainer = styled.div`
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Genre = styled.div`
    display: flex;
    align-items: center;
    margin: 5px;
    padding: 5px;
    font-size: 0.85em;
    color : ${({ isActive }) => isActive ? 'white' : 'rgba(0, 0, 0, 0.8)'};
    border: 1px solid rgba(0, 0, 0, 0.8);
    background: ${({ isActive }) => isActive ? 'rgba(0, 0, 0, 0.8)' : 'none'};
    border-radius: 5px;
    cursor: pointer;

    > *:first-child {
        transform: rotate(90deg);
        margin-right: 5px;
        font-size: 0.9rem;
    }
`;