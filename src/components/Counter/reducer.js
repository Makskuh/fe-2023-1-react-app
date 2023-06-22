export default function reducer(state, action) {
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