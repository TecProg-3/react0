//import React from 'react';
import './App.css';
import {Persona, iPersona} from './Persona'
import { useState } from 'react';


function App() {
  const [persona,SetPersona] = useState<iPersona[]>([]);
  
  const [formData, setFormData] = useState<iPersona>({
    nombre: "",
    edad: null
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.nombre && formData.edad) {
      SetPersona([...persona, { ...formData, edad: Number(formData.edad) }]);
      setFormData({ nombre: "", edad: null }); // Limpiar el formulario
    }
  };
  
  return (
    <div className='App'> 
      <h2> Agregar Persona</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
        <input type="number" name="edad" placeholder="Edad" value={formData.edad || ""} onChange={handleChange} required />
        
        <button type="submit">Agregar</button>
      </form>

      <h2>Lista de Personas</h2>
      {persona.map((p,index) => (
        <Persona key={index} nombre={p.nombre} edad={p.edad}  />
      ))}
    </div>
  );
}

export default App;
