import { Button, TextField, Typography } from "@mui/material";
import React, { Component } from "react";
import "../styles/main.css";


class Register extends Component {
    render() {
        return (
            <>
                <svg style={{ margin: "15px" }} fill="none" height="30px" viewBox="0 0 24 24" width="30px" xmlns="http://www.w3.org/2000/svg"><path opacity="0.16" d="M7.242 11.083c.449-1.674 2.17-3.394 3.843-3.843l10.434-2.796c1.673-.448 2.666.545 2.218 2.218L20.94 17.096c-.449 1.674-2.17 3.394-3.843 3.843L6.664 23.735c-1.673.448-2.666-.545-2.218-2.218l2.796-10.434Z" fill="#6366F1"></path><path d="M3.06 6.9c.448-1.674 2.168-3.394 3.842-3.843L17.336.261c1.673-.448 2.667.545 2.218 2.218l-2.796 10.434c-.449 1.674-2.169 3.394-3.843 3.843L2.481 19.552C.808 20-.185 19.007.263 17.334L3.06 6.9Z" fill="#6366F1"></path></svg>
                <div className="section1">
                    <div className="form">
                        <Typography variant="h4" style={{ fontWeight: "600", fontFamily: " 'Poppins', sans-serif" }}>Register</Typography>
                        <p style={{ fontWeight: "400", fontSize: "15px", color: "gray" }}>Already have an account?
                            <a href="<#>" style={{ textDecoration: "none", paddingLeft: "10px", color: "blue" }}>Log in</a>
                        </p>
                        <TextField id="outlined-basic" label="Name" variant="outlined" type="email" />
                        <TextField id="outlined-basic" label="Email Address" variant="outlined" type="email" />
                        <TextField id="outlined-basic" label="Password" variant="outlined" type="password" />
                        <Button variant="contained" id="btn" style={{ backgroundColor: "rgb(99, 102, 241)" }}>Continue</Button>

                    </div>
                    <div className="section2">
                        <div>
                            <h4 style={{ fontSize: "23px" }}>Welcome to <b style={{ color: "rgb(21, 183, 158)" }}>Devias Kit</b>
                                <p style={{ fontSize: "15px", fontWeight: "400" }}>A professional kit that comes with ready-to-use MUI components.</p></h4>

                        </div>
                        <img src="https://material-kit-react.devias.io/assets/auth-illustration.svg" />
                    </div>
                </div>
            </>
        )
    }
}

export default Register;