import React, { useState } from "react";


const Statistics = (props) => {
    const { good, neutral, bad } = props;
    const all = good + neutral + bad;
    if (all === 0) {
        return (
            <div>
                <h3>statistics</h3>
                <div>No feedback given</div>
            </div>
        )
    }
    const positive = good / all * 100;
    return (
        <div>
            <h3>statistics</h3>
            <StatisticsLine text="good" value={`${good}`} />
            <StatisticsLine text="neutral" value={`${neutral}`} />
            <StatisticsLine text="bad" value={`${bad}`} />
            <StatisticsLine text="all" value={`${all}`} />
            <StatisticsLine text="average" value={`${all}`} />
            <StatisticsLine text="positive" value={`${positive}%`} />
        </div>
    )
}

const StatisticsLine = (props) => {
    return (
        <div>{props.text} {props.value}</div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
    )
}

const Normal = (props) => {
    const { good, neutral, bad, all, setGood, setNeutral, setBad } = props;
    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={setGood} text="good" />
            <Button onClick={setNeutral} text="neutral" />
            <Button onClick={setBad} text="bad" />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

const TableList = (props) => {
    const { good, neutral, bad, all, setGood, setNeutral, setBad } = props;
    <div>
        <h1>give feedback</h1>
        <Button onClick={setGood} text="good" />
        <Button onClick={setNeutral} text="neutral" />
        <Button onClick={setBad} text="bad" />
        <h3>statistics</h3>
        <table>
            <tbody>
                <tr>
                    <td>good</td>
                    <td>{good}</td>
                </tr>
                <tr>
                    <td>neutral</td>
                    <td>{neutral}</td>
                </tr>
                <tr>
                    <td>bad</td>
                    <td>{bad}</td>
                </tr>
                <tr>
                    <td>all</td>
                    <td>{all}</td>
                </tr>
                <tr>
                    <td>average</td>
                    <td>{all / 3}</td>
                </tr>
                <tr>
                    <td>positive</td>
                    <td>{all === 0 ? 0 : good / all * 100}%</td>
                </tr>
            </tbody>
        </table>
    </div>
}


const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const all = good + neutral + bad;
    const anecdotes = [
        "If it hurts, do it more ofter",
        "Adding manpower to a late software project makes it later!",
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ];
    const [selected, setSelected] = useState(0);
    function onClick() {
        const random = Math.floor((Math.random() * 1000)) % 7;
        setSelected(random);
    }
    const [points, setPoints] = useState(() => Array(7).fill(0));
    function vote() {
        const copy = [...points];
        copy[selected] = copy[selected] + 1;
        setPoints(copy);
        let i = 0;
        let most = copy[i];
        let length = anecdotes.length;
        for (let index = 1; index < length; index++) {
            if (copy[index] > most) {
                most = copy[index];
                i = index;
            }
        }
        setMost(i);
    }

    const [most, setMost] = useState(0);
    console.log("----------->", points);
    return (
        <div>
            <h1>Anecdotes of the day</h1>
            <div>{anecdotes[selected]}</div>
            <div>has {points[selected]} votes </div>
            <button onClick={vote}>vote</button>
            <button onClick={onClick}>next anecodtes</button>
            <h1>Anecdote with most votes</h1>
            <div>{anecdotes[most]}</div>
            <div>has {points[most]} votes</div>
        </div>
    )
}

export default App