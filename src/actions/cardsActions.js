import * as allActions from './allActions';
import cardsStubData from '../cardsStubData';

const USE_STUB_DATA = true;

const fetchStubData = () => {
    return (dispatch) => {
        fetch('https://api.myjson.com/bins/18y6bb')
        .then(response =>
            response.json().then(data => ({
                data: cardsStubData.data,
                status: response.status
            }))
        )
        .then(response => {
            if (response.status === 200) {
                dispatch(receiveCard(cardsStubData.data))
            } else {
                const flash = {
                    type: 'error',
                    title: 'Error getting task list',
                    content: 'There was an error getting the task list. Please try again.'
                };
                dispatch({type: "DISPLAY_FLASH", data: flash})
            }
        });
    };
};

const fetchServiceData = () => {
    return (dispatch) => {
        fetch('https://api.myjson.com/bins/18y6bb')
        .then(response =>
            response.json().then(data => ({
                data: data,
                status: response.status
            }))
        )
        .then(response => {
            if (response.status === 200) {
                dispatch(receiveCard(response.data))
            } else {
                const flash = {
                    type: 'error',
                    title: 'Error getting task list',
                    content: 'There was an error getting the task list. Please try again.'
                };
                dispatch({type: "DISPLAY_FLASH", data: flash})
            }
        });
    };
};

export function receiveCard(data) {
    return {type: allActions.RECEIVE_CARD, cards: data.cards};
}

export function fetchCard() {
    if(USE_STUB_DATA) {
        return fetchStubData();
    } else {
        return fetchServiceData();
    }
}

