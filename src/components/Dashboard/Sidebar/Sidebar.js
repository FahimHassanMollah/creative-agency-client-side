import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers, faShoppingCart, faCommentDots, faListAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { faServicestack } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../../App';
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        const data = {
            email: loggedInUser.email
        }

        fetch('http://localhost:8080/getAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                setAdmin(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [loggedInUser.email])
    return (
        <div className="">
            <nav className="nav flex-column">
                {
                    admin === false && <Link className="mb-3" to="/" style={{ textDecoration: 'none', color: "black", fontSize: "16px" }}>
                        <FontAwesomeIcon icon={faShoppingCart} /> <span style={{ color: 'black' }} className="ml-2">Order</span>
                    </Link>
                }
                {
                    admin ? <Link className="mb-3" to="/dashboardAdminServiceList" style={{ textDecoration: 'none', color: "black", fontSize: "16px" }}>
                        <FontAwesomeIcon icon={faListAlt} /> <span style={{ color: 'black' }} className="ml-2">Admin Service List</span>
                    </Link>
                        :
                        <Link className="mb-3" to="/dashboardUserServiceList" style={{ textDecoration: 'none', color: "black", fontSize: "16px" }}>
                            <FontAwesomeIcon icon={faListAlt} /> <span style={{ color: 'black' }} className="ml-2">Service List</span>
                        </Link>
                }


                {
                    admin === false && <Link className="mb-3" to="/dashboardUserReview" style={{ textDecoration: 'none', color: "black", fontSize: "16px" }}>
                        <FontAwesomeIcon icon={faCommentDots} /> <span style={{ color: 'black' }} className="ml-2">Review</span>
                    </Link>
                }

                {
                    admin && <Link className="mb-3" to="/dashboardAddService" style={{ textDecoration: 'none', color: "black", fontSize: "16px" }}>
                        <FontAwesomeIcon icon={faPlus} /> <span style={{ color: 'black' }} className="ml-2">Add service</span>
                    </Link>
                }
                {
                    admin && <Link className="mb-3" to="/dashboardMakeAdmin" style={{ textDecoration: 'none', color: "black", fontSize: "16px" }}>
                        <FontAwesomeIcon icon={faUserPlus} /> <span style={{ color: 'black' }} className="ml-2">Make Admin</span>
                    </Link>
                }

            </nav>
        </div>
    );
};

export default Sidebar;