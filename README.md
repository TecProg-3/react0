crar carpeta my-app

npx create-react-app my-app --template typescript

npm start

dejar lo suiguinte en el achivo App.tsx:
```typescript
//App.tsx
import './App.css';

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;

```
Componete: Conceptualmente, los componentes son como las funciones de JavaScript. Aceptan entradas arbitrarias (llamadas “props”) y retornan elementos de React que describen lo que debe aparecer en la pantalla.

Crear un archivo Persona.tsx dentro de src

```typescript
export const Persona = () => {
    return (<div>Hola Mundo</div>);
}
```

En el archivo App.tsx

```typescript
import './App.css';
import {Persona} from './Persona'

//let nombre:string;
//nombre = "Hola";

function App() {
  return (
    <div className='App'><Persona/></div>
  );
}

export default App;
```
pasaje de parametros con props. Modificar App.tsx

```typescript
<div className='App'><Persona nombre={"Juan"}/></div>
```
Archivo Persona.tsx

```typescript
export const Persona = (props:any) => {
    return (
    <div>
        <p>Hola Mundo {props.nombre}</p>
    </div> );
}
```

Modificado App.tsx:

``` typescript
function App() {
  return (
    <div className='App'> 
    <Persona nombre={"Juan"}/> 
    <Persona nombre={"Pedro"}/>
     </div>
  );
```
Las interfaces de TypeScript sirven para definir la estructura de los objetos, especificar sus propiedades y métodos, y verificar los tipos de datos. Esto ayuda a los desarrolladores a detectar errores de tipo durante el desarrollo

dentro de Persona.tsx

```typescript
export interface iPersona{
    nombre: string;
    edad: number|null;
}
export const Persona = (props:iPersona) => {
    return (
        <p>Hola Mundo {props.nombre} de {props.edad} </p>
    );
}
```

El uso de useState

```typescript
import { text } from "node:stream/consumers";
import { useState } from "react";

interface iPersona{
    nombre: string;
    edad: number|null;
}

export const Persona = (props:iPersona) => {
    const[visible, setVisible] = useState<boolean>(true);
    function Visible(){
        if (visible === true){
            setVisible(false);
        }
        else{
            setVisible(true);        
        }
    }

    return (
        <div>
        <p hidden = {visible}>Hola Mundo {props.nombre} de {props.edad} </p>
        <button onClick={Visible}> {visible ? "Flase": "True" } </button>
        </div>
    );
}

```