import React, { useState, useRef, useEffect } from "react";
import "./Message.scss";

const AI_AVATAR = "https://img.icons8.com/color/96/robot.png";
const USER_AVATAR = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

const sampleMessages = [
  {
    sender: "ai",
    content: "Xin chào! Tôi là trợ lý AI của BAE. Bạn cần hỗ trợ gì?",
    timestamp: "2025-09-08T09:00:00",
  },
  {
    sender: "user",
    content: "Chào AI, tôi muốn biết cách đổi voucher.",
    timestamp: "2025-09-08T09:01:00",
  },
  {
    sender: "ai",
    content: "Bạn vào mục 'Voucher đã đổi' để xem và đổi voucher nhé!",
    timestamp: "2025-09-08T09:02:00",
  },
];

const Message = () => {
  const [messages, setMessages] = useState(sampleMessages);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    const newMsg = {
      sender: "user",
      content: message,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, newMsg]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          content: "Cảm ơn bạn đã nhắn tin! AI sẽ phản hồi sớm.",
          timestamp: new Date().toISOString(),
        },
      ]);
    }, 800);
    setMessage("");
  };

  return (
    <div className="ai-messenger-container">
      <div className="ai-chat-header">
        <img src={AI_AVATAR} alt="AI" className="ai-avatar" />
        <div>
          <h2>Trợ lý AI BAE</h2>
          <span className="ai-status">Online</span>
        </div>
      </div>
      <div className="ai-messages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`ai-message ${msg.sender === "user" ? "user" : "ai"}`}
          >
            <img
              src={msg.sender === "user" ? USER_AVATAR : AI_AVATAR}
              alt={msg.sender}
              className="ai-message-avatar"
            />
            <div className="ai-message-content">
              <div className="ai-bubble">{msg.content}</div>
              <div className="ai-time">
                {new Date(msg.timestamp).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="ai-input-area">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Nhập tin nhắn..."
          className="ai-message-input"
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button onClick={handleSendMessage} className="ai-send-btn">
          Gửi
        </button>
      </div>
    </div>
  );
};

export default Message;