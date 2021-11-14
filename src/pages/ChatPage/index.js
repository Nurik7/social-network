import React, { useEffect, useState } from "react";

const ws = new WebSocket(
  "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
);

const ChatPage = () => {
  return (
    <div>
      <Chat />
    </div>
  );
};

const Chat = () => {
  return (
    <div>
      <Messages />
      <AddMessageForm />
    </div>
  );
};

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    ws.addEventListener("message", (event) => {
      setMessages(JSON.parse(event.data));
      console.log(JSON.parse(event.data));
    });
  }, []);
  return (
    <div style={{ height: "60vh", overflowY: "auto" }}>
      Messages
      {messages.map((messageBlock, index) => (
        <Message
          key={index}
          message={messageBlock.message}
          photo={messageBlock.photo}
          userName={messageBlock.userName}
          userId={messageBlock.userId}
        />
      ))}
    </div>
  );
};

const Message = ({ message, photo, userName }) => {
  return (
    <div>
      <img width={40} src={photo} alt="avatar" />
      <span>
        <b>{userName}</b>
      </span>
      <div>{message}</div>
      <hr />
    </div>
  );
};

const AddMessageForm = () => {
  return (
    <div>
      <textarea></textarea>
      <button>Send</button>
    </div>
  );
};
export default ChatPage;
