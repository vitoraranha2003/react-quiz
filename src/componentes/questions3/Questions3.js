function Questions3(props) {
    function incrementValues() {
        props.setCount(props.count + 1);
        props.setPont(props.pont + 1);
    }
    if (props.count === 2) {
        return (
            <div className="main">
                <div className="painelq">
                    <img className="react_esquerdo" src="react.png" alt="simbolo_react" />
                    <h1>Quiz de React</h1>
                    <img className="react_direito" src="react.png" alt="simbolo_react" />
                </div>
                <div className="questions">
                    <p className="range">3/3</p>
                    <p>Qual linguagem de programação a biblioteca React utiliza?</p>
                    <button className="questions" onClick={incrementValues}>JavaScript</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Python</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Java</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>TypeScript</button>
                </div>
                <p className="pontos">Pontos: {props.pont}</p>
            </div>
        )
    }
    else {
        const increaseStage = props.increaseStage;
        return (
            <div className="main">
                <div className="painelq">
                    <img className="react_esquerdo" src="react.png" alt="simbolo_react" />
                    <h1>Quiz de React</h1>
                    <img className="react_direito" src="react.png" alt="simbolo_react" />
                </div>
                <div className="questions">
                    <p className="range">3/3</p>
                    <p>Qual linguagem de programação a biblioteca React utiliza?</p>
                    <button className="certo">JavaScript</button>
                    <button className="errado">Python</button>
                    <button className="errado">Java</button>
                    <button className="errado">TypeScript</button>
                </div>
                <p className="pontos">Pontos: {props.pont}</p>
                <button className="next" onClick={increaseStage}>Próximo</button>
            </div>
        )
    }
}

export default Questions3;