import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {SearchOutlined} from "@material-ui/icons";
import {Avatar, IconButton} from "@material-ui/core";
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className = "sidebar">            
            <div className ="sidebar__header">
                <Avatar alt="" src= "/images/ninjaCoder.jpg"/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>                    
                </div>
            </div>
            <div className= "sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder = "Search or Start New Chat" type = "text" />
                </div>
            </div> 
            <div className = "sidebar__Chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>           
        </div>
    )
}

export default Sidebar
