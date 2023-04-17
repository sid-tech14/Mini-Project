import * as React from "react";
import { Grid, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import GroupSharpIcon from "@mui/icons-material/GroupSharp";
import { AttachMoney, Group, List } from "@mui/icons-material";

import axios from "axios";

function Stats() {

    const [indiceList, setindiceList] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://twelve-data1.p.rapidapi.com/forex_pairs?currency_base=EUR&format=json', {
            headers: {
                'X-RapidAPI-Key': '1bba5e223bmshf4ef46b7a0f7061p18f3dfjsn5c27ae603354',
                'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
            }
        })
            .then(res => {
                setindiceList(res.data.data);
            })
            .catch(err => alert('err'));
    }, [])
    return (
        <>
            <Grid container>
                <Table style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "250px" }}>
                    <TableHead>
                        <TableRow style={{ backgroundColor: "blue" }}>
                            <TableCell style={{ color: "white" }}>Symbol</TableCell>
                            <TableCell style={{ color: "white" }}>Name</TableCell>
                            <TableCell style={{ color: "white" }}>Exchange</TableCell>
                            <TableCell style={{ color: "white" }}>Currency</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            indiceList.map((iL, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>{iL.symbol}</TableCell>
                                        <TableCell>{iL.currency_group}</TableCell>
                                        <TableCell>{iL.currency_base}</TableCell>
                                        <TableCell>{iL.currency_quote}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>


            </Grid>
        </>
    );
}

export default Stats;