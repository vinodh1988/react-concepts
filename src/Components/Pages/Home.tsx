import react from 'react'
import AlertBox from '../AlertBox';
const Home= ()=>{
     return(
      <div>
       <h1>This is Home Page</h1>
       <AlertBox title="first box" type="alert-primary"></AlertBox>
       <AlertBox title="second box" type="alert-danger"></AlertBox>
       <AlertBox title="third box" type="alert-info"></AlertBox> 
        <AlertBox title="fourth box" type="alert-success"></AlertBox>
       </div>
     )

}

export default Home;