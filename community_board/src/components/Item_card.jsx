import React from "react";
import './Item_card.css'; // Changed to import the CSS file with PascalCase 'I'

const Item_card = (props) => {
    return (
        < div className={'Item_card '+ props.color}>
            <img src={props.imglink} alt={'image of '+ props.websiteTitle}/>
            <h2>{props.websiteTitle}</h2>
            <p>{props.description}</p>
            <a href={props.link} className="card-button"><p>Solve</p></a>
        </div>
    )
}

export default Item_card;