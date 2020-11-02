import { useEffect, useState } from 'react';

export default (...fetches) => {
    const initialValue = fetches.map(({ initialValue }) => initialValue);
    const [{ data, isLoading }, setData ] = useState({ data : initialValue, isLoading : true });

    useEffect(() => {
        (async () => {
            const dataPromises = fetches.map(({ fetchFunction }) => fetchFunction());
            const data = await Promise.all(dataPromises)
            setData({ data, isLoading : false });
        })();
    }, []);

    return { data, isLoading };
};
