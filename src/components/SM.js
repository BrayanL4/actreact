import React from 'react';

export function  Operation() {
    const [number, setNum] = React.useState({ one: "", two: "" });
    const [result, setResult] =React.useState();

    const handleInput = function (ev) {
      setNum({
        ...number,
        [ev.target.name]: ev.target.value
      });
    };

    const add = function () {
        setResult((+number.one) + (+number.two));
      };
    
       const multi = function () {
        setResult((+number.one) * (+number.two));
      };

    return <>
        <div className="Operations">
            <h2>Enter two number to add or mulplication</h2>
            <div>
                <input className="input" onChange={handleInput} name="one" value={number.one} type="text" />
                <input className="input" onChange={handleInput} name="two" value={number.two} type="text" />
            </div>
            <div>
                <button onClick={add}>Add</button>
                <button onClick={multi}>Multiply</button>
            </div>
            <div>
                <h4>El resultado es: <span> {result} </span> </h4> 
            </div>
        </div>
    </>
}

export default Operation;