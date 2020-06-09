import React from 'react';
import {FoodItem} from './FoodItem';
import ImagePopup from './ImagePopup';
import sampleData from "./sampleData.json";

class FoodMenu extends React.Component{
    constructor(){
        super();
        this.openPopup = this.openPopup.bind(this);
        this.itemList = this.itemList.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.state = {
            displayPopup:false,
            imageLink:''
        }
    }

    openPopup(image){
        this.setState({displayPopup:true,imageLink:image})
    }

    closePopup(){
        this.setState({displayPopup:false,imageLink:''})
    }

    render(){
        return(
            <div>
                {this.itemList()}
                {this.state.displayPopup?<ImagePopup image={this.state.imageLink} closePopup={this.closePopup}/>:''}
            </div>
        );
    }

    itemList(){
        return sampleData.map((item)=>{
            return (<FoodItem key={item.name} item={item} openPopup={this.openPopup}/>)
        })
    }
}

export default FoodMenu