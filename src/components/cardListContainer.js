import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cardActions from '../actions/cardsActions';
import PropTypes from 'prop-types';
import React from 'react';

class cardListContainer extends React.Component {
    componentWillMount() {
        this.props.cardActions.fetchCard();
    }

    renderData(item) {
        return <div key={item.id}>Name: '{item.name}', Type: {item.type}, Faction: '{item.faction}'</div>;
    }

    render() {
        if(!this.props.cards){
            return (
                <div>
                    Loading Card...
                </div>
            )
        }else{
            return (
                <div className="">
                    Card List:
                    {
                        this.props.cards.map((item, index) => {
                            return (
                                this.renderData(item)
                            );
                        })
                    }
                </div>
            )
        }
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