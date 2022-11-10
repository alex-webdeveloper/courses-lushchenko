
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  selectCount,
  selectText,
  showConsole
} from './counterSlice';

export default function Counter() {
  const count = useSelector(selectCount); // получаем данные из store
  const text = useSelector(selectText); // получаем данные из store
  const dispatch = useDispatch();


  const buttonHandler = () => {
    dispatch(increment());
    dispatch(showConsole());
  }

  return (
    <div>
      <button onClick={buttonHandler}>+</button>
      <h2>{count}</h2>
      <h2>{text}</h2>
    </div>
  );
}
