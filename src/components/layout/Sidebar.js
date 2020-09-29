import React from 'react';
import Links from './Links';

import './Sidebar.css';

const Sidebar = (props) =>{
    return(
        <div className="side-bar">
            <Links onClick={props.click}/>
        </div>
    )
}

export default Sidebar;