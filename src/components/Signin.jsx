import React, { useState } from "react";

const LoggaInInput = () => {
    const [clicked, setClicked] = useState("not-clicked");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [showError, setShowError] = useState('dont-show-error');


   


    const toggleLoggin = () => {
        setClicked(clicked === "not-clicked" ? "clicked" : "not-clicked");
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        if (username === "mums" && password === "mums") {
            setLoggedIn(true);
            setShowError('dont-show-error');
            setUsername('')
            setPassword('')
        } else {
            setShowError('show-error');
        }
    };
    const handleLogout = () => {
        setLoggedIn(false);
    };

    return (
        <div>
            <div
                className={
                    loggedIn ? "inte-inloggad" : "inte-inloggad-displaynone"
                }
            >
                <div className="logga-in">
                    <img
                        onClick={toggleLoggin}
                        className="inloggning-img"
                        src="/public/images/Vector.png"
                        alt="Logotype"
                    />
                    <p onClick={toggleLoggin} className="logga-in-paragraf">
                       
                        <span className="span-1"> Personal inlo</span>gg
                        <span className="span-2">nin</span>g
                    </p>
                </div>

                <div className={clicked}>
                    <p className="logga-in-paragraf-desktop">
                        
                        <span className="span-1"> Personal inlo</span>gg
                        <span className="span-2">nin</span>g
                    </p>

                    <div className="input-wrapper">
                    <label htmlFor="anställningsnummer">
                        Användarnamn
                    </label>
                    <div>
                    <input
                        id="anställningsnummer"
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                                        
                    </div>

                    
                    <label htmlFor="lösenord">Lösenord</label>
                    <div>
                    <input
                        id="lösenord"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
    
                        </div>
                    </div>
                    <div className={showError}><ul>
                    <li>Kontrollera att du angivit rätt Användarnamn & lösenord</li>
                        </ul>  
                        </div>
                    


                    <button onClick={handleLogin} className="logga-in-btn">
                        {" "}
                        Logga In
                    </button>
                </div>
            </div>

            {/* Inloggad börjar här */}

            <div className={loggedIn ? "inloggad" : "inloggad-displaynone"}>
                <div className="logga-in">
                    <img
                        onClick={toggleLoggin}
                        className="inloggning-img"
                        src="/public/images/Vector.png"
                        alt="Logotype"
                    />
                    <p onClick={toggleLoggin} className="logga-in-paragraf">
                        {" "}
                        <span className="span-1"> Personal</span>
                        <span className="span-2"> konto</span>
                    </p>
                </div>

                <div className={clicked}>
                    <p className="logga-in-paragraf-desktop">
                        {" "}
                        <span className="span-1"> Personal</span>
                        <span className="span-2"> konto</span>
                    </p>

                    {loggedIn && (
                        <p className="välkommen">
                            {" "}
                            Välkommen {username}! <br /> Du är nu inloggad.{" "}
                        </p>
                    )}
                    <button onClick={handleLogout} className="logga-in-btn">
                        Logga ut
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoggaInInput;
