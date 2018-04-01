import React from "react";

class cardList extends React.Component {
    renderData(item) {
        return <div key={item.id}>Name: '{item.name}', Type: {item.type}, Faction: '{item.faction}'</div>;
    }

    render() {
        if (!this.props.cards) {
            return (
                <div>
                    Loading Card...
                </div>
            )
        } else {
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