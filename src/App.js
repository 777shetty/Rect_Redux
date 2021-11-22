import {useSelector,useDispatch} from 'react-redux';
import { increment,decrement } from './actions/actionType';
function App() 
{
  const counter =useSelector (state => state.counter);
  const islogged =useSelector(state => state.islogged);
  const dispatch =useDispatch();
  return (
    <div className="App">   
      <h1>Counter{counter}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      {islogged ?<h3>Valuabale imformation should not see</h3>:''}

    </div>
  );
}

export default App;
