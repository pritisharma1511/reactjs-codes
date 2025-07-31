import NetflixSeries from "./components/NetflixSeries.jsx";
// import "./components/Netflix.css";
import'./components/Netflix.module.css';
import { Fragment } from "react";
export const App = () => {
  return(
    <section className="container">
      <h1 className="card-heading">List of Best Netflix Series</h1>
      <NetflixSeries />
    </section>
  );
};