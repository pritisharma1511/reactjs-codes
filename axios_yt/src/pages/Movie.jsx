import axios from "axios";
import { useEffect } from "react";

export const Movie = () => {
 const API = 
         "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f";
         const searchUrl = `https://www.omdbapi.com/?s=titanic&page=1&apikey=1c12799f`;


     
    const getMovieData =  async() => {
        try {
        const res = await axios.get(API,searchUrl);
        console.log(res.data.Search);
        } catch (error) {
            console.log("error");
        }   
    };
    useEffect(() => {
        getMovieData();
    }, []);




  return <h1>Movie Page</h1>
}
