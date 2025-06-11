import React from "react";
import Item_card from "./item_card";
import './Grid.css';

const Grid = () => {
    return (
        <div className="Grid">
            <Item_card 
                imglink="https://readpoopfiction.com/img/title3x.png" 
                websiteTitle="Poop Fiction" 
                color="pink" 
                description="so you don't have to keep reading the backs of those shampoo bottles" 
                link="https://readpoopfiction.com/"/>
            <Item_card
                imglink="https://readpoopfiction.com/img/title3x.png" 
                websiteTitle="Poop Fiction" 
                color="pink" 
                description="so you don't have to keep reading the backs of those shampoo bottles" 
                link="https://readpoopfiction.com/"/>
            <Item_card
            imglink="https://readpoopfiction.com/img/title3x.png" 
            websiteTitle="Poop Fiction" 
            color="pink" 
            description="so you don't have to keep reading the backs of those shampoo bottles" 
            link="https://readpoopfiction.com/"/>
        </div>
    )
}

export default Grid;