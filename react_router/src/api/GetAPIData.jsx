export const getMovieData = async () => {
    try {
        fetch(
            `https://www.omdbapi.com/?i=tt3896198&apikey=5fe6720f${import.meta.env.VITE_API_KEY}&s=titanic&page=1`
        );
        const data =Response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};
