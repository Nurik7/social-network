import React, { useEffect, useState } from "react";

const ChatPage = () => {
  return (
    <div>
      <Chat />
    </div>
  );
};

const Chat = () => {
  const [wsChannel, setWsChannel] = useState(null);

  useEffect(() => {
    function createChannel() {
      const ws = new WebSocket(
        "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
      );
      ws?.addEventListener("close", (event) => {
        console.log("WS CLOSED");
        setTimeout(createChannel, 5000);
      });
      setWsChannel(ws);
    }
    createChannel();
  }, []);

  useEffect(() => {}, [wsChannel]);

  return (
    <div>
      <Messages wsChannel={wsChannel} />
      <AddMessageForm wsChannel={wsChannel} />
    </div>
  );
};

const Messages = ({ wsChannel }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    wsChannel?.addEventListener("message", (event) => {
      let newMessages = JSON.parse(event.data);
      setMessages((messages) => [...messages, ...newMessages]);
    });
  }, [wsChannel]);
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

const AddMessageForm = ({ wsChannel }) => {
  const [message, setMessage] = useState("");
  const [wsOpen, setWsOpen] = useState(false);
  const sendMessage = () => {
    if (!message) {
      return;
    }
    wsChannel.send(message);
    setMessage("");
  };

  useEffect(() => {
    wsChannel?.addEventListener("open", () => {
      setWsOpen(true);
    });
  }, [wsChannel]);

  return (
    <div>
      <textarea
        onChange={(e) => setMessage(e.currentTarget.value)}
        value={message}
      ></textarea>
      <button disabled={wsChannel === null || !wsOpen} onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};
export default ChatPage;
