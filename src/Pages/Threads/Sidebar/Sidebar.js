import React, { useState } from "react";

import plusIcon from "../../Threads/Assest/plus.png";

import "./ThreadSidebar.css";

function Sidebar(props) {
    const colors = ["#588157", "#6d6875", " #354f52", "#005f73", "#efd3d7","#73ba9b","#cfdbd5","#ef233c"];

    const [listOpen, setListOpen] = useState(false);

    return (
        <div className="sidebar">
        <img src={plusIcon} alt="Add" onClick={() => setListOpen(!listOpen)} />
        <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
            {colors.map((item, index) => (
            <li
                key={index}
                className="sidebar_list_item"
                style={{ backgroundColor: item }}
                onClick={() => props.addNote(item)}
            />
            ))}
        </ul>
        </div>
    );
}

export default Sidebar;