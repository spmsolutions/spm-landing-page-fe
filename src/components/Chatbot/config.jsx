import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const config = {
  initialMessages: [
    createChatBotMessage(`Hi! How can I help you?`, { widget: 'OptionsWidget' })
  ],
  botName: "SPM Assistant",
  customStyles: {
    botMessageBox: { backgroundColor: "#345541" },
    chatButton: { backgroundColor: "#e8ced0" }
  },
  customComponents: {
    botAvatar: (props) => {
      const avatarLetter = "S";
      return (
        <div 
          style={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: '36px', 
            height: '36px', 
            backgroundColor: '#345541',
            color: '#fffff0',
            borderRadius: '50%'
          }} 
          {...props} 
        >
          {avatarLetter}
        </div>
      );
    },
    header: ({ closeChat }) => (
      <div 
        style={{ 
          backgroundColor: '#f5f9ff', 
          color: '#345541',
          padding: "5px", 
          borderTopRightRadius: "5px",
          borderTopLeftRadius: "5px",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.85rem',
          padding: "12.5px",
          fontWeight: "bold"
        }}
      >
        <h5 style={{ margin: 0 }}>ASK SPM SOLUTIONS!</h5>
        <button 
          onClick={closeChat} 
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#345541',
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    ),
  },
};

export default config;
