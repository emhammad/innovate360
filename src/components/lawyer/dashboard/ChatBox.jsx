"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

// Import the chat group icon
import ChatGroupIcon from "@assets/img/icon/chat-group.png";
import { IoChatbubblesOutline } from "react-icons/io5";


export default function ChatBox() {
  const [message, setMessage] = useState("");
  const [activeChat, setActiveChat] = useState(null);
  const messagesEndRef = useRef(null);

  const [chats] = useState([
    {
      id: 0,
      name: "General Chat",
      description: "For all your questions and requests",
      unreadCount: 1,
      lastMessageTime: "14:06",
      avatar: <IoChatbubblesOutline />,
      messages: [
        {
          id: 1,
          sender: "Daniel",
          avatar: "@",
          content: "Hi John! I'm Daniel, your personal manager here at EasyBiz. Feel free to ask me anything about running your company. I can help you with:",
          timestamp: "14:06",
          isUser: false,
          bulletPoints: [
            "Questions about filing taxes",
            "Payroll requests",
            "Questions about transactions or payment documents",
            "Legal consultations",
            "Anything else that comes to mind"
          ],
          ending: "I will do my best to find solutions and provide answers for you. 😊"
        }
      ]
    },
    {
      id: 1,
      name: "Tax Support",
      description: "Tax filing and compliance help",
      unreadCount: 3,
      lastMessageTime: "13:45",
      avatar: "📊",
      messages: [
        {
          id: 1,
          sender: "Sarah",
          avatar: "S",
          content: "Hello! I'm Sarah from the tax department. I noticed you have some pending tax documents that need to be filed by the end of this month.",
          timestamp: "13:45",
          isUser: false
        },
        {
          id: 2,
          sender: "You",
          avatar: "J",
          content: "Hi Sarah, thanks for reaching out. What documents do I need to prepare?",
          timestamp: "13:47",
          isUser: true
        },
        {
          id: 3,
          sender: "Sarah",
          avatar: "S",
          content: "You'll need your quarterly financial statements, expense receipts, and any new employee documentation. I can send you a checklist if you'd like.",
          timestamp: "13:48",
          isUser: false
        }
      ]
    },
    {
      id: 2,
      name: "Legal Consultation",
      description: "Legal advice and document review",
      unreadCount: 0,
      lastMessageTime: "12:30",
      avatar: "⚖️",
      messages: [
        {
          id: 1,
          sender: "Michael",
          avatar: "M",
          content: "Good afternoon! I'm Michael, your legal advisor. I've reviewed your contract templates and they look good. Is there anything specific you'd like me to clarify?",
          timestamp: "12:30",
          isUser: false
        },
        {
          id: 2,
          sender: "You",
          avatar: "J",
          content: "Thanks Michael! I was wondering about the liability clauses in our service agreements.",
          timestamp: "12:35",
          isUser: true
        },
        {
          id: 3,
          sender: "Michael",
          avatar: "M",
          content: "I'll send you a detailed explanation of the liability clauses and some recommendations for your specific industry.",
          timestamp: "12:36",
          isUser: false
        }
      ]
    },
    {
      id: 3,
      name: "Payroll Support",
      description: "Employee payroll and HR assistance",
      unreadCount: 2,
      lastMessageTime: "11:15",
      avatar: "👥",
      messages: [
        {
          id: 1,
          sender: "Lisa",
          avatar: "L",
          content: "Hi! I'm Lisa from HR. I wanted to remind you that employee timesheets are due by Friday for this pay period.",
          timestamp: "11:15",
          isUser: false
        },
        {
          id: 2,
          sender: "You",
          avatar: "J",
          content: "Got it, thanks for the reminder!",
          timestamp: "11:20",
          isUser: true
        },
        {
          id: 3,
          sender: "Lisa",
          avatar: "L",
          content: "Also, don't forget about the new employee onboarding for next week. I've prepared all the necessary documents.",
          timestamp: "11:22",
          isUser: false
        }
      ]
    },
    {
      id: 4,
      name: "Technical Support",
      description: "Software and system assistance",
      unreadCount: 0,
      lastMessageTime: "10:00",
      avatar: "🔧",
      messages: [
        {
          id: 1,
          sender: "Alex",
          avatar: "A",
          content: "Hello! I'm Alex from technical support. I see you've been having some issues with the accounting software. How can I help you today?",
          timestamp: "10:00",
          isUser: false
        },
        {
          id: 2,
          sender: "You",
          avatar: "J",
          content: "Hi Alex, the software keeps crashing when I try to generate reports.",
          timestamp: "10:05",
          isUser: true
        },
        {
          id: 3,
          sender: "Alex",
          avatar: "A",
          content: "I'll help you troubleshoot that. Can you tell me which browser you're using and what version of the software you have installed?",
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
        avatar: "J",
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
            <div className="flex-grow-1" >
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
                {/* Attachment Icon */}


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
                    backgroundColor: "#6c757d",
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
              Select a chat or task to start messaging
            </h4>
          </div>
        )}
      </div>
    </div>
  );
}
