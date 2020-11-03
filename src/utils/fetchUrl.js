const fetchUrl = async (url) => {
    const result = await fetch(url);
    return result.json();
};

export default fetchUrl;