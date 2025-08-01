// EventProps.jsx
export const EventProps = () => {
   const handleWelcomeUser = (user) => {
       alert(`Welcome ${user}`);
   };

   const handleHover = () => {
       alert("hey thanks for hovering");
   };

   return (
       <>
           <WelcomeUser 
               onClick={() => handleWelcomeUser("PRITI")}
               onMouseOver={handleHover} 
           />
       </>
   );
};

// Define WelcomeUser with PascalCase
const WelcomeUser = (props) => {
    const { onClick, onMouseOver } = props;
    const handleGreeting = () => {
        console.log("Hello User");
        onClick();
    };

    return (
        <>
            <button onClick={onClick}>Click</button>
            <button onMouseOver={onMouseOver}>Hover me</button>
            <button onClick={handleGreeting}>Greeting</button>
        </>
    );
};
