import initialState from './initialState';
import {FETCH_CARD, RECEIVE_CARD} from '../actions/allActions';

export default function card(state = initialState.card, action) {
    let newState;
    switch (action.type) {
        case FETCH_CARD:
            console.log('FETCH_CARD Action');
            return action;
        case RECEIVE_CARD:
            newState = action.card;
            console.log('RECEIVE_CARD Action');
            return newState;
        default:
            return state;
    }
}