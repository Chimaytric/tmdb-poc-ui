import { useEffect, useState } from 'react';

const useFetchData = (fetchFunction) => {
    const [{ data, isLoading }, setData ] = useState({ data : [], isLoading : true });

    useEffect(() => {
        (async () => {
            const data = await fetchFunction()
            setData({ data, isLoading : false });
        })();
    }, []);

    return [data, isLoading];
};

export default useFetchData;
