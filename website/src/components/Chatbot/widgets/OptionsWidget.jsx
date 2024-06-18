// OptionsWidget.jsx
import React from 'react';
import '../Chatbot.css';


const OptionsWidget = ({ actionProvider }) => {
  const options = [
    // { text: "Fashion Questions", handler: actionProvider.handleFashionQuestions, id: 1 },
    // { text: "Watch Caring Questions", handler: actionProvider.handleWatchCaringQuestions, id: 2 },
    { text: "Delivery Questions", handler: actionProvider.handleDeliveryQns, id: 1 },
    { text: "Location Questions", handler: actionProvider.handleLocationQns, id: 2 },
    // { text: "Maintenance Questions", handler: actionProvider.handleMaintenanceQuestions, id: 3 },
    { text: "Fashion Ideas", handler: actionProvider.handleFashionIdeas, id: 4 },
    // { text: "General Watch Knowledge", handler: actionProvider.handleGeneralWatchKnowledge, id: 5 },
  ];

  return (
    <div className="options-widget">
      {options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default OptionsWidget;
