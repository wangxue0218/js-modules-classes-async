const url = "https://v1.jinrishici.com/all.json";
export const getPoetry = async () => {
    const result = await fetch(url)
        .then((response) => response.json())
        .catch((err) => console.log(err));
    return [result.origin, result.author, result.content];
};
