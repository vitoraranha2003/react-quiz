import './Questions.css';

function Questions(props) {
    function incrementValues() {
        props.setCount(props.count + 1);
        props.setPont(props.pont + 1);
    }
    if (props.count === 0) {
        return (
            <div className="main">
                <div className="painelq">
                    <img className="react_esquerdo" src="react.png" alt="simbolo_react" />
                    <h1>Quiz de React</h1>
                    <img className="react_direito" src="react.png" alt="simbolo_react" />
                </div>
                <div className="questions">
                    <p className="range">1/3</p>
                    <p>Qual desses não é um framework?</p>
                    <button className="questions" onClick={incrementValues}>React</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Vue</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Next.js</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Angular</button>
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
                    <p className="range">1/5</p>
                    <p>Qual desses não é um framework?</p>
                    <button className="certo">React</button>
                    <button className="errado">Vue</button>
                    <button className="errado">Next.js</button>
                    <button className="errado">Angular</button>
                </div>
                <p className="pontos">Pontos: {props.pont}</p>
                <button className="next" onClick={increaseStage}>Próximo</button>
            </div>
        )
    }
}

export default Questions;