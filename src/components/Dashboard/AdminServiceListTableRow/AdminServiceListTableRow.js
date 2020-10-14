import React from 'react';

const AdminServiceListTableRow = (props) => {
    return (
        <tr className="table-light">
            <td>{props.orderInfo.name}</td>
            <td>{props.orderInfo.email}</td>
            <td>{props.orderInfo.service}</td>
            <td>{props.orderInfo.description}</td>
            <td>{props.orderInfo.status}</td>
        </tr>
    );
};

export default AdminServiceListTableRow;