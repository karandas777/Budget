import React, { Component } from 'react'
import BuggetItems from './BudgetItems'
import Logo from './Logo'
import AddItem from './AddItem';
import Budget from './Budget';

export default class BudgetList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            items:[],
            total:0,
        }
    }

    funAddIncome=(data)=>{
        let newItem = {
            title:data.title,
            amount:parseInt(data.amount),
        }
        let newList = [...this.state.items , newItem];
        this.setState({items:newList},this.funCalculate);
    }

    funAddExpense=(data)=>{
        let newItem = {
            title:data.title,
            amount:parseInt("-"+data.amount),
        }
        let newList = [...this.state.items , newItem];
        this.setState({items:newList},this.funCalculate);
    }

    funDelete=(toRemove)=>{
        let newList = this.state.items.filter((item,i)=>{
            return item !== toRemove;
        })
        this.setState({items:newList},this.funCalculate);
    }

    funCalculate=()=>{
        let newList = this.state.items.length > 0 && this.state.items.map((item,i)=>(
            item.amount
        ))
        let newTotal = 0;
        if(newList.length > 0){
            newTotal = newList.reduce((total,num)=>{
                return total+num;
            })
        }
        else{
            newTotal = 0;
        }   
        this.setState({total:newTotal});
    }

    render() {
        return (
            <div className="pt-3 pb-4 mb-3">
                <Logo head="My Budget" sub="Whats" />

                <hr className="pt-1 bg-gray rounded mb-4"/>
                
                {
                    this.state.items.length === 0 ? (
                        <div className="bg-gray p-3 rounded">
                            <div className="mb-2">List is Empty!</div>
                            <div className="h3 mb-0">Add Something</div>
                        </div>
                    ) : null
                    
                }

                {
                    this.state.items.map((item,i)=>(
                        <BuggetItems item={item} key={i} funDelete={this.funDelete} />
                    ))
                }

                <hr className="pt-1 bg-gray rounded my-4"/>

                <Budget value={this.state.total} />

                <div className="p-1 text-center">   
                    <button className="btn btn-lg bg-gray text-white w-50 shadow-sm pt-2" data-toggle="modal" data-target="#exampleModal">
                        <i className="fa fa-plus"></i> Add
                    </button>
                </div>
                
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content bg-black">
                        <div className="modal-body">
                            <AddItem funAddIncome={this.funAddIncome} funAddExpense={this.funAddExpense} />
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
