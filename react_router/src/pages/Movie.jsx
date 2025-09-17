import { useLoaderData } from "react-router-dom";   
export const Movie = () => {
    const movieData = useLoaderData();
    console.log(movieData);
    return <h1>This is Movie page</h1>;
};