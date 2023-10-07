import './Gameover.css';

function Gameover(props) {
    const reiniciar = props.reiniciar
    if (props.count === 3) {
        return (
            <div className="main">
                <div className="painelq">
                    <img className="react_esquerdo" src="react.png" alt="simbolo_react" />
                    <h1>Quiz de React</h1>
                    <img className="react_direito" src="react.png" alt="simbolo_react" />
                </div>
                <div className="questions">
                    <p className="gameover">Fim de jogo</p>
                    <p>Obrigado por jogar</p>
                    <p className="pontosf">Seus pontos: {props.pont} de {props.count}</p>
                </div>
                <button className="next" onClick={reiniciar}>Reiniciar</button>
            </div>
        )
    }
}

export default Gameover;