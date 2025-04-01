//import React from 'react';
import './App.css';
import {Persona, iPersona} from './Persona'


function App() {
  const personas = [{nombre: "juan", edad: 30},{nombre: "luis", edad: 20},{nombre: "pedro", edad: 31}];
  return (
    <div className='App'> 
       {personas.map((p) => (
        <Persona nombre={p.nombre} edad={p.edad}/>
      ))}
    </div>
  );
}

export default App;
