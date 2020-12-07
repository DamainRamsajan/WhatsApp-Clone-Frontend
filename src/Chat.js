import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon } from '@material-ui/icons'
import MicIcon from "@material-ui/icons/Mic"
import React from 'react'
import "./Chat.css"

function Chat() {
    return (
        <div className = "chat">
           <div className = "chat__header">
               <Avatar />
               <div className ="chat__headerInfo">
                   <h3>room name</h3>
                   <p>last seen at ....</p>
               </div>
               <div className ="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>  
               </div>
           </div>
           <div className ="chat__body">
               <p className = "chat__message">
                   <span className = "chat__name">Damian
                   </span>
                   this is a message
                   
                   <span className = "chat__timestamp">
                       {new Date().toUTCString()}
                    </span>
               </p>

               <p className = "chat__message chat__reciever">
                   <span className = "chat__name">Bob Marley
                   </span>
                   we gonna chase them crazy bump heads outa yard
                   
                   <span className = "chat__timestamp">
                       {new Date().toUTCString()}
                    </span>
               </p>  

               <p className = "chat__message">
                   <span className = "chat__name">Damian
                   </span>
                   this is a message
                   
                   <span className = "chat__timestamp">
                       {new Date().toUTCString()}
                    </span>
               </p>

               <p className = "chat__message chat__reciever">
                   <span className = "chat__name">Bob Marley
                   </span>
                   we be jammin
                   
                   <span className = "chat__timestamp">
                       {new Date().toUTCString()}
                    </span>
               </p>  
           </div>

           <div className ="chat__footer">
               <InsertEmoticon />
               <form>
                   <input 
                   placeholder ="type a message"
                   type = "text"
                   />
                   <button 
                   type = "submit">
                       Send a message
                   </button>
               </form>
               <MicIcon />
           </div>

        </div>
    )
}

export default Chat
