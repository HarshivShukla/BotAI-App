import React, { useState } from "react";
import FeedbackButtons from "./FeedbackButtons";
import { sampleData } from "../data/sampleData";

const ChatWindow = ({ onConversationEnd }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { type: "user", text: input };
      const aiResponse = {
        type: "ai",
        text: sampleData[Math.floor(Math.random() * sampleData.length)].response,
      };
      setMessages((prev) => [...prev, userMessage, aiResponse]);
      setInput("");
    }
  };

  return (
    <div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            <span>{msg.text}</span>
            {msg.type === "ai" && <FeedbackButtons />}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
      <button onClick={onConversationEnd}>End Conversation</button>
    </div>
  );
};

export default ChatWindow;
