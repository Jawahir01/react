import React from "react";

class StatefulGreeting extends React.Component {
    constructor(props) {
        super(props);
        // Initializing state in the constructor
        this.state = {
        introduction: "Hello, welcome to the stateful component!",
        textButton: "Click ",
        count: 0
        };
    }

    // handleClick() {
    //     // Updating the state when the button is clicked using setSate and merge the new state with the old one
    //     this.setState({
    //         introduction: "You clicked the button!",
    //         textButton: "Clicked!"
    //     }, () => {
    //         // Callback function to log the updated state
    //         console.log("new state: ", this.state.introduction )
    //         console.log("new state: ", this.state.textButton )
    //     });
    //     // Logging the state before the update
    //     console.log(this.state.introduction);
    //     console.log(this.state.textButton);  
    // }

    handleClick2() {
        // Updating the state when the second button is clicked
        this.setState({
            introduction: this.state.introduction === "Hello, welcome to the stateful component!" ? "You clicked the second button!": "Hello, welcome to the stateful component!" ,
            textButton: this.state.textButton === "Click" ? "Clicked again!" : "Click",
        }, () => {
            // Callback function to log the updated state
            console.log("new state: ", this.state.introduction )
            console.log("new state: ", this.state.textButton )
        });
        // Logging the state before the update
        console.log(this.state.introduction);
        console.log(this.state.textButton);  
    }

    increament() {
        // Incrementing the count in the state
        this.setState({
            count: this.state.count + 1
        }, () => {
            // Callback function to log the updated count
            console.log("Count incremented: ", this.state.count);
        })
    }
  
  render() {
    return( 
      <div>
        <h1>Stateful Class Greeting!! {this.props.greetings}</h1>
        <h3>{this.state.introduction}</h3>
        {/* <button onClick={() => this.handleClick()}>{this.state.textButton}</button> */}
        <button onClick={() => this.handleClick2()}>{this.state.textButton}</button>
      
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.increament()}>Increment Count</button>
    </div>
    );
  }
}

export default StatefulGreeting;
// This code defines a stateful class component in React.


// It extends React.Component and implements a render method that returns a JSX element.
// The component receives props and displays a greeting message that includes the value of the "greetings" prop.
// If used like this {props.greetings}it would generate an error,  failed to compile, props is not defined.
// This is because in order to access  props in a stateful component,
// we need to refer to them as part of  the class by using the this keyword.
