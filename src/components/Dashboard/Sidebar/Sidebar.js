import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers, faShoppingCart, faCommentDots, faListAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { faServicestack } from '@fortawesome/free-brands-svg-icons';
const Sidebar = () => {
    return (
        <div className="">
            <nav class="nav flex-column">
                <Link className="mb-3" to="/dashboardOrder" style={{ textDecoration: 'none', color: "black", fontSize: "16px" }}>
                    <FontAwesomeIcon icon={faShoppingCart} /> <span style={{ color: 'black' }} className="ml-2">Order</span>
                </Link>
                <Link className="mb-3" to="/dashboardServiceList" style={{ textDecoration: 'none', color: "black", fontSize: "16px" }}>
                    <FontAwesomeIcon icon={faListAlt} /> <span style={{ color: 'black' }} className="ml-2">Service List</span>
                </Link>
                <Link className="mb-3" to="/dashboardReview" style={{ textDecoration: 'none', color: "black", fontSize: "16px" }}>
                    <FontAwesomeIcon icon={faCommentDots} /> <span style={{ color: 'black' }} className="ml-2">Review</span>
                </Link>
                <Link className="mb-3" to="/dashboardAddService" style={{ textDecoration: 'none', color: "black", fontSize: "16px" }}>
                    <FontAwesomeIcon icon={faPlus} /> <span style={{ color: 'black' }} className="ml-2">Add service</span>
                </Link>
                <Link className="mb-3" to="/dashboardMakeAdmin" style={{ textDecoration: 'none', color: "black", fontSize: "16px" }}>
                    <FontAwesomeIcon icon={faUserPlus} /> <span style={{ color: 'black' }} className="ml-2">Make Admin</span>
                </Link>

            </nav>
        </div>
    );
};

export default Sidebar;