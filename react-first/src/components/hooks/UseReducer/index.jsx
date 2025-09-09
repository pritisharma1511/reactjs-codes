import  { use, useReducer } from 'react';
export const ReducerComp = () => {
    const Reducer = (state, action) =>{
        console.log(state, action);
        if(action.type === 'increment'){
            return state + 1;
        }
        if(action.type === 'decrement'){
            return state - 1;
        }   
    };
    // const [count,setcount] = useState(0);
    const[count, dispatch] = useReducer(Reducer,0);
    console.log(useReducer(Reducer,0));    

    return (
        <>
        <div className= "p-4 h-lvh flex flex-col justify-center items-center">
            <h1>{count}</h1>
             <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
                <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>

        </div>
        </>
    );
};
    
    
    
    
    
    
    