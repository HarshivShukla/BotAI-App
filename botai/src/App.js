import React, { useState, useContext } from "react";
import ChatWindow from "./components/ChatWindow";
import FeedbackModal from "./components/FeedbackModal";
import ThemeToggle from "./components/ThemeToggle";
import ConversationList from "./components/ConversationList";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./styles/theme";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";

const App = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState([]);
  const [input, setInput] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [view, setView] = useState("cards"); // Default view is cards

  const handleEndConversation = () => {
    if (currentConversation.length > 0) {
      setConversations((prev) => [...prev, currentConversation]);
      setCurrentConversation([]);
      setModalOpen(true); // Open feedback modal when conversation ends
      setView("cards");
    }
  };

  const handleFeedbackSubmit = (feedback) => {
    console.log("Feedback submitted:", feedback);
    setModalOpen(false); // Close modal after submitting feedback
  };

  const handleAsk = () => {
    if (input.trim()) {
      const userMessage = { type: "user", text: input };
      const aiResponse = generateResponse(input);
      setCurrentConversation((prev) => [
        ...prev,
        userMessage,
        { type: "ai", text: aiResponse },
      ]);
      setInput("");
    }
  };

  const handleCardClick = (query) => {
    const aiResponse = generateResponse(query);
    setCurrentConversation([
      { type: "user", text: query },
      { type: "ai", text: aiResponse },
    ]);
    setView("chat"); // Switch to chat view after card click
  };

  const generateResponse = (message) => {
    switch (message.toLowerCase()) {
      case "hi, what is the weather":
        return "The weather is sunny and warm.";
      case "hi, what is the temperature":
        return "The temperature is currently 25°C.";
      case "hi, what is my location":
        return "Your location is set to New York City.";
      case "hi, how are you":
        return "I'm just a bot, but I'm doing great! How can I assist you?";
      default:
        return "I'm sorry, I don't understand that question. Could you rephrase?";
    }
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div className={`app-container ${darkMode ? "dark" : "light"}`}>
        {/* Sidebar */}
        <div className="sidebar">
          <h2>Bot AI</h2>
          <button
            className="new-chat-btn"
            onClick={() => {
              setView("cards");
              setCurrentConversation([]);
            }}
          >
            New Chat
          </button>
          <button
            className="past-chats-btn"
            onClick={() => setView("history")}
          >
            Past Conversations
          </button>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <ThemeToggle toggleTheme={toggleTheme} darkMode={darkMode} />

          {view === "cards" && (
            <>
              <h1 className="title">How Can I Help You Today?</h1>
              <div className="options-grid">
                {[
                  "Hi, what is the weather",
                  "Hi, what is the temperature",
                  "Hi, what is my location",
                  "Hi, how are you",
                ].map((query) => (
                  <button
                    key={query}
                    className="query-card"
                    onClick={() => handleCardClick(query)}
                  >
                    <strong>{query}</strong>
                    <p>Get immediate AI-generated response</p>
                  </button>
                ))}
              </div>
            </>
          )}

          {view === "chat" && (
            <>
              <div className="chat-window">
                {currentConversation.map((message, index) => (
                  <div
                    key={index}
                    className={`message ${message.type === "user" ? "user" : "ai"}`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>

              {/* Text input box for further queries */}
              <div className="footer">
                <input
                  type="text"
                  className="chat-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question here..."
                />
                <button className="ask-btn" onClick={handleAsk}>
                  Ask
                </button>
                <button className="end-btn" onClick={handleEndConversation}>
                  End Conversation
                </button>
              </div>
            </>
          )}

          {view === "history" && (
            <ConversationList
              conversations={conversations}
              onSelectConversation={(index) => {
                setCurrentConversation(conversations[index]);
                setView("chat");
              }}
            />
          )}
        </div>

        {/* Feedback Modal */}
        <FeedbackModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleFeedbackSubmit}
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
