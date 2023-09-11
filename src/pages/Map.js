import React from 'react';

const Map = () => {
    const arr = ["비", "얼음", "눈", "바람"];
    const result = arr.map((name) => <li>{name}</li>);
    
    return (
    <div>
        <p>Arr: {arr}</p>
        <p>Output: {result}</p>
    </div>
    );
};

export default Map;