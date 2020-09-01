import React from 'react';


const PortfolioItemPage = (props) => {
    return (
        <div>
            <h1>A Thing I've Done</h1>
            <div>This is page for the item with the id of {props.match.params.id}</div>
        </div>
    );
};


export default PortfolioItemPage;