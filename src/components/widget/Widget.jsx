import React from 'react';
import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

const Widget = ({type}) => {

    let data;

    const ammount = 100
    const diff = 20

    switch(type){
        case "user":
            data ={
                   title: "USERS",
                   isMoney: false,
                   link: "See All Users",
                   icon:<PersonOutlinedIcon className="icon" style={{
                    color:"red" , 
                    backgroundColor:"rgba(225,0,0,0.2)",}} />,
            }
            break;
            case "order":
                data ={
                       title: "ORDERS",
                       isMoney: false,
                       link: "View All Orders",
                       icon: <ShoppingCartOutlinedIcon className="icon" style={{
                        color:"#FFD700" , 
                        backgroundColor:"RGBA(219,248,126,0.5)",}} />,
                }
                break;
                case "earnings":
                    data ={
                           title: "EARNINGS",
                           isMoney: true,
                           link: "View Net Earnings",
                           icon: <CurrencyExchangeOutlinedIcon className="icon" style={{
                            color:"green" , 
                            backgroundColor:"RGBA(55,250,80,0.4)",}} />,
                    }
                    break;
                    case "balance":
                        data ={
                               title: "BALANCE",
                               isMoney: true,
                               link: "Balance Details",
                               icon: <AccountBalanceOutlinedIcon className="icon" style={{
                                color:"purple" , 
                                backgroundColor:"rgba(225,0,0,0.2)",}} />,
                        }
                        break;
            default:
            break;
        }
    
    return (
        <div className="widget">

            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}{ammount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon/>
                    {diff}%
                    
                </div>
               {data.icon}
            </div>
            
        </div>
    );
};


export default Widget;