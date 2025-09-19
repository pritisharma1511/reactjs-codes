import axios from "axios";
import { useEffect ,useState} from "react";

export const Movie = () => {
    const[data, setData] = useState([]);
 const API = 
         "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f";
        //  const searchUrl = `https://www.omdbapi.com/?s=titanic&page=1&apikey=1c12799f`;


     
    const getMovieData =  async() => {
        try {
        const res = await axios.get(API);
        console.log(res.data);
        setData(res.data);
        } catch (error) {
            console.log("error");
        }   
    };
    useEffect(() => {
        getMovieData();
    }, []);




  return <h1>Movie Page</h1>
}
