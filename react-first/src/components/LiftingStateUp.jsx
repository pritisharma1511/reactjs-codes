import{ useState } from "react";

export const LiftingStateUp = () => {
     const [inputValue, setInputValue] = useState("");
  return (
    <>
    <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
    <DisplayComponent inputValue={inputValue} />

    </>  
  );
};
const InputComponent = ({ inputValue, setInputValue }) => {
 
 
  return (
    <>
      <input
       type="text"
       placeholder="Enter your name"
       value={inputValue} 
       onChange={(e) => setInputValue(e.target.value)}
       ></input>
    </>
  );
};

const DisplayComponent = ({inputValue}) => {
    return <p>the current input value is: {inputValue}</p>
};