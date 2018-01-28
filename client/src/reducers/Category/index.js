import { GET_CATEGORY } from '../../constants/constants';

import _ from 'lodash';
export default function(state = {}, action) {
  switch (action.type) {
    case GET_CATEGORY:
      return _.mapKeys(action.payload.data, '_id');
  }
  return state;
}
