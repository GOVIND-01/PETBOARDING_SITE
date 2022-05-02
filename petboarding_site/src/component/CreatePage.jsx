import { useEffect, useState } from "react" 
import { Link } from "react-router-dom";
import { Home } from "./Home";
import axios from "axios";
export const CreatePage = () => {
    const [inputtext, setinputtext] = useState({
        name: "",
        city: "",
        address: "",
        capacity: "",
        cost_per_day: "",
        verified: "",
        rating:""
    });
    // useEffect(() => {
    //     handleSubmit();
    // })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputtext);
        const userData = {
            name: inputtext.name,
            city: inputtext.city,
            address: inputtext.address,
            capacity: inputtext.capacity,
            cost_per_day: inputtext.cost_per_day,
            verified: inputtext.verified,
            rating: inputtext.rating,
          };
          axios.post("http://localhost:3005/listing", userData).then((response) => {
            console.log(response.status);
            console.log(response.data.token);
          });
      
    }
    
    const GetData = (e) => {
        const value = e.target.value;
        setinputtext({
            ...inputtext, [e.target.name]: value,
           
        })
    }
    
    return (
        <>
            <h1>Create Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="name" onChange={GetData} value={ inputtext.name}/>
                <input type="text" placeholder="City" name="city" onChange={GetData} value={ inputtext.city}/>
                <input type="text" placeholder="Address" name="address" onChange={GetData} value={ inputtext.address}/>
                <input type="number" placeholder="Capacity" name="capacity" onChange={GetData} value={ inputtext.capacity}/>
                <input type="number" placeholder="Cost per day" name="cost_per_day" onChange={GetData} value={ inputtext.cost_per_day}/>
                <input type="text" placeholder="Verified" name="verified" onChange={GetData} value={ inputtext.verified}/>
                <input type="number" placeholder="Rating" name="rating" onChange={GetData} value={ inputtext.rating}/>
                <button type="submit" onSubmit={handleSubmit}>Submit</button>
                
            
            {/* <button type="submit" >Submit</button> */}
            </form>
        </>
    )
} 