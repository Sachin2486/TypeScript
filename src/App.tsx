import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Button } from './components/Button';
import { Container } from './components/container'


function App() {
  return (
    <div className="App">
      <Greet name='Aman' messageCount={26} isLoggedIn={false} />

      <Button 
      handleClick={(event) => {

        console.log('Button Clicked',event)
      }}

      ></Button>
       
    </div>
  );
}

export default App;
