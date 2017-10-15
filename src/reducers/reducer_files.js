import { FETCH_PIRATE } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_PIRATE:
            return action.payload.data
    }
    return state;
}