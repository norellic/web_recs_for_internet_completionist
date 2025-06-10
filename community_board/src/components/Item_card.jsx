import React from "react";
import './item_card.css';

const Item_card = (props) => {
    return (
        <td className={'Item_card '+ props.color}>
            <h2>{props.websiteTitle}</h2>
            <p>{props.description}</p>
            <a href={props.link}>
            <p>Solve</p>
            </a>
        </td>
    )
}

export default Item_card;