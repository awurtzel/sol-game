import * as types from './actionTypes';

function url() {
    return 'www.url.com'
}

export function receiveCard(json) {
    return {
        type: types.RECEIVE_CARD,
        card: json.card,
    }
}

export function fetchCard() {
    return dispatch => {
        return fetch(url(), {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'x-api-key': null, //apiKey
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => dispatch(receiveCard(json)));
    };
}