import "./EV.css";

export const EventHandling = () => {
    // function handleButtonClick() {
    //     alert("hey i am a onclick event");
    // }
    

    const handleButtonClick = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        alert("hey i am a onclick event");
    };
    const handleWelcomeUser = (user) => {
        alert(`hello,Welcome ${user}`);
    };

    return (
        <>
          <button onClick={handleButtonClick}>Click Me</button>
          <br/>
          <button onClick={(event) => handleButtonClick(event)}>Click Me 2</button>
          <br/>
          <button onClick={(event) => console.log(event)}>Inline Function</button>
          <br/>
          <button onClick={() => alert("hey i am a inline  event function")}>Inline Alert</button>
          {/* <button onClick={handleWelcomeUser("PRITI")}>Click Me 3</button> */}
          {/* <button onClick={() => handleWelcomeUser("PRITI")}>Click Me </button> */}
            <button onClick={() => handleWelcomeUser("0m")}>Click Me 3</button>

        </>
    );
}