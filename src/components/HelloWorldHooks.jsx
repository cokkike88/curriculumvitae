import React, { useState } from 'react';

const HelloWorldHooks = () => {

    const [active, setActive] = useState(true);

    let handleClick = () => {
        setActive(!active);
    }

    return (
        <div>
            <button onClick={handleClick}>Ocultar</button>
            {active &&
                <h1>Hola mundo con hooks</h1>
            }
        </div> 
     );
}
 
export default HelloWorldHooks;