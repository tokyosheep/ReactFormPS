import React from "react";

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <button id="getLayers" className="topcoat-button--large"
            onClick={this.props.getLayers}>
            getLayers</button>
        )
    }
}