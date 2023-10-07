import React from 'react';
import './Welcome.css';

function Welcome(props) {


    const increaseStage = props.increaseStage;

    return (
        <div className="main">
            <div className="painel">
                <img className="react_esquerdo" src="react.png" alt="simbolo_react" />
                <h1>Quiz de React</h1>
                <img className="react_direito" src="react.png" alt="simbolo_react" />
            </div>
            <br></br><br></br><br></br><br></br>
            <button onClick={increaseStage}>Iniciar</button>
        </div>
    )
}

export default Welcome;