import React, { useState } from 'react';
const LoggaInInputdesktop = () =>{
    const [clicked, setClicked] = useState('not-clicked-desktop')
    const toggleLoggin = () =>{
        setClicked(clicked === 'not-clicked-desktop' ? 'clicked-desktop' : 'not-clicked-desktop' )
    }
    
    return(
        <div>
            <div className="logga-in">
                <img onClick={toggleLoggin} className="inloggning-img" src="/public/images/Vector.png" alt="Logotype"/>
            </div>

            <div className={clicked} >
            <p onClick={toggleLoggin}  className="logga-in-paragraf-desktop"> <span className="span-1"> Personal inlo</span>gg<span className="span-2">nin</span>g</p>
                <label htmlFor="anställningsnummer">Anställningsnummer</label>
                <input id="anställningsnummer" type="text" />
                <label htmlFor="lösenord">Lösenord</label>
                <input id="lösenord" type="password" />
                <button className="logga-in-btn"> Logga In</button>
             </div>

        </div>
    )
}

export default LoggaInInputdesktop