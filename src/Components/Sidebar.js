import React from 'react'
import "./Sidebar.css";
// import Sidebar__left_middle from './Sidebar__left_middle';
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <h2><i className='fa fa-user'></i> User</h2>
                
            </div>
            <hr />
            <div className="sidebar__middle">
                {/* <Sidebar__left_middle/> */}
                <ul>
                    <li><i className='fab fa-artstation'></i> Art Station</li>
                    <li> <i className='far fa-file'></i> Thread</li>
                    <li> <i className='far fa-at'></i> Mentions & Reactions</li>
                    <li><i className='far fa-bookmark'></i> Saved Items</li>
                    <li><i className='far fa-comments'></i> Chat Browser</li>
                    <li><i class="fa fa-users"></i> People & Groups</li>
                    <li><i className='far fa-file'></i> File Browser</li>
                </ul>
            </div>
            <hr />
            <div className="Rooms">
                #Rooms +
            </div>
            <hr />
            <div className="Add_Rooms">
                #Add Room +
            </div>
        </div>
    )
}

export default Sidebar