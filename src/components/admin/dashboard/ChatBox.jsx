"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

// Import the chat group icon
import ChatGroupIcon from "@assets/img/icon/chat-group.png";
import { IoChatbubblesOutline } from "react-icons/io5";

export default function AdminChatBox() {
  const [message, setMessage] = useState("");
  const [activeChat, setActiveChat] = useState(null);
  const messagesEndRef = useRef(null);

  const [chats] = useState([
    {
      id: 0,
      name: "General Support",
      description: "General inquiries and support",
      unreadCount: 2,
      lastMessageTime: "14:06",
      avatar: <IoChatbubblesOutline />,
      messages: [
        {
          id: 1,
          sender: "Admin Support",
          avatar: "A",
          content: "Welcome to the admin support chat! I'm here to help you with:",
          timestamp: "14:06",
          isUser: false,
          bulletPoints: [
            "System administration tasks",
            "User management queries",
            "Technical support issues",
            "Dashboard navigation help",
            "Any other admin-related questions"
          ],
          ending: "Feel free to ask me anything! 😊"
        }
      ]
    },
    {
      id: 1,
      name: "Client Support",
      description: "Client-related inquiries",
      unreadCount: 5,
      lastMessageTime: "13:45",
      avatar: "👥",
      messages: [
        {
          id: 1,
          sender: "Sarah (Client Manager)",
          avatar: "S",
          content: "Hi! I've received several client inquiries about their company registration status. Can you help me check the current progress?",
          timestamp: "13:45",
          isUser: false
        },
        {
          id: 2,
          sender: "You",
          avatar: "A",
          content: "Sure Sarah! I can help you check the client statuses. Which clients are you referring to?",
          timestamp: "13:47",
          isUser: true
        },
        {
          id: 3,
          sender: "Sarah (Client Manager)",
          avatar: "S",
          content: "We have 3 clients waiting for name approval: TechCorp Inc, Innovate Solutions, and Digital Ventures. Can you expedite their cases?",
          timestamp: "13:48",
          isUser: false
        }
      ]
    },
    {
      id: 2,
      name: "Legal Team",
      description: "Legal consultation and document review",
      unreadCount: 0,
      lastMessageTime: "12:30",
      avatar: "⚖️",
      messages: [
        {
          id: 1,
          sender: "Michael (Legal Advisor)",
          avatar: "M",
          content: "Good afternoon! I've reviewed the legal documents for the pending cases. All documentation looks compliant. Is there anything specific you'd like me to prioritize?",
          timestamp: "12:30",
          isUser: false
        },
        {
          id: 2,
          sender: "You",
          avatar: "A",
          content: "Thanks Michael! Can you please review the NDA templates for the new client onboarding process?",
          timestamp: "12:35",
          isUser: true
        },
        {
          id: 3,
          sender: "Michael (Legal Advisor)",
          avatar: "M",
          content: "I'll review the NDA templates and provide recommendations by end of day. I'll also check for any compliance updates needed.",
          timestamp: "12:36",
          isUser: false
        }
      ]
    },
    {
      id: 3,
      name: "Technical Support",
      description: "System and technical assistance",
      unreadCount: 1,
      lastMessageTime: "11:15",
      avatar: "🔧",
      messages: [
        {
          id: 1,
          sender: "Alex (Tech Support)",
          avatar: "A",
          content: "Hello! I noticed some performance issues with the admin dashboard. The case loading seems slower than usual. Are you experiencing any issues?",
          timestamp: "11:15",
          isUser: false
        },
        {
          id: 2,
          sender: "You",
          avatar: "A",
          content: "Yes, I've noticed the dashboard is loading slowly. The case details page takes about 10-15 seconds to load.",
          timestamp: "11:20",
          isUser: true
        },
        {
          id: 3,
          sender: "Alex (Tech Support)",
          avatar: "A",
          content: "I'll investigate this immediately. It might be related to the recent database updates. I'll run some diagnostics and get back to you within an hour.",
          timestamp: "11:22",
          isUser: false
        }
      ]
    },
    {
      id: 4,
      name: "Finance Team",
      description: "Payment and billing inquiries",
      unreadCount: 0,
      lastMessageTime: "10:00",
      avatar: "💰",
      messages: [
        {
          id: 1,
          sender: "Lisa (Finance Manager)",
          avatar: "L",
          content: "Hi! I've processed all pending payments for this week. The revenue report shows a 15% increase compared to last month. Great work!",
          timestamp: "10:00",
          isUser: false
        },
        {
          id: 2,
          sender: "You",
          avatar: "A",
          content: "Excellent! Can you send me the detailed financial report for the board meeting next week?",
          timestamp: "10:05",
          isUser: true
        },
        {
          id: 3,
          sender: "Lisa (Finance Manager)",
          avatar: "L",
          content: "I'll prepare the comprehensive financial report and send it to you by Friday. It will include all metrics and projections.",
          timestamp: "10:06",
          isUser: false
        }
      ]
    }
  ]);

  const currentChat = activeChat !== null ? chats[activeChat] : null;
  const [messages, setMessages] = useState([]);

  // Auto-scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleChatClick = (chatId) => {
    setActiveChat(chatId);
    setMessages(chats[chatId].messages);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "You",
        avatar: "A",
        content: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isUser: true
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  return (
    <div className="d-flex" style={{ height: "90vh", backgroundColor: "#fff", padding: '30px' }}>
      {/* Left Sidebar - Chat List */}
      <div
        className="d-flex flex-column p-2 py-3"
        style={{
          width: "25%",
          backgroundColor: "#E8F5E8",
          borderRight: "1px solid #dee2e6",
          borderRadius: "16px",
          overflowY: "auto"
        }}
      >
 
        {/* Chat Items */}
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="d-flex align-items-center p-2 mb-2 rounded-4"
            style={{
              backgroundColor: activeChat === chat.id ? "#EDFF8B" : "transparent",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onClick={() => handleChatClick(chat.id)}
          >
            <div style={{ width: '50px' }}>
              <div
                className="d-flex align-items-center justify-content-center me-2"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#FCFCFC",
                  borderRadius: "50%",
                  color: "#3D3D3D",
                  fontSize: "18px",
                  fontWeight: "bold"
                }}
              >
                {chat.avatar}
              </div>
            </div>
            <div className="flex-grow-1">
              <div style={{ color: "#3D3D3D", fontWeight: '600', fontSize: '16px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {chat.name}
              </div>
              <div style={{ color: "#3D3D3D", fontWeight: '600', fontSize: '13px', lineHeight: '1.3' }}>
                {chat.description}
              </div>
            </div>
            <div className="d-flex flex-column align-items-end" style={{ width: '50px' }}>
              {chat.unreadCount > 0 && (
                <span
                  className="badge rounded-pill mb-1"
                  style={{ backgroundColor: "#007C36", fontSize: "10px", fontWeight: '400' }}
                >
                  {chat.unreadCount}
                </span>
              )}
              <small style={{ fontSize: '12px', color: '#6c757d' }}>{chat.lastMessageTime}</small>
            </div>
          </div>
        ))}
      </div>

      {/* Right Panel - Chat Conversation */}
      <div className="flex-grow-1 d-flex flex-column" style={{ width: '73%', marginLeft: '20px', borderRadius: '16px', border: '1px solid #3D3D3D1A' }}>
        {currentChat ? (
          <>
            {/* Chat Header */}
            <div
              className="d-flex align-items-center p-3"
              style={{
                backgroundColor: "#f8f9fa",
                borderBottom: "1px solid #dee2e6",
                borderRadius: "16px 16px 0 0"
              }}
            >
              <h5 className="mb-0 fw-bold" style={{ color: "#007C36" }}>
                {currentChat.name}
              </h5>
            </div>

            {/* Messages Area */}
            <div
              className="flex-grow-1 p-3"
              style={{
                overflowY: "auto",
                backgroundColor: "white"
              }}
            >
              {messages.map((msg) => (
                <div key={msg.id} className="mb-4">
                  {msg.isUser ? (
                    /* User Message - Right Side */
                    <div className="d-flex justify-content-end">
                      <div className="d-flex flex-column align-items-end" style={{ maxWidth: "70%" }}>
                        <div className="d-flex align-items-center mb-1">
                          <small className="text-muted me-2">{msg.timestamp}</small>
                          <span className="fw-bold" style={{ color: "#007C36" }}>
                            {msg.sender}
                          </span>
                        </div>
                        <div
                          className="p-3 rounded"
                          style={{
                            backgroundColor: "#007C36",
                            color: "white",
                            border: "none"
                          }}
                        >
                          <div>{msg.content}</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Other Messages - Left Side */
                    <div className="d-flex align-items-start">
                      <div
                        className="d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#007C36",
                          borderRadius: "50%",
                          color: "white",
                          fontSize: "16px",
                          fontWeight: "bold",
                          flexShrink: 0
                        }}
                      >
                        {msg.avatar}
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex align-items-center mb-1">
                          <span className="fw-bold me-2" style={{ color: "#007C36" }}>
                            {msg.sender}
                          </span>
                          <small className="text-muted">{msg.timestamp}</small>
                        </div>
                        <div
                          className="p-3 rounded-3"
                          style={{
                            backgroundColor: "#f8f9fa",
                            color: "#333",
                            maxWidth: "70%",
                            border: "1px solid #dee2e6"
                          }}
                        >
                          <div className="mb-2">{msg.content}</div>
                          {msg.bulletPoints && (
                            <ul className="mb-2 ps-3">
                              {msg.bulletPoints.map((point, index) => (
                                <li key={index} className="mb-1">{point}</li>
                              ))}
                            </ul>
                          )}
                          {msg.ending && <div>{msg.ending}</div>}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {/* Auto-scroll target */}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div
              className="p-3"
              style={{
                backgroundColor: "#fff",
                borderTop: "none",
                borderRadius: "0 0 16px 16px"
              }}
            >
              <form onSubmit={handleSendMessage} className="d-flex align-items-center">
                {/* Message Input Field */}
                <div className="position-relative me-3" style={{ flex: 1 }}>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write a message.."
                    className="form-control"
                    style={{
                      borderRadius: "8px",
                      border: "1px solid #dee2e6",
                      padding: "12px 20px 12px 50px",
                      fontSize: "14px",
                      backgroundColor: "white",
                      color: "#333"
                    }}
                  />
                  <div
                    className="position-absolute"
                    style={{
                      left: "15px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#6c757d",
                      pointerEvents: "none"
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z" />
                    </svg>
                  </div>
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  className="btn d-flex align-items-center justify-content-center"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#007C36",
                    borderRadius: "50%",
                    border: "none",
                    color: "white",
                    flexShrink: 0
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </form>
            </div>
          </>
        ) : (
          /* Empty State - No Chat Selected */
          <div
            className="d-flex flex-column align-items-center justify-content-center flex-grow-1"
            style={{ backgroundColor: "white", borderRadius: "16px" }}
          >
            {/* Chat Group Icon */}
            <div className="mb-4">
              <Image
                src={ChatGroupIcon}
                alt="Chat Group"
                width={'100%'}
                height={150}
              />
            </div>

            {/* Placeholder Text */}
            <h4
              className="text-center mb-0"
              style={{
                color: "#6c757d",
                fontWeight: "500",
                fontSize: "18px"
              }}
            >
              Select a support channel to start messaging
            </h4>
          </div>
        )}
      </div>
    </div>
  );
}
