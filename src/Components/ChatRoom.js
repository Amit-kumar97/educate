import React from 'react'

import './ChatRoom.css'


function ChatRoom() {
    return (
        <div className='chatRoom'>
            <div className='chat'>
                {/* <div >ChatRoom</div> */}
                {/* <br /> */}
                <div className="chatArea">
                    {/* Messages Here */}
                </div>
                {/* <br /> */}
                <div className="sendMessageArea">
                    {/* Send message */}
                </div>
                <div className="bottom">
                    <span className='messagetper'>type</span>
                </div>
            </div>
        </div>
    )
}

export default ChatRoom