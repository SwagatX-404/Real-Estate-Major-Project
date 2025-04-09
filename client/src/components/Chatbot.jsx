import React, { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hello! How can I assist you?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/chatbot/chat", {
        message: input,
      });
      setMessages([...newMessages, { role: "bot", content: response.data.reply }]);
    } catch (error) {
      setMessages([...newMessages, { role: "bot", content: "Sorry, an error occurred." }]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 ">
      <AnimatePresence>
        {!isOpen ? (
          
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleChat}
            className="p-4 bg-white text-black bg-gradient-to-br  
                 rounded-full border border-white/40 
                 shadow-[inset_4px_4px_10px_rgba(0,0,0,0.7)]
                  hover:bg-secondary flex items-center justify-center 
                  hover:shadow-xl transition-all animate-bounce "
          >
            <MessageCircle size={24} />
          </motion.button>
          
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="w-80 bg-white/10 backdrop-blur-lg shadow-2xl rounded-xl flex flex-col border border-white/20"
          >
            <div className="bg-secondary/50 text-white p-3 flex justify-between items-center rounded-t-xl">
              <span className="text-lg font-semibold">🤖 Chat Assistant </span>
              <button onClick={toggleChat} className="text-white">
                <X size={20} />
              </button>
            </div>

            <div className="p-3 h-64 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: msg.role === "user" ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`p-2 max-w-xs rounded-lg shadow-md ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white ml-auto"
                      : "bg-gray-200"
                  }`}
                >
                  {msg.content}
                </motion.div>
              ))}
              {loading && <div className="text-sm text-gray-500">Thinking...</div>}
            </div>

            <div className="border-t flex items-center p-2 bg-gray-100 rounded-b-xl">
              <input
                type="text"
                className="flex-grow p-2 border rounded-l-lg focus:outline-none bg-white/30 placeholder-gray-300"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="p-2 bg-secondary text-white rounded-lg hover:bg-violet-700 transition-all"
              >
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
