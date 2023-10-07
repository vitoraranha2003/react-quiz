function Questions2(props) {
    function incrementValues() {
        props.setCount(props.count + 1);
        props.setPont(props.pont + 1);
    }
    if (props.count === 1) {
        return (
            <div className="main">
                <div className="painelq">
                    <img className="react_esquerdo" src="react.png" alt="simbolo_react" />
                    <h1>Quiz de React</h1>
                    <img className="react_direito" src="react.png" alt="simbolo_react" />
                </div>
                <div className="questions">
                    <p className="range">2/3</p>
                    <p>Quem criou o React?</p>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Apple</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Amazon</button>
                    <button className="questions" onClick={incrementValues}>Facebook</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Google</button>
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
                    <p className="range">2/3</p>
                    <p>Quem criou o React?</p>
                    <button className="errado" onClick={() => props.setCount(props.count + 1)}>Apple</button>
                    <button className="errado" onClick={() => props.setCount(props.count + 1)}>Amazon</button>
                    <button className="certo" onClick={increaseStage}>Facebook</button>
                    <button className="errado" onClick={() => props.setCount(props.count + 1)}>Google</button>
                </div>
                <p className="pontos">Pontos: {props.pont}</p>
                <button className="next" onClick={increaseStage}>Próximo</button>
            </div>
        )
    }
}

export default Questions2;
