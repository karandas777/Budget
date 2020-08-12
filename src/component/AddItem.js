import React, { Component } from 'react'
import Logo from './Logo'

export default class AddItem extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            title:"",
            amount:"",
        }
    }

    funHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    funIncome=()=>{
        this.props.funAddIncome(this.state);
        this.setState({title:"", amount:"",})
    }

    funExpense=()=>{
        this.props.funAddExpense(this.state);
        this.setState({title:"", amount:"",})
    }

    render() {
        return (
            <div>
                <Logo sub="Add to list!" />
                <input className="form-control my-3" type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.funHandleChange} />
                <input className="form-control my-3" type="number" placeholder="Amount" name="amount" value={this.state.amount} onChange={this.funHandleChange} />
                <div className="btn-group w-100 my-3">
                    <button className="btn bg-green text-white" data-dismiss="modal" onClick={this.funIncome} >
                        <i className="fa fa-plus-circle"></i> Income
                    </button>
                    <button className="btn bg-red text-white" data-dismiss="modal" onClick={this.funExpense} >
                        <i className="fa fa-minus-circle"></i> Expense
                    </button>
                </div>
            </div>
        )
    }
}
