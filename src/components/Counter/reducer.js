export default function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'add': {
      const newState = {
        ...state,
        counterValue: state.counterValue + state.step,
      };

      return newState;
    }
    case 'subtract': {
      const newState = {
        ...state,
        counterValue: state.counterValue - state.step,
      };

      return newState;
    }
    case 'changeStep': {
      const newState = {
        ...state,
        step: payload,
      };

      return newState;
    }

    default:
      return state;
  }
}
