import styled from 'styled-components';

export const MovieContainer = styled.div`
    display: flex;
    margin: 10px;
    width: ${({ isSelected }) => isSelected ? '600' : '300'}px;
    height: 450px;
    border: 1px solid rgba(0, 0, 0, ${({ isSelected }) => isSelected ? '0.8' : '0'});
    background-size: 100% 100%;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
`;

export const Poster = styled.img`
    width: 300px;
    height: 450px;
    border-radius: ${({ isSelected }) => isSelected ? '20px 0 0 20px' : '20px 20px 20px 20px'};
    transition: all 0.3s ease;
`;
export const Details = styled.div`
    display: flex;
    flex-direction: column;
    opacity: ${({ isSelected }) => isSelected ? '1' : '0'};
    transition: all 0.3s ease;
`;

export const Title = styled.div`
    padding: 10px 15px;
    font-size: 1.1rem;
    test-align: center;
`;

export const Synopsis = styled.div`
    padding: 10px 15px;
    max-height: 250px;
    overflow-y: auto;
    test-align: center;
    text-align: justify;
    text-indent: 1rem;
    line-height: 1.2rem;
`;

export const Genres = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 10px 15px;
`;

export const Genre = styled.div`
    display: flex;
    align-items: center;
    margin: 5px;
    padding: 5px;
    font-size: 0.85em;
    color : white;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    cursor: pointer;

    > *:first-child {
        transform: rotate(90deg);
        margin-right: 5px;
        font-size: 0.9rem;
    }
`;