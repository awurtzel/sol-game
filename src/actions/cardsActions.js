import * as allActions from './allActions';

export function receiveCard(data) {
    return {type: allActions.RECEIVE_CARD, cards: data.cards};
}

export function fetchCard() {
    return (dispatch) => {
        fetch('https://api.myjson.com/bins/18y6bb')
        .then(response =>
            response.json().then(data => ({
                data: data,
                status: response.status
            }))
        )
        .then(response => {
            if(response.status === 200){
                dispatch(receiveCard(response.data))
            }else{
                const flash = {
                    type: 'error',
                    title: 'Error getting task list',
                    content: 'There was an error getting the task list. Please try again.'
                };
                dispatch({type: "DISPLAY_FLASH", data: flash})
            }
        });
    };
}