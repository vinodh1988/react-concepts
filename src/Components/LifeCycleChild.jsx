import React from 'react'

class LifeCycleChild extends React.Component{
    constructor(){
        super();
        console.log("Life Cycle child called");
        this.state={}
    }
    componentDidMount(){
        console.log("This life cycle child component mounted")
    }
    static getDerivedStateFromProps(props,states){
         console.log('get derived state from props')
         console.log(props,states);    
        return null;
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps.num, "checked");
        return Number(nextProps.num)%2==0?true:false;
    }
    render(){
        return(
         <div id="yellow"> {this.props.info}</div>
        );
    }

    componentDidUpdate(){
        console.log("Component Updated");
    }
}

export default LifeCycleChild;