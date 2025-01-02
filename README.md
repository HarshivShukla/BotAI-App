Here’s a `README.md` file for your GitHub repository, describing your app and its functionality, based on the files you’ve shared.

---

# **Bot AI Application**

This is a **React-based Chat Application** that allows users to interact with a bot, get responses to pre-configured questions, and provide feedback on the bot's responses. It also supports switching between light and dark themes.

## **Features**

- **Theme Toggle**: Switch between light and dark modes.
- **Conversation History**: View past conversations.
- **AI Responses**: Get instant responses to questions from predefined cards or inputted questions.
- **Feedback**: Rate the bot's responses with thumbs up/thumbs down and leave comments.

## **Technologies Used**

- **React**: Front-end JavaScript library for building the UI.
- **Material UI**: For components and styling.
- **React Context API**: Used to manage and share theme state across the app.
- **MUI Icons**: For the feedback buttons (thumbs up/thumbs down).
- **React Modal**: Used for feedback submission.

## **Installation**

1. Clone the repository:

```bash
git clone https://github.com/your-username/bot-ai.git
```

2. Navigate to the project folder:

```bash
cd bot-ai
```

3. Install dependencies:

```bash
npm install
```

4. Start the application:

```bash
npm start
```

## **Features Overview**

### **1. Theme Toggle**
The theme toggle button, located in the top-right corner of the application, allows the user to switch between **light mode** and **dark mode**. This functionality is managed using the **React Context API**.

### **2. Chat Window**
In the **Chat Window**, the user can type in questions. The bot will check whether the question is in the predefined questions in the `sampleData.json` file. If it is, the bot will provide a matching response; otherwise, a default response is given.

- **Cards View**: The user can also click on predefined cards (such as "What's the weather?", "What's the temperature?", etc.) to receive instant responses.
  
- **Input Box**: The user can enter their own questions and receive responses. The questions are checked against `sampleData.json`, and if a match is found, the corresponding response is shown. If not, a default response will be shown.

### **3. Feedback System**
The **FeedbackModal** pops up after a conversation ends. Here, the user can:
- Rate the bot’s responses using a **5-star rating system**.
- Leave **comments** about the conversation.

### **4. Past Conversations**
The user can view past conversations by clicking on the **Past Conversations** button. Conversations are displayed in a list format. Clicking on any past conversation will load the chat view with the full conversation.

### **5. Mobile-Friendly**
The app is responsive, and it works well across different screen sizes.

## **File Structure**

```plaintext
src/
│
├── components/
│   ├── ChatWindow.js       // Main chat interface
│   ├── FeedbackButtons.js  // Thumbs up/down functionality
│   ├── FeedbackModal.js    // End-of-conversation feedback form
│   ├── ConversationList.js // List of past conversations
│   ├── FeedbackTable.js    // Feedback summary with filters
│   ├── ThemeToggle.js      // Dark mode toggle
│
├── data/
│   └── sampleData.json     // Mock AI responses
│
├── context/
│   └── ThemeContext.js     // Context for dark/light mode
│
├── styles/
│   └── theme.js            // Material-UI theme configuration code
│
├── App.js                  // Main app component
├── index.js                // Entry point
└── index.css               // Global styles
```

## **App Workflow**

1. **Starting a New Conversation**: 
   - The user can click on "New Chat" in the sidebar. This will reset the chat and allow the user to either select a question from the available cards or type their own question.
  
2. **Asking Questions**: 
   - If the user types a question in the input box, it is matched with questions in `sampleData.json`.
   - If a match is found, the bot replies with the appropriate response. If not, the bot replies with a default message.

3. **Viewing Past Conversations**: 
   - Users can view past conversations in the "Past Conversations" section. Each past conversation is clickable and will load the conversation in the chat window.

4. **Providing Feedback**: 
   - After a conversation ends, users can provide feedback on the bot’s responses by giving a rating and adding comments. 

## **Dependencies**

- **React**: `npm install react`
- **Material UI**: `npm install @mui/material @emotion/react @emotion/styled`
- **React Router (Optional for Navigation)**: `npm install react-router-dom`
- **React Icons (Optional for icons)**: `npm install react-icons`

## **Contributing**

Feel free to fork this repository, make changes, and create a pull request. If you encounter any bugs or have feature requests, please open an issue.

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### **Usage Example**:

Once you open the app, you'll see a clean interface with a sidebar. Here's what you can expect:
- **How Can I Help You Today?**: Choose from predefined questions or type your own.
- **Chat**: After selecting a question or typing your own, you'll see a conversation.
- **Feedback Modal**: After each conversation, provide feedback for the bot.
- **Past Conversations**: View your previous conversations at any time.

Let me know if you need any additional information or modifications!
