import { useState } from "react";

export const Contador = () => {
    const [valor, setValor] = useState(5);

    const contador = (num: number) => {
        setValor(valor + num);
    };

    return (
        <div style={{ border: "2px solid green", padding: "10px", marginBottom: "10px" }}>
            <h3><small>{valor}</small></h3>
            <div>
                <button className="btn btn-primary" onClick={() => contador(5)}> +5</button> 
                &nbsp;
                <button className="btn btn-primary" onClick={() => contador(-5)}> -5</button>
            </div>
        </div>
    );

};
