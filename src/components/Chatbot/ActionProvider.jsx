import { sendMessageToApi } from './api';
import ReactMarkdown from 'react-markdown';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleFashionQuestions = () => {
    const message = this.createChatBotMessage("What (watch) fashion questions do you have?");
    this.updateChatbotState(message);
  };

  handleWatchCaringQuestions = () => {
    const message = this.createChatBotMessage("What watch caring questions do you have?");
    this.updateChatbotState(message);
  };

  handleMaintenanceQuestions = () => {
    const message = this.createChatBotMessage("What watch maintenance questions do you have?");
    this.updateChatbotState(message);
  };

  handleFashionIdeas = () => {
    const message = this.createChatBotMessage("What fashion ideas are you looking for?");
    this.updateChatbotState(message);
  };

  handleGeneralWatchKnowledge = () => {
    const message = this.createChatBotMessage("What do you want to know about watches?");
    this.updateChatbotState(message);
  };

  handleLocationQns = () => {
    const message = this.createChatBotMessage("Where is the MONAB showroom located?");
    this.updateChatbotState(message);
  }

  handleDeliveryQns = () => {
    const message = this.createChatBotMessage("Where do you want your watch to be delivered?");
    this.updateChatbotState(message);
  }

  async handleUserMessage(message) {
    try {

      // const url = process.env.REACT_APP_BACKEND_URL

      const response = await sendMessageToApi('https://spm-landing-be-production.up.railway.app', message);
      // console.log("API Response:", response);

      if (response) {
        const genericResponse = this.createChatBotMessage(<ReactMarkdown>{response}</ReactMarkdown>);
        this.updateChatbotState(genericResponse);
      } else {
        throw new Error("Invalid response from API");
      }
    } catch (error) {
      const errorMessage = this.createChatBotMessage(error.message);
      this.updateChatbotState(errorMessage);
    }
  }

  updateChatbotState(message) {
    this.setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message]
    }));
  }
}

export default ActionProvider;
