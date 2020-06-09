import React from 'react';
import './FoodItem.css';

export const FoodItem = (props) => {
    let item = props.item;
    return (
        <div className="itemContainer">
            <img className="imgCard" onClick={(e)=>{props.openPopup(item.image)}} src={process.env.PUBLIC_URL+item.image} alt="Restaurant" />
            <div className="w100">
                <div className="w60 fl tal">
                    <div className="fwb fs20 ml10">{item.name}</div>
                    <div className="ml10">{item.location}</div>
                </div>
                <div className="fr w40"><Rating /> {item.rating}</div>
            </div>
            <div className="w100 tac fl mt10p">{item.vouchers}</div>
            <div className="bottomDiv">
                <div className="fl m10" id="heart"></div>
                <button onClick={(e)=>window.open(item.image, '_blank')} className="buyNowBtn fr m10 mr20">Buy Now</button>
            </div>
        </div>
    )
}

const Rating = () => {
    return (
        <div>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
        </div>
    )
}