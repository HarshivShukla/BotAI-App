import React, { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import FeedbackModal from "./components/FeedbackModal";
import ConversationList from "./components/ConversationList";
import FeedbackTable from "./components/FeedbackTable";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./styles/theme";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const [conversations, setConversations] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [currentConversation, setCurrentConversation] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleEndConversation = () => {
    setConversations((prev) => [...prev, currentConversation]);
    setModalOpen(true);
  };

  const handleFeedbackSubmit = (newFeedback) => {
    setFeedback((prev) => [...prev, newFeedback]);
  };

  return (
    <ThemeContext.Provider>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <div>
          <ThemeToggle />
          <ConversationList
            conversations={conversations}
            onSelectConversation={setCurrentConversation}
          />
          <ChatWindow onConversationEnd={handleEndConversation} />
          <FeedbackModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            onSubmit={handleFeedbackSubmit}
          />
          <FeedbackTable feedbackData={feedback} />
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
