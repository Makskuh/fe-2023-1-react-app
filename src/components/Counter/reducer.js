import ACTION_TYPES from './actionTypes';

export default function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.ADD: {
      const newState = {
        ...state,
        counterValue: state.counterValue + state.step,
      };

      return newState;
    }
    case ACTION_TYPES.SUBTRACT: {
      const newState = {
        ...state,
        counterValue: state.counterValue - state.step,
      };

      return newState;
    }
    case ACTION_TYPES.CHANGE_STEP: {
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
