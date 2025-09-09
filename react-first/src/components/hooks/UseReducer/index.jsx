import  { use, useReducer } from 'react';
export const ReducerComp = () => {
    const initialState = {
        count : 0,
    };


    const Reducer = (state, action) =>{
        console.log(state, action);
        if(action.type === 'increment'){
            return state + 1;
        }
        if(action.type === 'decrement'){
            return state - 1;
        }  
        if(action.type === 'reset'){
            return state = 0;
        } 
    };
    // const [count,setcount] = useState(0);
    const [state, dispatch] = useReducer(Reducer, initialState);
    console.log(useReducer(Reducer, 0));

    return (
        <>
        <div className= "p-4 h-lvh flex flex-col justify-center items-center">
            <h1>{count}</h1>
             <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
             <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
              <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </div>
        </>
    );
};
    
    
    
    
    
    
    