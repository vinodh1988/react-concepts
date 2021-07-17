import { ErrorRounded } from '@material-ui/icons';
import axios from 'axios';


import react,{useState,useEffect} from 'react';


const Api= ()=>{
     
    let [people,setPeople] = useState([]);
    
    let [sno,setSno]=useState();
    let [errors,setErrors]=useState({sno:"",name:"",city:""})
    let [name,setName]=useState("")
    let [city,setCity]=useState("")

    async function loadData(){
      let response=await axios.get("http://localhost:4500/people")
      console.log(response.data)
      let people=response.data.map(x=> (
          <tr key={x.id}>
               <td>{x.id}</td>
               <td>{x.name}</td>
               <td>{x.city}</td>
           </tr>
      ))
     setPeople(people)
   }

   function validate(person){
        console.log(person)
        errors={sno:"",name:"",city:""}
        setErrors(errors)
        console.log(errors)
       if(isNaN(person.id))
           errors.sno="Sno should be number";
       else if(person.id<=0)
           errors.sno="Value should be greater than zero"
       if(person.name==undefined || person.name.length<3) 
          errors.name="Name should be atleast three character long"    
       if(person.city==undefined || person.city.length<3) 
          errors.city="City should be atleast three character long" 
        setErrors(errors)   
   }


   async function savePerson(person){ 
      
     validate(person)
     if(errors.sno===""&&errors.name===""&&errors.city===""){
          try{

     let response=await axios.post("http://localhost:4500/people",person)
      loadData();
        }
        catch(e){
             alert("Unable to store")
        }
     }
  }

    useEffect(()=>{
          loadData();
    },[])

    
    

   
   return(

        <div>

<form>
                <table id="tabform">
                    <tbody>
                    <tr>
                        <td>sno</td>
                        <td><input type="text" value={sno} 
                        onChange={(e)=>{setSno(e.target.value)}}></input></td>
                         <td className="error">{errors["sno"]}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" value={name} 
                         onChange={(e)=>{setName(e.target.value)}}></input></td>
                       <td className="error">{errors["name"]}</td>
                    </tr>
                    <tr>
                        <td>city</td>
                        <td><input type="text" value={city} 
                         onChange={(e)=>{setCity(e.target.value)}}></input></td>
                         <td className="error">{errors["city"]}</td>
                    </tr>
                    <tr>
                        <td colSpan="2" align="center">
                    <input type="button" value="store" 
                    onClick={()=>{savePerson({id:sno,name: name,city: city})}} />
                                
                        </td>
                       
                    </tr>
                    </tbody>
                </table>
            </form>
               <table className="table table-hover">
             <thead>
                 <tr>
                   <th>Id</th>
                   <th>Name</th>
                   <th>City</th>
                </tr>
             </thead>
             <tbody>
                  {people}
             </tbody>
        </table>


        </div>
     )

}

export default Api;