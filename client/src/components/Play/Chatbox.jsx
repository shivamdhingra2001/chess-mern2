import React, { useContext,  useState } from 'react'
import { GameDataContext } from '../../providers/gameDataProvider'
const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const { gameData } = useContext(GameDataContext);
  
    
    const handleSendMessage = () => {
        if (!newMessage.trim()) return;
        setMessages([...messages, newMessage]);
        setNewMessage('');
    };

    return (
        <div className="bg-secondary-dark p-4 rounded-lg overflow-hidden">\
            <span className='text-white'>
                Chat with {gameData.opponent.username} here
            </span>
            <div className="overflow-auto h-64">
                {messages.map((message, index) => (
                    <div key={index} className="p-2 text-copy text-md">{message}</div>
                ))}
            </div>
            <div className="flex m-2 gap-2">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-grow w-3/4 p-2 rounded-lg bg-foreground text-copy text-sm"
                    placeholder="Type a message..."
                />
                <button
                    onClick={handleSendMessage}
                    className="bg-secondary-light text-copy px-2 rounded-lg content-center w-auto text-sm border-2 border-secondary-content border-opacity-30 hover:opacity-50"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatBox;
