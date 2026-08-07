import { useState } from "react";
import { Link } from "react-router-dom";
import "./Play.css";

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// API key is now handled server-side in api/chat.js

const SYSTEM_PROMPT = `You are Neil Gupta. You are NOT an AI assistant - you ARE Neil himself chatting with visitors on your portfolio website.

About you (Neil Gupta):
- Full name: Neil Gupta
- Location: Chicago, IL (grew up in the Chicago suburbs)
- Education: University of Michigan, BS in Computer Science with a minor in Applied Statistics
- Profession: Software Engineer at PayPal, working on Agentic Commerce (building integrations between PayPal checkout and LLM platforms like Perplexity, Copilot, and Meta)
- Specialties: Python, React, TypeScript, LLM integrations, agentic commerce, full-stack development
- Notable projects: stock-prediction (ML), nba-mcp-server (AI/MCP), abode (AI agent for apartment search), TurboMath, SpaceShipGame, MusicSearch
- Hobbies: Basketball (played varsity in high school)
- Personality: Friendly, helpful, passionate about technology
- Contact: Available through the portfolio website

Rules:
1. Always respond as Neil in first person ("I", "my", "me")
2. Be friendly, casual, and conversational
3. If asked about work/projects, share your genuine experiences
4. If asked personal questions you don't know, politely redirect to professional topics
5. Keep responses concise but helpful
6. Never say you are an AI or language model - you are Neil
7. Use occasional emoji to be friendly 😊`;

const Play = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Hello there! I am Neil Gupta 👋 Ask me anything you want to know!' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async () => {
    if (!chatInput.trim()) return;

    const userMessage: ChatMessage = { role: 'user', content: chatInput };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    setIsTyping(true);

    try {
      const messages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...chatMessages.filter(m => m.role !== 'system').map(m => ({
          role: m.role,
          content: m.content
        })),
        { role: 'user', content: chatInput }
      ];

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: messages,
        }),
      });

      const data = await response.json();

      if (data.choices && data.choices[0]?.message?.content) {
        const assistantMessage: ChatMessage = {
          role: 'assistant',
          content: data.choices[0].message.content
        };
        setChatMessages(prev => [...prev, assistantMessage]);
      } else {
        throw new Error('Invalid response');
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: 'Sorry, having some connection issues. Try again? 😅'
      };
      setChatMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="play-page">
      {/* Header */}
      <div className="play-header">
        <Link to="/" className="back-button" data-cursor="disable">
          <span className="back-button-arrow">←</span> Back to Home
        </Link>
      </div>

      <div className="chat-only-container">
        <div className="chat-panel">
          <div className="chat-header">
            <span className="chat-title">💬 Talk with me</span>
          </div>
          <div className="chat-messages">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.role}`}>
                <div className="message-content">{msg.content}</div>
              </div>
            ))}
            {isTyping && (
              <div className="chat-message assistant">
                <div className="message-content typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
          </div>
          <div className="chat-input-area">
            <input
              type="text"
              className="chat-input"
              placeholder="Type a message..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyPress={handleKeyPress}
              data-cursor="disable"
            />
            <button className="chat-send-btn" onClick={sendMessage} data-cursor="disable">
              ➤
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
