import * as React from 'react';
import { Component } from 'react';
import Cards from './Cards';
import { MonetizationOn } from '@mui/icons-material';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';



class Overview extends Component {
    render() {
        return (
            <>
                <div style={{ display: "flex", justifyContent: "center", gap: "100px", marginLeft: " 15%" }}>
                    <Cards title={'BUDGET'} renderIcon={<MonetizationOn style={{ color: "red", fontSize: "3rem" }} />} stats={'$24k'} subtitle={'Since Last Month'} />
                    <Cards title={'TOTAL CUSTOMERS'} renderIcon={<SupervisedUserCircleIcon style={{ color: "green", fontSize: "3rem" }} />} stats={'1.6k'} subtitle={'Since Last Month'} />
                    <Cards title={'TASK PROGRESS'} renderIcon={<PlaylistAddCheckCircleIcon style={{ color: "orange", fontSize: "3rem" }} />} stats={'75.5%'} subtitle={'Since Last Month'} />
                    <Cards title={'TOTAL PROFIT'} renderIcon={<MonetizationOn style={{ color: "blue", fontSize: "3rem" }} />} stats={'$15k'} subtitle={'Since Last Month'} />
                </div>

            </>
        )
    }
}

export default Overview;