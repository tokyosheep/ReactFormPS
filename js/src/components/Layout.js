import React from "react";
import Boxes from "./Checkbox";
import Header from "./Header";
import Count from "./Count";
import nodeProcess from "../nodeProcess/nodeProcess";
const csInterface = new CSInterface();
const extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) +`/jsx/`;
csInterface.evalScript(`$.evalFile("${extensionRoot}json2.js")`);//json2読み込み

async function callHostScript(obj){
    const response = await (()=>{
        return new Promise(resolve=>{
            csInterface.evalScript(`writeData(${JSON.stringify(obj)})`,(o)=>{
                resolve(o);
            });
        });
    })();
    console.log(response);
}

export default class Layout extends React.Component{
    constructor(){
        super();
        this.jsx = "getLayers.jsx";
        this.state = {
            layers:[
                {
                    id:0,
                    text:"ryoutsu"
                },
                {
                    id:1,
                    text:"butyou"
                }
            ],
            count:0    
        }
    }

    counting = (props) =>{
        console.log(props);
        this.setState(state=>{
            return state.count += props;//必ずreturnで返す
        });
    }

    callJsx = () =>{
        return new Promise((resolve,reject)=>{
            csInterface.evalScript(`$.evalFile("${extensionRoot}${this.jsx}")`,(o)=>{
                console.log(o);
                if(!o||o=="false")reject(false);
                resolve(o);
            });
        });
    }

    getLayers = async() =>{
        const res = await this.callJsx().catch(e=> console.log(e));
        const object = JSON.parse(res);
        console.log(object);
        this.setState({
            layers:object
        },()=>console.log(this.state));//setState is asynchronous
    }

    render = () =>{
        console.log(this.state);
        return(
            <div className="container">
                <h1>Basic React Form</h1>
                <Header getLayers = {this.getLayers}/>
                <Boxes layers = {this.state.layers} />
                <Count count={this.state.count} counting={this.counting}/>
                <button id="callHost" className="topcoat-button" onClick={(e)=>callHostScript(this.state)}>callHost</button>
                <button className="topcoat-button" onClick={()=>nodeProcess("from React on Photoshop")}>call node</button>
            </div>
        )
    }
}