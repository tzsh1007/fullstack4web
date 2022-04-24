import React, { useState } from "react";

const Display = ({ counter }) => <div>{counter}</div>


const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)



const App = () => {
    const [counter, setCounter] = useState(0);

    const increaseByOne = () => setCounter(counter + 1);
    const decreaseByOne = () => setCounter(counter - 1);
    const setToZero = () => setCounter(0);

    return (
        <>
            <Display counter={counter} />
            <Button onClick={increaseByOne} text="plus"></Button>
            <Button onClick={setToZero} text="zero"></Button>
            <Button onClick={decreaseByOne} text="minus"></Button>
        </>
    )
}

export default App;