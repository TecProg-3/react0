//import React from 'react';
import './App.css';
import {Persona} from './Persona'

function App() {
  return (
    <div className='App'> 
    <Persona nombre={"Juan"} edad={null}/> 
    <Persona nombre={"Pedro"} edad={3}/>
    <Persona nombre={"Luis"} edad={30}/>
    </div>
  );
}

export default App;
