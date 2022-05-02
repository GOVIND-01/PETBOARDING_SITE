export const ReadOnly = ({ el }) => {
    console.log(el)
    return (
        <>
        <tr>
        <td>{el.id}</td>
        <td>{ el.name}</td>
        <td>{ el.city}</td>
        <td>{ el.address}</td>
        <td>{ el.capacity}</td>
        <td>{ el.cost_per_day}</td>
        <td>{ el.verified}</td>
        <td>{ el.rating}</td>
        <td><button className="btnDelete" onClick={() => {
                                // DeleteFun(el.id)
        }}>Delete</button></td>
        <td><button className="btnDelete" onClick={() => {
                                // Edit();
        }}>Edit</button> </td>
        </tr>
        </>
    )
    
}