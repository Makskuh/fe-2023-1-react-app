import React, { useReducer } from 'react';

/*
  за допомогою useReducer переробити компонент Counter
  лічільник має збільшуквати і зменшувати значення

  * також в стані зберігати значення кроку, переробит код так 
    щоб додавався і віднімався саме крок. Також зробити можливим зміну кроку
*/

function reducer(state, action) {
  const { type, payload } = action;
  if (type === 'add') {
    const newState = {
      ...state,
      counterValue: state.counterValue + state.step,
    };

    return newState;
  } else if (type === 'subtract') {
    const newState = {
      ...state,
      counterValue: state.counterValue - state.step,
    };

    return newState;
  } else if (type === 'changeStep') {
    const newState = {
      ...state,
      step: payload,
    };

    return newState;
  }

  return state;
}

const initialState = {
  counterValue: 0,
  step: 1,
};

function Counter(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const add = () => {
    const action = { type: 'add' };
    dispatch(action);
  };

  const subtract = () => {
    const action = {type: 'subtract'};
    dispatch(action);
  };

  const changeStep = (e) => {
    const action = { type: 'changeStep', payload: +e.target.value };
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
