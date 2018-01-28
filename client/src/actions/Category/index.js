import axios from 'axios';
import {
  ADD_CATEGORY,
  GET_CATEGORY,
  DEL_CATEGORY
} from '../../constants/constants';
const rootURL = '/api';

export function addCategory(values, callback) {
  const url = `${rootURL}/categories`;
  console.log(values);
  const request = axios.post(url, values).then(() => {
    callback();
  });
  return {
    type: ADD_CATEGORY,
    payload: request
  };
}

export function allCategories(page) {
  const url = `${rootURL}/categories/${page}`;
  console.log(page);
  const request = axios.get(url);
  return {
    type: GET_CATEGORY,
    payload: request
  };
}

export function delCategory(categoryid, callback) {
  const url = `${rootURL}/categories/${categoryid}`;
  console.log(categoryid);
  const request = axios.delete(url).then(() => {
    callback();
  });
  return {
    type: DEL_CATEGORY,
    payload: request
  };
}
