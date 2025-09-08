import { DarkLight,ThemeProvider } from "./components/hooks/ContextAPI/DarkLight";




export const App = () => {
  return (
    <>
    <ThemeProvider>
      <DarkLight />
    </ThemeProvider>
   
    </>
  );
}

























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
// import "./components/Ev.css";
// import { ToggleSwitch } from "./ToggleSwitch/ToggleSwitch.jsx";
//   import { Todo } from "./project/Todo_list/Todo.jsx";
// import ShortCircuitExample  from "./components/hooks/ShortCircuit.jsx";
// import { BioProvider } from "./components/hooks/ContextAPI/index.jsx";
// import { Home } from "./components/hooks/ContextAPI/Home.jsx";
// import { About } from "./components/hooks/ContextAPI/About.jsx";
// import { Services } from "./components/hooks/ContextAPI/Services.jsx";
// // import {ParentComponent} from "./components/PropDrilling.jsx";

// export const App = () => {
//   return (
//     <>
//     <BioProvider>
//         <Home />
//         <About />
//         <Services />
//     </BioProvider>
    
//     </>
//   );
// };
    //   {/* <h1 className="card-heading">List of Best Netflix Series</h1>
    //   {/* <NetflixSeries /> */}
    //   {/* <EventHandling /> */}
    //   {/* <EventProps /> */}S
    //   {/* <EventPropagation /> */}
    //   {/* <State /> */}
    //   {/* <DerivedState /> */}
    //   {/* <LiftingStateUp /> */}
    //   {/* <ToggleSwitch/>
    // </section> */}
 
