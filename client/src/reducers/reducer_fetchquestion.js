import { FETCH_QUESTION } from '../actions/index';

export const initialState = {
  question: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUESTION:
      return { ...state, question: action.payload.data };
  }
  return state;
}
