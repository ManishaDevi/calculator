import { CALCULATE } from '../actions/type';

const initialState = { result: 0 };

export default function calculateReducer(state = initialState, action) {
  //updating the state of calculated result
    switch (action.type) {
        case CALCULATE:
          return {result:action.result};
        default:
          return state;
      }
  }