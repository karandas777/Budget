import React, { Component } from 'react'

export default class BudgetItems extends Component {
    render() {
        const {item,funDelete} = this.props;

        if (item.amount >= 0){
            return (
                <div className="px-1 mb-3">
                   <div className="p-3 mt-1 text-white bg-green shadow-sm rounded">
                       <div className="h5">
                       {item.title} <i className="fa fa-times float-right text-white" onClick={()=>{funDelete(item)}} ></i> 
                       </div>
                       <div className="h3 mb-0">
                       $ {item.amount}
                       </div>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="px-1 mb-3">
                   <div className="p-3 text-white mt-1 bg-red shadow-sm rounded">
                        <div className="h5">
                       {item.title} <i className="fa fa-times float-right" onClick={()=>{funDelete(item)}} ></i> 
                       </div>
                       <div className="h3 mb-0">
                       $ {item.amount}
                       </div>        
                    </div>
                </div>
            )
        }
        
    }
}
