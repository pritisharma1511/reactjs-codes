import axios from "axios";
import { useEffect ,useState} from "react";
import { Card } from "../components/UI/Card";

export const Movie = () => {
    const[data, setData] = useState([]);
//  const API = 
//          "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f";
//         //  const searchUrl = `https://www.omdbapi.com/?s=titanic&page=1&apikey=1c12799f`;
const API = "https://www.omdbapi.com/?s=titanic&page=1&apikey=1c12799f";



     
    const getMovieData =  async() => {
        try {
        const res = await axios.get(API);
        console.log(res.data.Search);
        setData(res.data.Search);
        } catch (error) {
            console.log("error");
            console.error("Error message:", error.message);
            console.error("Error status:", error.response.status);
            console.error("Error data:", error.response.data);
        }   
    };
    useEffect(() => {
        getMovieData();
    }, []);




  return (
  <ul className = "container.grid.grid-four-cols">
    {data.map((curElem) =>{
        return <Card key={curElem.imdbID} movieData={curElem} />
       })}
  </ul>
  );    
};
