"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
  id: string;
}

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STARTER_QUESTIONS = [
  "Why should I hire you?",
  "Walk me through InsightStream",
  "Are you available now?",
  "What's your strongest skill?",
];

const TypingIndicator = () => (
  <div className="flex items-end gap-1 px-3 py-3">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-text-muted"
        style={{
          animation: `typing-dot 1.4s ${i * 0.16}s infinite ease-in-out`,
        }}
      />
    ))}
  </div>
);

export default function AIChatModal({ isOpen, onClose }: AIChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [streamingContent, setStreamingContent] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingContent, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isLoading) return;

      const userMessage: Message = {
        role: "user",
        content: text.trim(),
        id: Date.now().toString(),
      };

      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);
      setInput("");
      setIsLoading(true);
      setStreamingContent("");

      abortRef.current = new AbortController();

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: updatedMessages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
          }),
          signal: abortRef.current.signal,
        });

        if (!response.ok) throw new Error("API error");
        if (!response.body) throw new Error("No response body");

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let accumulated = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const data = line.slice(6);
              if (data === "[DONE]") break;
              try {
                const parsed = JSON.parse(data);
                if (parsed.text) {
                  accumulated += parsed.text;
                  setStreamingContent(accumulated);
                }
              } catch {
                // ignore parse errors
              }
            }
          }
        }

        const assistantMessage: Message = {
          role: "assistant",
          content: accumulated,
          id: (Date.now() + 1).toString(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
        setStreamingContent("");
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        const errorMsg: Message = {
          role: "assistant",
          content:
            "Sorry, I ran into a connection issue. Please try again.",
          id: (Date.now() + 1).toString(),
        };
        setMessages((prev) => [...prev, errorMsg]);
        setStreamingContent("");
      } finally {
        setIsLoading(false);
      }
    },
    [messages, isLoading]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const hasMessages = messages.length > 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div
              className="glass-panel w-full max-w-[480px] h-[600px] rounded-2xl flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 border border-accent/20 flex items-center justify-center">
                    <span className="text-xs font-semibold text-accent">JS</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary leading-none mb-1">
                      AI Jasveen
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
                      </span>
                      <span className="text-[11px] text-accent">Online</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/[0.1] flex items-center justify-center transition-colors text-text-secondary hover:text-text-primary"
                  aria-label="Close chat"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 1l12 12M13 1L1 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto px-4 py-4 no-scrollbar">
                {/* Welcome / Starters */}
                {!hasMessages && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col items-center text-center pt-6 pb-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/15 flex items-center justify-center mb-4">
                      <span className="text-lg font-semibold text-accent">JS</span>
                    </div>
                    <h3 className="text-base font-semibold text-text-primary mb-1.5">
                      Hey, I&apos;m AI Jasveen
                    </h3>
                    <p className="text-sm text-text-secondary max-w-[280px] leading-relaxed mb-6">
                      Ask me anything about Jasveen&apos;s experience, projects,
                      or availability.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {STARTER_QUESTIONS.map((q) => (
                        <button
                          key={q}
                          onClick={() => sendMessage(q)}
                          className="text-xs px-3 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-text-secondary hover:text-text-primary hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Message Bubbles */}
                <div className="flex flex-col gap-3">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {msg.role === "assistant" && (
                        <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/15 flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                          <span className="text-[9px] font-semibold text-accent">JS</span>
                        </div>
                      )}
                      <div
                        className={
                          msg.role === "user"
                            ? "chat-bubble-user"
                            : "chat-bubble-ai"
                        }
                      >
                        {msg.content}
                      </div>
                    </motion.div>
                  ))}

                  {/* Streaming message */}
                  {streamingContent && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/15 flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                        <span className="text-[9px] font-semibold text-accent">JS</span>
                      </div>
                      <div className="chat-bubble-ai">
                        {streamingContent}
                        <span className="inline-block w-0.5 h-3.5 bg-accent/60 ml-0.5 align-middle animate-pulse" />
                      </div>
                    </motion.div>
                  )}

                  {/* Typing indicator */}
                  {isLoading && !streamingContent && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/15 flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                        <span className="text-[9px] font-semibold text-accent">JS</span>
                      </div>
                      <div className="chat-bubble-ai">
                        <TypingIndicator />
                      </div>
                    </motion.div>
                  )}
                </div>

                <div ref={messagesEndRef} />
              </div>

              {/* Input Bar */}
              <div className="px-4 py-3 border-t border-white/[0.06]">
                <form onSubmit={handleSubmit} className="flex gap-2 items-end">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => {
                      setInput(e.target.value);
                      e.target.style.height = "auto";
                      e.target.style.height =
                        Math.min(e.target.scrollHeight, 120) + "px";
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about experience, projects, availability..."
                    rows={1}
                    disabled={isLoading}
                    className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-text-primary placeholder-text-muted resize-none outline-none focus:border-accent/30 transition-colors duration-200 no-scrollbar disabled:opacity-50"
                    style={{ maxHeight: "120px", overflowY: "auto" }}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="w-10 h-10 rounded-xl bg-accent hover:bg-accent-dim disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200 flex-shrink-0 hover:scale-105 active:scale-95"
                    aria-label="Send message"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-background"
                    >
                      <path
                        d="M14 2L7 9M14 2l-4 12-3-5-5-3 12-4z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </form>
                <p className="text-center text-[11px] text-text-muted mt-2">
                  Powered by Claude · Press Enter to send
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
