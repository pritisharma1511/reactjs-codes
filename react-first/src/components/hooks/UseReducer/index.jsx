import  { useReducer } from 'react';
export const ReducerComp = () => {
    // const [count,setcount] = useState(0);
    const[count, dispatch] = useReducer(ReducerComp,0);

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
    
    
    
    
    
    
    