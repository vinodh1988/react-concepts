import React from 'react'
import MenuBar from './Components/Menubar';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css'
import Home from './Components/Pages/Home';
import Api from './Components/Pages/Api.js';
import Contact from './Components/Pages/Contact';
import LifeCycleChild from './Components/LifeCycleChild.jsx';
class App extends React.Component{
     constructor(){
        super();
        this.state ={
           message: "This is the first message"
        }
     }
     componentDidMount(){
       setInterval(()=>{ 
        let text = Math.round(Math.random()*10000)
        this.setState({message: "Message "+text,value:text});
       }, 5000);
     }
     render(){
       return(
         <div>
              <Router>
         <MenuBar></MenuBar>
         <LifeCycleChild info={this.state.message} num={this.state.value}></LifeCycleChild>
         <div id="content">
           
                 <Route path="/" exact component={Home}></Route>
                 <Route path="/api" component={Api}></Route>
                 <Route path="/contacts" component={Contact}></Route>
            
         </div>
         </Router>
         </div>
         
       )
     }
}

export default App;
