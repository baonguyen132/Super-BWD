import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./Message.scss";

const AI_AVATAR = "https://img.icons8.com/color/96/robot.png";
const USER_AVATAR = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

const sampleMessages = [
  {
    sender: "ai",
    content: "Xin chào! Tôi là trợ lý AI của BAE. Bạn cần hỗ trợ gì?",
    timestamp: "2025-09-08T09:00:00",
  },
];

const fetchAIResponse = async (user_input) => {
  try {
    const response = await fetch(
      "https://lowsest-jackelyn-noneternally.ngrok-free.app/v1/rest-retrieve/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify({
          user_input,
          session_id: "1",
          user_id: "1",
        }),
      }
    );
    const data = await response.json();
    return data.response || "Xin lỗi, tôi chưa có câu trả lời phù hợp.";
  } catch (error) {
    return "Đã xảy ra lỗi, vui lòng thử lại sau.";
  }
};

const Message = () => {
  const [messages, setMessages] = useState(sampleMessages);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSendMessage = async () => {
    if (!message.trim() || loading) return;
    const newMsg = {
      sender: "user",
      content: message,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, newMsg]);
    setMessage("");
    setLoading(true);

    const aiReply = await fetchAIResponse(message);
    setMessages((prev) => [
      ...prev,
      {
        sender: "ai",
        content: aiReply,
        timestamp: new Date().toISOString(),
      },
    ]);
    setLoading(false);
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
              <div className="ai-bubble">
                {msg.sender === "ai" ? (
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {msg.content}
                  </ReactMarkdown>
                ) : (
                  msg.content
                )}
              </div>
              <div className="ai-time">
                {new Date(msg.timestamp).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="ai-message ai">
            <img src={AI_AVATAR} alt="AI" className="ai-message-avatar" />
            <div className="ai-message-content">
              <div className="ai-bubble">Đang trả lời...</div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="ai-input-area">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Nhập tin nhắn..."
          className="ai-message-input"
          disabled={loading}
          onKeyDown={async (e) => {
            if (e.key === "Enter") await handleSendMessage();
          }}
        />
        <button
          onClick={handleSendMessage}
          className="ai-send-btn"
          disabled={loading}
        >
          {loading ? "Đang gửi..." : "Gửi"}
        </button>
      </div>
    </div>
  );
};

export default Message;