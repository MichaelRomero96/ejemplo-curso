import React, { useState } from 'react';

export default function ExampleComponent() {

    const numero_1 = 100;
    const numero_2 = 200;
    const resultado = numero_1 + numero_2;
    const datosPantalla = [`presione número "1"`, 'presione número 2', `la suma es ${resultado}`]
    const [state, setstate] = useState(0)
    const [pantalla, setPantalla] = useState(datosPantalla[0]);


    // const guardarNumero_1 = () => {
    //     setPantalla(datosPantalla[1]);
    // }
    // const guardarNumero_2 = () => {
    //     setPantalla(datosPantalla[2]);
    // }

    return (
        <div>
            <h1>{pantalla}</h1>
            <button
                onClick={() => setstate(1)}>numero {numero_1}</button>
            <button
            >numero 2= {numero_2}</button>
        </div>
    )
}

