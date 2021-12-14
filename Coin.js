import React, { Component } from 'react';
import './coin.css';
import Flip from './Flip';




class Coin extends Component {
    
    render() {
        return (
            <div>
                
                <div className="coin">
                    <img src={this.props.info.imgSrc} alt={this.props.info.side}/>
                </div>
                
            </div>
        )
    }
}

export default Coin;