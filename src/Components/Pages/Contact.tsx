import React from 'react'
class Contact extends React.Component{
  render(){
     return(

       <h1>This is Contact Page</h1>
     )
     }
    componentDidMount(){
        console.log("Contact Mounted")
    }
     componentWillUnmount(){
       console.log("Comonent Removed");
     }
}

export default Contact;