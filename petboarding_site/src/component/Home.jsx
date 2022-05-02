import axios from "axios";
import { useEffect, useState } from "react"
import "./Home.css"
import { ReadOnly } from "./ReadOnly";

export const Home = () => {
    const [editable, setEditable] = useState(false);
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
    // const DeleteFun = (id) => {
    //     setdata((prev) => {
    //         return prev.filter((data) => data.id != id);
    //     })
    // }
    // const Edit = () => {
    //     setEditable(true);
    // }
    return (
        <div className="main">
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
                        <td>Delete Button</td>
                        <td>Edit Button</td>
                    </tr>
                
                </thead>
                <tbody>
                    {data.map((el) => (
                        <ReadOnly el={el}/>
                    ))}
                    
                </tbody>
            </table>

        </div>
    )
} 