"use strict";

import React from "react";

export default class Counter extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="count">
                <div>{this.props.count}</div>
                <button className="topcoat-button" onClick={(e)=> this.props.counting(1)}>add</button>
                <button className="topcoat-button" onClick={(e)=> this.props.counting(-1)}>subtract</button>
            </div>
        )
    }
}