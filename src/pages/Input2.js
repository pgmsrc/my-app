import React, {useState} from "react";

const Input2 = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        tel: ""
    });
    
    const {name, email, tel} = inputs;
    
    const eventChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;

        setInputs({ ...inputs, [id]: value })
    };

    return (
        <div>
            <div>
                <label>Name</label>
                <input type="text" id="name" value={name} onChange={eventChange}></input>
            </div>
            <div>
                <label>email</label>
                <input type="email" id="email" value={email} onChange={eventChange}></input>
            </div>
            <div>
                <label>Phone</label>
                <input type="tel" id="tel" value={tel} onChange={eventChange}></input>
            </div>
            <p>이름: {name}</p>
            <p>이메일: {email}</p>
            <p>전화: {tel}</p>
        </div>
    );

}

export default Input2;