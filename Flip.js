import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from './helpers';

class Flip extends Component {
    static defaultProps = {
        coins: [
            { side: "Heads", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg" },
            { side: "Tails", imgSrc: "https://media.istockphoto.com/photos/quarter-dollar-us-coin-isolated-on-white-picture-id476142091?k=20&m=476142091&s=612x612&w=0&h=mX2-F4WTLslfOBnUrkOrp6noMqUyzAO1Iq8aHF_EGkY=" }
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "Heads" ? 1 : 0),
                nTails: st.nTails + (newCoin.side === "Tails" ? 1 : 0)
            };
        })
    }

    handleClick(e) {
        this.flipCoin();
    }

    render() {

        return (
            <div className="Flip">
                <h2>Let's Flip A Coin!</h2>
                {this.state.currCoin && <Coin info={this.state.currCoin}/>}
                <button onClick={this.handleClick}>Flip Me!</button>
                <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} 
                heads and {this.state.nTails} tails.</p>
            </div>
        )
    }
}


export default Flip;
