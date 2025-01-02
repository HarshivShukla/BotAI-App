import React, { useState, useContext } from "react";
import ChatWindow from "./components/ChatWindow";
import FeedbackModal from "./components/FeedbackModal"; // Fixed typo in import
import ConversationList from "./components/ConversationList";
import FeedbackTable from "./components/FeedbackTable";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./styles/theme";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css"; // Add custom styles to align with the desired UI

const App = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext); // Consuming ThemeContext
  const [conversations, setConversations] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [currentConversation, setCurrentConversation] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleEndConversation = () => {
    setConversations((prev) => [...prev, currentConversation]);
    setCurrentConversation([]); // Reset current conversation
    setModalOpen(true);
  };

  const handleFeedbackSubmit = (newFeedback) => {
    setFeedback((prev) => [...prev, { ...newFeedback, conversation: conversations.length }]);
    setModalOpen(false);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div className={`app-container ${darkMode ? "dark" : "light"}`}>
        {/* Sidebar */}
        <div className="sidebar">
          <h2>Bot AI</h2>
          <button className="new-chat-btn" onClick={() => setCurrentConversation([])}>
            New Chat
          </button>
          <button className="past-conversations-btn">
            Past Conversations
          </button>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <ThemeToggle toggleTheme={toggleTheme} darkMode={darkMode} />
          {currentConversation.length === 0 ? (
            <>
              <h1 className="title">How Can I Help You Today?</h1>
              <div className="options-grid">
                <button
                  className="query-card"
                  onClick={() =>
                    setCurrentConversation((prev) => [...prev, "Hi, what is the weather"])
                  }
                >
                  Hi, what is the weather
                </button>
                <button
                  className="query-card"
                  onClick={() =>
                    setCurrentConversation((prev) => [...prev, "Hi, what is the temperature"])
                  }
                >
                  Hi, what is the temperature
                </button>
                <button
                  className="query-card"
                  onClick={() =>
                    setCurrentConversation((prev) => [...prev, "Hi, what is my location"])
                  }
                >
                  Hi, what is my location
                </button>
                <button
                  className="query-card"
                  onClick={() =>
                    setCurrentConversation((prev) => [...prev, "Hi, how are you"])
                  }
                >
                  Hi, how are you
                </button>
              </div>
            </>
          ) : (
            <ChatWindow
              conversation={currentConversation}
              setConversation={setCurrentConversation}
              onConversationEnd={handleEndConversation}
            />
          )}
        </div>

        {/* Feedback Modal */}
        <FeedbackModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleFeedbackSubmit}
        />

        {/* Feedback Table */}
        <FeedbackTable feedbackData={feedback} />
      </div>
    </ThemeProvider>
  );
};

export default App;
