import React from "react";

// This is a functional component that takes in props and returns a greeting message.
const FunctionalGreetingWithProp = (props) => {
  return <h1>Hello, I'm {props.name}! {props.greeting}</h1>;
};
// The above code is a functional component that uses an arrow function to define the component.
// It takes in props as an argument and returns a JSX element that displays a greeting message.
// The component can be used in other parts of the application by importing it and using it as a JSX element.

export default FunctionalGreetingWithProp;