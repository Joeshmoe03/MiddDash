import React from 'react';
import './App.css';
import Button from './components/Button/Button';

function increment(x: number): number {
  return x + 1;
};

function App() {
  let ntimesclicked: number = 0;
  const handleClick = () => {
    ntimesclicked = increment(ntimesclicked);
    console.log(ntimesclicked);
  };

  return (
    <div className="App">
	<h1> Welcome to MiddDash --Egg version (🥚)</h1>
    <Button onClick={handleClick} label="Click me"/>
    </div>
  );
}

export default App;


// Buttons.tsx ________________________________________________

import { on } from 'events';
import React from 'react';
import './Button.css';

// defines expected props for a button
interface ButtonProps {
    // onClick: () => void;: This line specifies that the onClick prop should be a function that takes no arguments (()) and returns void (i.e., 
    // it doesn't return anything). This is a common pattern for click event handlers.
    onClick: () => void; //void;
    label: string;
}
// FC indicates a functional component of React
const Button: React.FC<ButtonProps> = ({onClick, label}) => {
    return (
        <button className="button" onClick={onClick}>
            {label}
        </button>
    );
};

// export a singlue default value or object from a module
export default Button;
