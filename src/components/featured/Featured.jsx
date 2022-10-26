import React from 'react';
import './featured.scss';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <div className="title">Total Earnings</div>
                <MoreVertOutlinedIcon fontSize="small"/>
                
            </div>
            <div className="bottom">
                <div className="featuredCharts">

                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
                   
                </div>
                <p className="title">Total Sales Made Today!</p>
                <p className="ammount">$4222</p>
                <p className="desc">Previous Transection Processing. Last Payments May Not be Included!</p>

                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                            <div className="itemAmmount">$12.5</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownOutlinedIcon fontSize="small"/>
                            <div className="itemAmmount">$10.5</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                            <div className="itemAmmount">$12.5</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;