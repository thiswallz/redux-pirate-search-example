import { SET_TERM } from '../actions/index';

export default function(state = null, action) {
    switch (action.type) {
      case SET_TERM:
        return action.payload;
    }
  
    return state;
  }