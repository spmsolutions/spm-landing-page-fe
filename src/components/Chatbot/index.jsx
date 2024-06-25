import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
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

  return (
    <div>
      <button
          className={isOpen? "open-chat-button":"app-chatbot-button"}
          onClick={() => toggleChat((prev) => !prev)}
        >
       <FontAwesomeIcon icon={faCommentDots} />
        </button>
      <div id="chat-window-container" ref={chatRef} style={{ display: isOpen ? 'block' : 'none' }}>
        <div className="chat-window">
          <Chatbot
            config={{ ...config, customComponents: { ...config.customComponents, header: () => config.customComponents.header({ closeChat:toggleChat}) } }}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            headerText="ASK SPM SOLUTIONS"
            placeholderText="Ask me about SEO!"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default KitChatBot;
