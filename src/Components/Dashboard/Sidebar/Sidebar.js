import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';


const textStyle = {
    color: 'white'
}
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://cryptic-hamlet-54915.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-start col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard/bookings" className="text-white">
                        <FontAwesomeIcon style={textStyle} icon={faGripHorizontal} /> <span style={textStyle} >Dashboard</span> 
                    </Link>
                </li>
                
                <li>
                    <Link to="/addReviews" className="text-white">
                        <FontAwesomeIcon style={textStyle} icon={faUsers} /> <span style={textStyle}>Add Reviews</span>
                    </Link>
                </li>
               {isAdmin &&  <div>
                <li>
                    <Link to="/addService" className="text-white">
                        <FontAwesomeIcon style={textStyle} icon={faUsers} /> <span style={textStyle}>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageService" className="text-white">
                        <FontAwesomeIcon style={textStyle} icon={faUsers} /> <span style={textStyle}>Manage Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addAdmin" className="text-white">
                        <FontAwesomeIcon style={textStyle} icon={faUsers} /> <span style={textStyle}>Add Admin</span>
                    </Link>
                </li>
                </div>}
                <li>
                    <Link to="/Home" className="text-white" >
                      <FontAwesomeIcon style={textStyle} icon={faCog} /> <span style={textStyle}>Back To Home</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/Home" className="text-white"><FontAwesomeIcon style={textStyle} icon={faSignOutAlt} /> <span style={textStyle}>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;