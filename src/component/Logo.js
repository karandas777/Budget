import React, { Component } from 'react'

export default class Logo extends Component {
    render() {
        const {head,sub} = this.props;
        return (
            <div className="p-3">
               <div className="h4">{sub}</div>
               <div className="display-4">{head}</div>
            </div>
        )
    }
}
