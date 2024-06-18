import React, { useEffect, useRef, useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './config';
import './Chatbot.css';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

const KitChatBot = () => {
  const [isOpen, setIsOpen] = useState(true);
  const chatRef = useRef(null);

  const toggleChat = ()=> {
    setIsOpen(!isOpen);
  };

//   useEffect(() => {
//     const chatContainer = document.getElementById('chat-window-container');
//     if (chatContainer) {
//       if (isOpen) {
//         chatContainer.style.display = 'block';
//       } else {
//         chatContainer.style.display = 'none';
//       }
//     }
//   }, [isOpen]);

  return (
    <div>
      <button onClick={toggleChat} className="chat-toggle">
        {isOpen ? 'Close' : 'Chat'}
      </button>
      <div id="chat-window-container" ref={chatRef} style={{ display: isOpen ? 'block' : 'none' }}>
        <div className="chat-window">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            headerText="ASK SPM SOLUTIONS"
            placeholderText="Ask me about SEO!"
          />
        </div>
      </div>
    </div>
  );
};

export default KitChatBot;
