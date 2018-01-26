import axios from 'axios';
const rootURL = '/api';
export const FETCH_QUESTION = 'FETCH_QUESTION';
export const GET_Q = 'GET_Q';
export const ADD_QUESTION = 'ADD_QUESTION';
export function fetchQuestion(qid) {
  const url = `${rootURL}/questions/${qid}`;

  const request = axios.get(url);
  return {
    type: FETCH_QUESTION,
    payload: request
  };
}

export function getQuestions() {
  const url = `${rootURL}/questions`;

  const request = axios.get(url);
  return {
    type: GET_Q,
    payload: request
  };
}

export function addQuestions(values, callback) {
  const url = `${rootURL}/questions`;

  const request = axios.post(url, values).then(() => {
    callback();
  });
  return {
    type: ADD_QUESTION,
    payload: request
  };
}
