import React from "react";

class StatefulGreeting extends React.Component {
    constructor(props) {
        super(props);
        // Initializing state in the constructor
        this.state = {
        introduction: "Hello, welcome to the stateful component!",
        textButton: "Click "
        };
    }
  
  render() {
    return( 
      <div>
        <h1>Stateful Class Greeting!! {this.props.greetings}</h1>
        <h3>{this.state.introduction}</h3>
        <button>{this.state.textButton}</button>
      </div>
    )
  }
}

export default StatefulGreeting;
// This code defines a stateful class component in React.


// It extends React.Component and implements a render method that returns a JSX element.
// The component receives props and displays a greeting message that includes the value of the "greetings" prop.
// If used like this {props.greetings}it would generate an error,  failed to compile, props is not defined.
// This is because in order to access  props in a stateful component,
// we need to refer to them as part of  the class by using the this keyword.
