import { useState } from "react";

export interface iPersona{
    nombre: string;
    edad: number|null
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
        <button onClick={Visible}> {visible ? "True": "False" } </button>
        </div>
    );
}