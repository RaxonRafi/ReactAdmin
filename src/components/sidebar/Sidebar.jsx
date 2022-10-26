import React from 'react';
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AndroidIcon from '@mui/icons-material/Android';
import RssFeedOutlinedIcon from '@mui/icons-material/RssFeedOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const Sidebar = () => {
    return (
        <div className="sidebar">

            <div className="top">
                <div className="logo"><span>Admin</span></div>
            </div>
            <hr />
            <div className="center">
                <ul>
                <p className="title">MAIN</p>
                    <li>
                    <DashboardIcon className="icon" />    
                    <span>Dashboard</span></li>

                    <p className="title">List</p>

                    <li>
                        <PersonAddAltOutlinedIcon className="icon"/>
                        <span>Users</span></li>
                    <li>
                        <Inventory2OutlinedIcon className="icon"/>
                        <span>Products</span></li>
                    <li>
                        <ShoppingCartOutlinedIcon className="icon"/>
                        <span>Orders</span></li>
                    <li>
                        <LocalShippingOutlinedIcon className="icon"/>
                        <span>Delivery</span></li>

                        <p className="title">USEFUL LINKS</p>

                    <li>
                        <BarChartOutlinedIcon className="icon"/>
                        <span>States</span></li>
                    <li>
                        <NotificationsActiveOutlinedIcon className="icon"/>
                        <span>Notifications</span></li>

                        <p className="title">SERVICE</p>


                    <li>
                        <AndroidIcon className="icon"/>
                        <span>System Health</span></li>

                    <li>
                        <RssFeedOutlinedIcon className="icon"/>
                        <span>Logs</span></li>
                        <p className="title">SETTINGS</p>


                    <li>
                        <SettingsSuggestOutlinedIcon className="icon"/>
                        <span>Settings</span></li>

                        <p className="title">USER</p>

                    <li>
                        <AccountCircleOutlinedIcon className="icon"/>
                        <span>Profile</span></li>
                    <li>
                        <ExitToAppOutlinedIcon className="icon"/>
                        <span>Logout</span></li>

                    
                </ul>
            </div>
            <div className="bottom">
             <div className="colorOptions"></div> 
             <div className="colorOptions"></div>    
   
            </div>
            
        </div>
    );
};

export default Sidebar;