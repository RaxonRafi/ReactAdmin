import React from 'react';
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import avatar from './img/avatar.jpg'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="search...." />
                    <SearchOutlinedIcon/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icons"/>
                        English
                    </div>
                    <div className="item">
                     <FullscreenExitOutlinedIcon className="icons"/>
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon className="icons"/>
                    </div>
                    <div className="item">
                     <NotificationImportantOutlinedIcon className="icons"/>
                     <div className="counter">1</div>

                    </div>
                    <div className="item">
                     <ChatBubbleOutlineOutlinedIcon className="icons"/>
                     <div className="counter">2</div>
                    </div>
                    <div className="item">
                     <ListOutlinedIcon className="icons"/>
                    </div>
                   
                    <div className="item">
                     <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="avatar" />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;