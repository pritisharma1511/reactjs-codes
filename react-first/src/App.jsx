// // import NetflixSeries from "./components/NetflixSeries.jsx";
// // // import "./components/Netflix.css";
// import'./components/Netflix.module.css';
// import {EventHandling} from "./components/EventHandling.jsx";
// import { Fragment } from "react";
// import { EventProps } from './components/EventProps.jsx';
// import { EventPropagation } from './components/EventPropagation.jsx';
// import {State} from "./components/hooks/State.jsx";
// import { DerivedState } from "./components/DerivedState";
// import { LiftingStateUp } from "./components/LiftingStateUp.jsx";
import "./components/Ev.css";
// import { ToggleSwitch } from "./ToggleSwitch/ToggleSwitch.jsx";
import { Todo } from "./ToggleSwitch/Todo/Todo";


export const App = () => {
  return(
    <section className="container">
      <Todo />
      {/* <h1 className="card-heading">List of Best Netflix Series</h1>
      {/* <NetflixSeries /> */}
      {/* <EventHandling /> */}
      {/* <EventProps /> */}
      {/* <EventPropagation /> */}
      {/* <State /> */}
      {/* <DerivedState /> */}
      {/* <LiftingStateUp /> */}
      <ToggleSwitch/>
    </section>
  );
};

