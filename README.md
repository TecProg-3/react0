# Creación de una Aplicación en React con TypeScript

## 1. Configuración del Proyecto

Para comenzar con React y TypeScript, seguimos estos pasos:

1. **Crear la carpeta del proyecto y generar la aplicación**
   ```bash
   npx create-react-app my-app --template typescript
   ```
   Esto crea una aplicación React preconfigurada con TypeScript.

2. **Iniciar la aplicación**
   ```bash
   npm start
   ```
   Esto inicia un servidor de desarrollo que permite ver la aplicación en el navegador.

---

## 2. Primer Componente en React

Dentro del archivo `App.tsx`, dejamos el siguiente código:

```typescript
// App.tsx
import './App.css';

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
```

### Concepto de Componente

Un **componente** en React es similar a una función de JavaScript. Acepta entradas (llamadas `props`) y retorna elementos de React que describen la interfaz gráfica.

### Creación de un Componente Simple

Creamos un nuevo archivo `Persona.tsx` dentro de la carpeta `src` con el siguiente código:

```typescript
export const Persona = () => {
    return (<div>Hola Mundo</div>);
}
```

Luego, modificamos `App.tsx` para incluir el nuevo componente:

```typescript
import './App.css';
import { Persona } from './Persona';

function App() {
  return (
    <div className='App'>
      <Persona />
    </div>
  );
}

export default App;
```

---

## 3. Pasando Parámetros con Props

Para personalizar el componente `Persona`, podemos pasarle **props**.

### Modificamos `App.tsx`:

```typescript
<div className='App'><Persona nombre={"Juan"}/></div>
```

### Modificamos `Persona.tsx`:

```typescript
export const Persona = (props: any) => {
    return (
    <div>
        <p>Hola Mundo {props.nombre}</p>
    </div> );
}
```

También podemos agregar múltiples componentes con diferentes valores de `props`:

```typescript
function App() {
  return (
    <div className='App'>
      <Persona nombre={"Juan"}/>
      <Persona nombre={"Pedro"}/>
    </div>
  );
}
```

---

## 4. Uso de Interfaces en TypeScript

Las **interfaces** permiten definir la estructura de los objetos en TypeScript, lo que ayuda a evitar errores de tipo.

### Modificamos `Persona.tsx` para definir una interfaz:

```typescript
export interface iPersona {
    nombre: string;
    edad: number | null;
}

export const Persona = (props: iPersona) => {
    return (
        <p>Hola Mundo {props.nombre} de {props.edad} años</p>
    );
}
```

Ahora `Persona` espera recibir un nombre y una edad.

---

## 5. Uso del Hook `useState`

`useState` permite manejar estados en los componentes funcionales.

### Modificamos `Persona.tsx` para incluir un botón que muestre u oculte el texto:

```typescript
import { useState } from "react";

interface iPersona {
    nombre: string;
    edad: number | null;
}

export const Persona = (props: iPersona) => {
    const [visible, setVisible] = useState<boolean>(true);

    function toggleVisible() {
        setVisible(!visible);
    }

    return (
        <div>
            <p hidden={!visible}>Hola Mundo {props.nombre} de {props.edad} años</p>
            <button onClick={toggleVisible}>{visible ? "Ocultar" : "Mostrar"}</button>
        </div>
    );
}
```

Este código permite alternar la visibilidad del texto con un botón.

---




## X. Conclusión

- Aprendimos a crear una aplicación en React con TypeScript.
- Vimos cómo funcionan los **componentes** y el **paso de props**.
- Implementamos **interfaces** para tipar las propiedades.
- Usamos el **hook useState** para manejar estado dentro del componente.

