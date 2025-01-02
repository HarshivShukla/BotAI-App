import React from "react";

const ConversationList = ({ conversations, onSelectConversation }) => {
  return (
    <div className="conversation-list">
      <h3>Past Conversations</h3>
      <ul>
        {conversations.map((conv, index) => (
          <li key={index} onClick={() => onSelectConversation(index)}>
            Conversation {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationList;
