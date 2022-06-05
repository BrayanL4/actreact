import React from 'react';

function FCCF() {
    const [number, setNum] = React.useState({ one: ""});
    const [result, setResult] =React.useState();

    const handleInput = function (ev) {
      setNum({
        ...number,
        [ev.target.name]: ev.target.value
      });
    };

    const FC = function () {
        setResult((+number.one) * (1.8) + (32));
        };
    const CF = function () {
    setResult(((+number.one) - (32)) / (1.8));      
        };

    return <>
        <div className="Operations">
            <h2>Enter the temperature and click to change it</h2>
            <div>
                <input className="input" onChange={handleInput} name="one" value={number.one} type="text" />
            </div>
            <div>
                <button onClick={CF}>Celsius</button>
                <button onClick={FC}>Fahrenheit</button>
            </div>
            <div>
                <h4>Result: <span> {result} </span> </h4> 
            </div>
        </div>
    </>
}

export default FCCF;