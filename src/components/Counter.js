import React, { Component } from 'react';
let num = 5;
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            extraDiscount: 0,
            discount: 10,
        }

    }
    increament = () => {
        console.log('increament 1');
        this.setState(
            { extraDiscount: this.state.extraDiscount +5
            }, this.updateDiscount
        ); //ASynchronous
        // this.updateDiscount();
        num = num+1; //Synchronous
        // console.log(num, 'extraDiscount: ', this.state.extraDiscount);
        console.log('increament 2');
    }
    updateDiscount = () => {
        console.log('increament 3');
        console.log(this.state.discount, "Extra: ", this.state.extraDiscount)
        this.setState(
            {discount: this.state.discount + this.state.extraDiscount}
        )
    }
    decrement = () => {
        this.setState(
            { extraDiscount: this.state.extraDiscount -2}
        );
    }
    render() {
        return (
            <>
                <div className="parent">
                    <p>Current extraDiscount: {this.state.extraDiscount}</p>
                    <p>Current discount: {this.state.discount}</p>
                    <button className="increment" onClick={this.increament}>Increment Extra Discount</button>
                    <button className="decrement" onClick={this.decrement}>Decrement</button>
                </div>
            </>
        );
    }
}

export default Counter;