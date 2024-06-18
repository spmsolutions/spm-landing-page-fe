import { createChatBotMessage } from 'react-chatbot-kit';
import OptionsWidget from './widgets/OptionsWidget';

const config = {
  initialMessages: [
    createChatBotMessage(`Hi! How can I help you?`, { widget: 'OptionsWidget' })
  ],
  botName: "SPM Assistant",
  customStyles: {
    botMessageBox: { backgroundColor: "#345541" },
    chatButton: { backgroundColor: "#e8ced0" }
  },
//   widgets: [
//     {
//       widgetName: "OptionsWidget",
//       widgetFunc: (props) => <OptionsWidget {...props} />,
//       props: {},
//       mapStateToProps: ["messages"]
//     },
//   ],
  customComponents: {
    botAvatar: (props) => {
      const avatarLetter = "S";
      // botAvatar: (props) => <FlightBotAvatar {...props} />,
      // Return a new component with the updated avatar letter
      return <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', backgroundColor: '#345541',color: '#fffff0',borderRadius: '50%'}} {...props} >{avatarLetter}</div>;
    },
  },
};

export default config;
