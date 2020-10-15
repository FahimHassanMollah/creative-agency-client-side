import React from 'react';

const AdminServiceListTableRow = (props) => {
    const fun=props.statusChange;
    console.log(fun)
    return (
        <tr className="table-light">
            <td>{props.orderInfo.name}</td>
            <td>{props.orderInfo.email}</td>
            <td>{props.orderInfo.service}</td>
            <td>{props.orderInfo.description}</td>
            <td>
                <select className=""  onChange={(event)=>fun(event,props.orderInfo._id)} name="status"  >

                   {/* <option disabled={true} value="Not set">{ props.orderInfo.status }</option> */}
                   {
                     props.orderInfo.status==='pending'&& <>
                     
                     <option style={{color:'#ff4545'}} value="pending">Pending</option>
                     <option style={{color:"#009444"}} value="done">Done</option>
                    <option style={{color:'#ffbd3e'}} value="ongoing">On going</option>
                     </>  
                   }
                   {
                     props.orderInfo.status==='done'&& <>
                     
                     <option style={{color:"#009444"}} value="done">Done</option>
                     <option style={{color:'#ff4545'}} value="pending">Pending</option>
                    <option style={{color:'#ffbd3e'}} value="ongoing">On going</option>
                     </>  
                   }
                   {
                     props.orderInfo.status==='ongoing'&& <>
                     
                     <option style={{color:'#ffbd3e'}} value="ongoing">On going</option>
                     <option style={{color:'#ff4545'}} value="pending">Pending</option>
                    <option style={{color:"#009444"}} value="done">Done</option>
                     </>  
                   }
                   
                </select>
            </td>
        </tr>
    );
};

export default AdminServiceListTableRow; 