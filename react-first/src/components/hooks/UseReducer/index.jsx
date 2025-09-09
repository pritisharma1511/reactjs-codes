import  { use, useReducer } from 'react';
export const ReducerComp = () => {
    const Reducer = (state, action) =>{};
    // const [count,setcount] = useState(0);
    const[count, dispatch] = useReducer(Reducer,0);
    console.log(useReducer(Reducer,0));    

    return (
        <>
        <div className= "p-4 h-lvh flex flex-col justify-center items-center">
            <h1></h1>
             <button>increment</button>
                <button>decrement</button>  

        </div>
        </>
    )
}
    
    
    
    
    
    
    