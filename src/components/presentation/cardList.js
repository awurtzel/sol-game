import React from "react";

const CardList = (props) => {
    function drawItem(item) {
        return <div key={item.id}>Name: '{item.name}', Type: {item.type}, Faction: '{item.faction}'</div>;
    }

    function draw() {
        if (!props.cards) {
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
                        props.cards.map((item, index) => {
                            return (
                                drawItem(item)
                            );
                        })
                    }
                </div>
            )
        }
    }

    return(
        <div>
            {draw()}
        </div>
    );
};

export default CardList;