import React from "react";

const ConversationList = ({ conversations, onSelectConversation }) => {
  return (
    <div className="conversation-list">
      <h3>Past Conversations</h3>
      <ul>
        {conversations.map((conv, index) => (
          <li
            key={index}
            className="conversation-item"
            onClick={() => onSelectConversation(index)}
          >
            <div className="conversation-header">
              <h4>Conversation {index + 1}</h4>
              {/* Add more details like date or feedback if necessary */}
            </div>
            <div className="conversation-preview">
              {/* Display the first message of each conversation as a preview */}
              {conv[0] && <p>{conv[0].text}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationList;
