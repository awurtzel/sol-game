import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import React from 'react';
import * as cardActions from '../../actions/cardsActions';
import CardList from '../presentation/cardList';

class cardListContainer extends React.Component {
    componentWillMount() {
        this.props.cardActions.fetchCard();
    }

    render() {
        return (
            <CardList
                cards = {this.props.cards}
            />
        );
    }
}

cardListContainer.propTypes = {
    cardActions: PropTypes.object,
    cards: PropTypes.array
};

function mapStateToProps(state) {
    return {
        cards: state.cards
    };
}

function mapDispatchToProps(dispatch) {
    return {
        cardActions: bindActionCreators(cardActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(cardListContainer);