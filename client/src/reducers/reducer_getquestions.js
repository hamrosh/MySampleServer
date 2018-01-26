import { GET_Q } from '../actions/index';
import _ from 'lodash';
export default function(state = {}, action) {
  switch (action.type) {
    case GET_Q:
      return _.mapKeys(action.payload.data, '_id');
  }
  return state;
}
