import React from 'react';

const Content = ({ movies, genres }) => <pre>{JSON.stringify(movies, null, 4)}</pre>;

export default Content;
