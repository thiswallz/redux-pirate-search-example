import axios from 'axios';
const ROOT_URL = 'http://localhost:3000/pirateBay';

export const FETCH_PIRATE = 'FETCH_PIRATE';
export const SET_TERM = 'SET_TERM';

export function fetchPirate(term, order = '', sort = '') {
    const request = axios.get(`${ROOT_URL}?term=${term}&order=${order}&sort=${sort}`);
    return {
        type: FETCH_PIRATE,
        payload: request
    }
}

export function setTerm(term) {
    return {
      type: SET_TERM,
      payload: term
    };
}