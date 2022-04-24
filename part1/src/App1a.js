import React from 'react';

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <>
      {props.parts.map(part =>
        (<Part key={part.name} name={part.name} exercises={part.exercises} />)
      )}
    </>
  )
}

const Total = (props) => {
  let total = 0;
  props.parts.forEach(part => {
    total += part.exercises;
  });
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;

const arto = {
  name: "Arto Hellas",
  age: 35,
  education: "PhD",
  greet: function () {
    console.log("hello, my name is " + this.name);
  },
  doAddition: function (a, b) {
    console.log(a + b);
  }
}

arto.growOlder = function () {
  this.age += 1;
}

console.log(arto.age);
arto.growOlder();
console.log(arto.age);

arto.doAddition(1, 4);

const referenceToAdditon = arto.doAddition;
referenceToAdditon(10, 15);

arto.greet();
const referenceToGreet = arto.greet;
// this的值是根据方法如何调用来定义的，当通过引用调用该方法时，this的值就变成了所谓的全局对象
// referenceToGreet();


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hello, my name is " + this.name);
  }
}

const adam = new Person("Adam Ondra", 35);
adam.greet();

const janja = new Person("Janja Garnbret", 22);
janja.greet();

// JavaScript实质上只定义了Boolean, Null, Undefined, Number, String, Symbol, BigInt以及Object几种类型

const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  }
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}