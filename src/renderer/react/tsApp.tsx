import React from 'react';
interface IObj{
    title?:Number|String
}
class TsApp extends React.Component<{},IObj>{
    
    state:IObj;
    constructor(props){
        super(props);
        this.state = {};
        this.state.title = props.title?props.title:"notitle";
        setTimeout(()=>{
            this.setState({
                title:"dsdsds3333ds"
            })
        },1000)
    }
    render(){
        return (
            <div>TS0=-APP {this.state.title} </div>
        )
    }
}
export default TsApp;