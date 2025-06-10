import React from "react";
import Item_card from "./item_card";

const Grid = () => {
    return (
        <div>
        <table>
        <tbody>
            <tr>
            <Item_card img_link="img_link" websiteTitle="Poop Fiction" color="pink" description="so you don't have to keep reading the backs of those shampoo bottles" />
            <Item_card/>
            </tr>
            <tr>
            <Item_card/>
            <Item_card/>
            </tr>
            <tr>
            <Item_card/>
            <Item_card/>
            </tr>
            <tr>
            <Item_card/>
            <Item_card/>
            </tr>
            <tr>
            <Item_card/>
            <Item_card/>
            </tr>
        </tbody>
        </table>
        </div>
    )
}

export default Grid;