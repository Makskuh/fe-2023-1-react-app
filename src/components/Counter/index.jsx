import React, { useReducer } from 'react';
import reducer from './reducer';
import ACTION_TYPES from './actionTypes';

/*
  за допомогою useReducer переробити компонент Counter
  лічільник має збільшуквати і зменшувати значення

  * також в стані зберігати значення кроку, переробит код так 
    щоб додавався і віднімався саме крок. Також зробити можливим зміну кроку
*/

const initialState = {
  counterValue: 0,
  step: 1,
};

function Counter(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const add = () => {
    const action = { type: ACTION_TYPES.ADD };
    dispatch(action);
  };

  const subtract = () => {
    const action = { type: ACTION_TYPES.SUBTRACT };
    dispatch(action);
  };

  const changeStep = (e) => {
    const action = { type: ACTION_TYPES.CHANGE_STEP, payload: +e.target.value };
    dispatch(action);
  };

  return (
    <div>
      <p>Count is : {state.counterValue}</p>
      <p>Step is : {state.step}</p>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <input type='number' value={state.step} onChange={changeStep} />
    </div>
  );
}

export default Counter;
