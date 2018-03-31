import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cardActions from '../actions/cardActions';
import PropTypes from 'prop-types';
import React from 'react';

class cardList extends React.Component {
    componentWillMount() {
        this.props.cardActions.fetchCard();
    }

    renderData(item) {
        return <div key={item.id}>{item.name}</div>;
    }

    render() {
        if(!this.props.card){
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
                        this.props.card.map((item, index) => {
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

cardList.propTypes = {
    cardActions: PropTypes.object,
    card: PropTypes.array
};

function mapStateToProps(state) {
    return {
        card: state.card
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