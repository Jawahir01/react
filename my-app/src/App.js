import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/functionalGreeting'; 
import FunctionalGreetingWithProp from './components/functionalGreetingWithProp'; // Importing the functional component with props

// This app function is actually a functional component in itself.
function App() { 
  return (
    
    <div className="App">
      <h1>Hki loool </h1>
      <FunctionalGreeting />
      <FunctionalGreetingWithProp name="John" greeting="nice to meet you" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
