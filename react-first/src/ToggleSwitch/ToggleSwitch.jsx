
import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";
import { PiUserSwitchFill } from "react-icons/pi";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const checkIsOn = isOn ? "on" : "off";
  const toggleBGColor = { backgroundColor: isOn ? "#4caf50" : "" };

  //subscribe to Thapa Technical Youtube Channel - https://www.youtube.com/thapatechnical
  return (
    <>
     <h1 style={{color: "#000",textAlign: "center"}}>ToggleSwitch <IoIosSwitch />
     <PiUserSwitchFill />
     </h1>
      
      <div
        className="toggle-switch"
        style={toggleBGColor}
        onClick={handleToggleSwitch}
      >
        <div className={`switch ${checkIsOn}`}>
          <span className="switch-state">{checkIsOn}</span>
        </div>
      </div>
    </>
  );
};
