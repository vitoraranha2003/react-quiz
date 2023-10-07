import { useState } from 'react';
import Welcome from './componentes/welcome/Welcome';
import Questions from './componentes/questions/Questions';
import './App.css';
import Questions2 from './componentes/questions2/Questions2';
import Questions3 from './componentes/questions3/Questions3';
import Gameover from './componentes/gameover/Gameover';

function App() {

  const [stage,setStage] = useState(0);
  const [count, setCount] = useState(0);
  const [pont, setPont] = useState(0);

  const increaseStage = () => {
    setStage(stage + 1);
  };

  const reiniciar= () => {
    setStage(0)
    setCount(0)
    setPont(0)
  };

  if (stage===0){
    return <Welcome increaseStage={increaseStage}/>
  }
  else if (stage===1){
    return <Questions increaseStage={increaseStage}
    count={count}
    pont={pont}
    setCount={setCount}
    setPont={setPont}
/>
  }
  else if (stage===2){
    return <Questions2 increaseStage={increaseStage}
    count={count}
    pont={pont}
    setCount={setCount}
    setPont={setPont}/>
  }
  else if (stage===3){
    return <Questions3 increaseStage={increaseStage}
    count={count}
    pont={pont}
    setCount={setCount}
    setPont={setPont}/>
  }
  else if (stage===4){
    return <Gameover reiniciar={reiniciar}
    count={count}
    pont={pont}
    setCount={setCount}
    setPont={setPont}/>
  }
}
export default App;