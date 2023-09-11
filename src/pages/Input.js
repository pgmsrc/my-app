import React, {useState} from "react";

const Input = () => {
    const [txtValue, setTxtValue] = useState("");
    
    const eventChange = (e) => {
        setTxtValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={txtValue} onChange={eventChange} />
            <br />
            <p>{txtValue}</p>
        </div>
    )
}

export default Input;