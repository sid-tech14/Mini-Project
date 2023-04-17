import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import { Component } from 'react';
// import "../styles/main.css";

class Cards extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        const { title, stats, subtitle, renderIcon } = this.props;
        return (
            <div>
                <Paper style={{padding:"3rem", marginTop:"20%"}}>
                    <div>
                        <Typography id='card'> {title} </Typography>
                        <Typography variant='h6' style={{fontWeight: "bold"}}>{stats}</Typography>
                        {renderIcon}
                        <Typography>{subtitle}</Typography>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default Cards;