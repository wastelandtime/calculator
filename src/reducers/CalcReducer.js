import {
  GET_COUNTER,
  SET_STEP
} from '../actions/types';

const initialState = {
  count: 0,
  step: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTER:
      return action.payload.count;
    case SET_STEP:
      return action.payload.step;
    default:
      return state;
  }
};
