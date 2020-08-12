import React, { Component } from 'react'

export default class Budget extends Component {
    render() {

        const {value} = this.props;

        if(value > 0){
            return (
                <div className="p-3 rounded bg-green text-light mb-3">
                    <div className="h3">Total</div>
                    <div className="h2 mt-1">
                        {value}
                    </div>
                    <div className="mb-0">Surplus Budget</div>
                </div>
            )
        }

        else if(value === 0){
            return (
                <div className="p-3 rounded bg-primary text-white mb-3">
                    <div className="h3">Total</div>
                    <div className="h2 mt-1">
                        {value}
                    </div>
                    <div className="mb-0">Balanced Budget</div>
                </div>
            )
        }

        else{
            return (
                <div className="p-3 rounded bg-red text-white mb-3">
                    <div className="h3">Total</div>
                    <div className="h2 mt-1">
                        {value}
                    </div>
                    <div className="mb-0">Deficit Budget</div>
                </div>
            )
        }

        
    }
}
