import seriesData from "../api/seriesData.json";
import {SeriesCard} from "./SeriesCard";


 
 const NetflixSeries = () => {
//   const name = "Queen of tears";
//   const rating = 8.2;
//   const summary = "baek Hyun-woo and hong hae-in navigate a tense relationship, both at home and at work.";
//   let age=15;

//   // let canWatch = "Not Available";
//   // if (age >= 18) {
//   //   canWatch = "Watch Now";
//   // }
//   const canWatch = () => {
//     if (age >= 18) return "Watch Now";
//     return "Not Available";
//   };



//   const returnGenre = () => {
//     const genre="romcom";
//     return genre;
//   };



//   if(age<18) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <img src="image.png" alt={name} width="40%" height="40%" />
//       <h2>Name:{name}</h2>
//       <h3>Rating :{rating}</h3>
//       <p>Summary: {summary}</p> 
//       <p>Genre: {returnGenre()}</p> 
//       <button>Not Available</button>
//     </div>
//   );
// };
 return (
  
    <ul>
      {seriesData.map((curElem) => (
        <SeriesCard key={curElem.id} data={curElem} />
      ))}
    </ul>
  
);
 };


export default NetflixSeries;


            