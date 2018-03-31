import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cardActions from '../actions/cardActions';
import PropTypes from 'prop-types';
import React from 'react';

class cardList extends React.Component {
    renderData() {
        return (
            <div className="Card">
                {this.props.cards}
            </div>
        );
    }


    render() {
        return(
            <div className="CardList">
                {this.props.cards.length > 0 ?
                    this.renderData()
                    :
                    <div className="NoDataCard">
                        No Data
                    </div>
                }
            </div>
        );
    }
}

cardList.propTypes = {
    cardActions: PropTypes.object,
    cards: PropTypes.array,
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
)(cardList);