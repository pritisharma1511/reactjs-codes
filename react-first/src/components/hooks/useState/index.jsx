import "../Hooks.css";
import { useState } from "react";

export const Counter = () => {
const[count]


    return(
        <div className="container state-container" style={{
            textAlign:"center" }}>
                <h1>useState Hook!</h1>
                <br/>
                <p> count</p>
                <button className="state-button">Increment</button>
                </div>

        
    );
};