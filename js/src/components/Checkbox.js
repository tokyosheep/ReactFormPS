import React from "react";

function Labels(props){
    return(
        <li>
            <label className="topcoat-checkbox">
                <input type="checkbox" id={props.lay.id}/>
                <div className="topcoat-checkbox__checkmark"></div>
                {props.lay.text}
            </label>
        </li>
    )
}

export default function Boxes(props){
    console.log(props.layers);
    //キー要素は親要素のみに指定すれば問題ない
    const labels = props.layers.map(layer=>{
        return(
            <Labels 
                lay={layer}
                key={layer.id}
            />
        )
    }); 
    return (
        <form name="layers">    
            <ul>
                {labels}
            </ul>
        </form>    
    )   
}

