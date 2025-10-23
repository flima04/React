import { useEffect, useState } from 'react';
import { Chatbot } from 'supersimpledev';
import { WelcomeMessage } from './components/WelcomeMessage';
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';
import './App.css';


function App() {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    Chatbot.addResponses({
      hi: "Hi! How can I help you?",
    })
  }, [])

  return (
    <div className="app-container">
      <WelcomeMessage
        className={chatMessages.length === 0 ? "welcome-message" : "hidden"}
      />
      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
