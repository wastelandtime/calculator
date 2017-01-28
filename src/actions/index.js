import {
  GET_COUNTER,
  SET_STEP,
  SET_DIRECTION,
  IS_RUNNING
} from './types';


export const getCounter = (count) => {
  return {
    type: GET_COUNTER,
    payload: count
  };
};
