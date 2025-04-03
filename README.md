

# **📌 Explicación del Código: Formulario en React con TypeScript**  

## **1️⃣ ¿Qué Hace el Código?**  
Este código crea un **formulario interactivo** en React para agregar personas a una lista. Usa **TypeScript** para definir estructuras de datos y `useState` para manejar estados dinámicos.  

📌 **Funcionalidades principales:**  
✅ Captura datos del usuario con un formulario.  
✅ Agrega personas a una lista sin modificar el estado original.  
✅ Muestra la lista de personas en pantalla.  

---

## **2️⃣ Estructura del Código**  
El código se divide en dos archivos principales:  

### **🔹 1. `App.tsx` (Componente Principal)**
Gestiona el formulario y la lista de personas.  

```typescript
import './App.css';
import { useState } from "react";
import { Persona } from './Persona';

// Definir una interfaz para la estructura de una persona
interface iPersona {
  nombre: string;
  edad: number;
  ocupacion: string;
}

function App() {
  // Estado para almacenar la lista de personas
  const [personas, setPersonas] = useState<iPersona[]>([]);

  // Estado para capturar los valores del formulario
  const [formData, setFormData] = useState<iPersona>({
    nombre: "",
    edad: null,
    ocupacion: ""
  });

  // Función que maneja los cambios en los inputs
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData, // Mantiene los valores previos
      [event.target.name]: event.target.value // Actualiza el campo modificado
    });
  };

  // Función que agrega una persona al array cuando se envía el formulario
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita que la página se recargue
    if (formData.nombre && formData.edad && formData.ocupacion) {
      setPersonas([...personas, { ...formData, edad: Number(formData.edad) }]);
      setFormData({ nombre: "", edad: null, ocupacion: "" }); // Limpia el formulario
    }
  };

  return (
    <div className='App'>
      <h2>Agregar Persona</h2>
      {/* Formulario para ingresar datos */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
        <input type="number" name="edad" placeholder="Edad" value={formData.edad || ""} onChange={handleChange} required />
        <input type="text" name="ocupacion" placeholder="Ocupación" value={formData.ocupacion} onChange={handleChange} required />
        <button type="submit">Agregar</button>
      </form>

      <h2>Lista de Personas</h2>
      {/* Recorre la lista y muestra los componentes Persona */}
      {personas.map((p, index) => (
        <Persona key={index} nombre={p.nombre} edad={p.edad} ocupacion={p.ocupacion} />
      ))}
    </div>
  );
}

export default App;
```

---

### **🔹 2. `Persona.tsx` (Componente de Persona)**
Muestra la información de cada persona en la lista.  

```typescript
// Interfaz para definir la estructura de una persona
interface iPersona {
  nombre: string;
  edad: number;
  ocupacion: string;
}

export const Persona = (props: iPersona) => {
  return (
    <div>
      <p><strong>Nombre:</strong> {props.nombre}</p>
      <p><strong>Edad:</strong> {props.edad} años</p>
      <p><strong>Ocupación:</strong> {props.ocupacion}</p>
      <hr />
    </div>
  );
};
```

---

## **3️⃣ Explicación de las Partes Clave**
### **🟢 1. Estado del Formulario (`useState`)**  
- `useState<iPersona>(...)` crea un estado para almacenar los valores del formulario.  
- Se actualiza con `setFormData` cada vez que el usuario escribe.  

```typescript
const [formData, setFormData] = useState<iPersona>({
  nombre: "",
  edad: null,
  ocupacion: ""
});
```

### **🟢 2. Función `handleChange` para Capturar Datos**  
- Detecta cambios en los inputs y actualiza el estado.  
- Usa `...formData` para mantener los valores previos.  

```typescript
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({
    ...formData, // Mantiene los valores anteriores
    [event.target.name]: event.target.value // Actualiza solo el campo modificado
  });
};
```

### **🟢 3. Función `handleSubmit` para Agregar Personas**  
- Evita que la página se recargue con `event.preventDefault()`.  
- Agrega la nueva persona al array `personas`.  
- Limpia el formulario después de agregar.  

```typescript
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  if (formData.nombre && formData.edad && formData.ocupacion) {
    setPersonas([...personas, { ...formData, edad: Number(formData.edad) }]);
    setFormData({ nombre: "", edad: null, ocupacion: "" });
  }
};
```

### **🟢 4. Renderizado Dinámico de Personas**  
- Usa `map()` para recorrer la lista y mostrar un componente `<Persona />` por cada elemento.  

```typescript
{personas.map((p, index) => (
  <Persona key={index} nombre={p.nombre} edad={p.edad} ocupacion={p.ocupacion} />
))}
```

---

## **4️⃣ Explicación del Operador `...` (Spread Operator)**
Se usa en varias partes del código:

| **Caso** | **Código** | **Explicación** |
|----------|-----------|----------------|
| **Copiar estado del formulario** | `{...formData, [event.target.name]: event.target.value}` | Mantiene los valores anteriores y actualiza solo el campo cambiado. |
| **Agregar una nueva persona** | `setPersonas([...personas, { ...formData, edad: Number(formData.edad) }])` | Copia la lista existente y agrega una nueva persona sin modificar la original. |

📌 **¿Por qué usamos `...`?** Para evitar modificar directamente el estado, lo que en React es **una mala práctica**.

---

## **5️⃣ Resultado Final en la Página**
### **Formulario para Agregar Personas**
```
[ Nombre: _________ ]  
[ Edad:  _________ ]  
[ Ocupación: _________ ]  
[ Agregar ]  
```
✅ **Cada vez que agregas una persona, aparece en la lista:**

```
Lista de Personas
Nombre: Juan   Edad: 30 años   Ocupación: Ingeniero  
--------------------------------------------------  
Nombre: Ana    Edad: 25 años   Ocupación: Doctora  
--------------------------------------------------  
```

---

## **6️⃣ Conclusión**
📌 **Puntos clave a destacar en clase:**  
✅ `useState` permite manejar estados en React.  
✅ El operador `...` (`spread`) copia datos sin modificar los originales.  
✅ `handleChange` captura los valores del formulario dinámicamente.  
✅ `handleSubmit` agrega la nueva persona sin alterar la lista anterior.  
✅ `map()` se usa para renderizar listas de componentes dinámicamente.  

---

🚀 **¿Quieres agregar más funcionalidades, como eliminar personas o editar datos?** 😊