import axios from "axios";
import { useEffect, useState } from "react"
import "./Home.css"

export const Home = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetchData();
        console.log(data)
    }, []);
    const fetchData = () => {
        axios.get("http://localhost:3005/listing").then((res) => {
            setdata(res.data);
        })
        
    }
    
    return (
        <>
            <h1>Home Page</h1>
            <table className="table">
                <thead > 
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>City</td>
                        <td>Address</td>
                        <td>Capacity</td>
                        <td>Cost per Day</td>
                        <td>Varified</td>
                        <td>Rating</td>

                    </tr>
                
                </thead>
                <tbody>
                    {data.map((el) => (
                        <tr>
                            <td>{el.id}</td>
                            <td>{ el.name}</td>
                            <td>{ el.city}</td>
                            <td>{ el.address}</td>
                            <td>{ el.capacity}</td>
                            <td>{ el.cost_per_day}</td>
                            <td>{ el.verified}</td>
                            <td>{ el.rating}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>

        </>
    )
} 