import "./Ev.css";
export const EventPropagation = () => {
 const handleGranPrent =() => {
     console.log("Grandparent clicked");
 };
    const handleParentClick = () => {
        console.log("Parent clicked");
        
    };
    const handleChildClick =(event) => {
        console.log(event);
        event.stopPropagation(); // Prevents the event from bubbling up to parent elements
        console.log("Child clicked");
        
    };
    return (
        <section className="main-div">
            <div className="g-div" onClickCapture={handleGranPrent}>
                <div className="p-div" onClickCapture={handleParentClick}>
                    <button className="c-div" onClickCapture={handleChildClick}>
                        Click me
                    </button>
                </div>
            </div>
        </section>
    );




};
