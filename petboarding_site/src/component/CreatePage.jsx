import { useState } from "react" 
import { Link } from "react-router-dom";
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
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputtext);

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
            <form >
                <input type="text" placeholder="Name" name="name" onChange={GetData} value={ inputtext.name}/>
                <input type="text" placeholder="City" name="city" onChange={GetData} value={ inputtext.city}/>
                <input type="text" placeholder="Address" name="address" onChange={GetData} value={ inputtext.address}/>
                <input type="number" placeholder="Capacity" name="capacity" onChange={GetData} value={ inputtext.capacity}/>
                <input type="number" placeholder="Cost per day" name="cost_per_day" onChange={GetData} value={ inputtext.cost_per_day}/>
                <input type="text" placeholder="Verified" name="verified" onChange={GetData} value={ inputtext.verified}/>
                <input type="number" placeholder="Rating" name="rating" onChange={GetData} value={ inputtext.rating}/>
                {/* <button type="submit" onSubmit={handleSubmit}>Submit</button> */}
                <Link to={{
                    pathname: '/',
                    state: {inputtext}
                }}
>
            <button onSubmit={handleSubmit}>Submit</button>
            </Link>
            </form>
        </>
    )
} 