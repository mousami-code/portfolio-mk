import React, { useState, useEffect } from 'react';
import styles from './Chatbot.module.css';

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Define the series of messages the bot will send
  const botMessages = [
    "Hi, I'm here to assist you! 👋",
    "Would you like to download my resume?",
    "Click below to download my resume!"
  ];

  useEffect(() => {
    // Show the chatbot after a delay (simulate 'pop' style)
    setTimeout(() => {
      setShowChatbot(true);
    }, 300);

    // Simulate the chatbot sending messages with a delay
    const messageInterval = setInterval(() => {
      if (currentMessageIndex < botMessages.length) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botMessages[currentMessageIndex], sender: 'bot' }
        ]);
        setCurrentMessageIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(messageInterval);
      }
    }, 2000); // Send a new message every 2 seconds

    return () => clearInterval(messageInterval); // Clean up interval on unmount
  }, [currentMessageIndex]);

  return (
    <div className={`${styles.chatbotContainer} ${showChatbot ? styles.show : ''}`}>
      <div className={styles.chatbotHeader}>
        <div className={styles.icon}>🤖</div>
        <div className={styles.text}>Assistant</div>
      </div>
      <div className={styles.chatbotMessage}>
        {/* Map over the messages and display them */}
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'bot' ? styles.botMessage : ''}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.chatbotButton}>
        <a href="/Mousami_Kalidindi_Resume.pdf" download>
          Download My Resume
        </a>
      </div>
    </div>
  );
};

export default Chatbot;
