import React, { Component } from "react";
import "../styles/main.css";
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";


class Sidebar extends Component {



    render() {
        return (
            <>
                <div className="sidebar">
                    <ul className="sidebarList">
                        <Link to="/overview" id="list"><li><HomeIcon />Overview</li></Link>
                        <Link to="/stats" id="list"><li><AssessmentIcon />Stats</li></Link>
                        <li><LockPersonIcon /> Logout</li>
                    </ul>
                    <Divider />
                </div>
            </>
        )
    }
}

export default Sidebar;