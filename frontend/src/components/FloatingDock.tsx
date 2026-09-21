import React, { useState } from "react";
import {
  MessageSquare,
  IndianRupee,
  Wrench,
  Zap,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  ArrowUp,
  PhoneCall,
  Phone,
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface ChatMessage {
  sender: "bot" | "user";
  text: string;
  time: string;
}

const DEFAULT_MESSAGES: ChatMessage[] = [
  {
    sender: "bot",
    text: "👋 Hey there! Welcome to Sagar Tech. Looking to sell a dead phone, book a 45-min repair, or chat with us directly at 8591770877?",
    time: "Just now",
  },
];

const PRESET_QUESTIONS = [
  "How does the dead phone cash pickup work?",
  "How long does screen replacement take?",
  "Is my personal data safe if the phone is dead?",
  "Where do you ship prepaid boxes?",
];

interface FloatingDockProps {
  onOpenRepairModal?: () => void;
}

export function FloatingDock({ onOpenRepairModal }: FloatingDockProps = {}) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(DEFAULT_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (customText?: string) => {
    const textToSend = customText || chatInput;
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      sender: "user",
      text: textToSend,
      time: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!customText) setChatInput("");
    setIsTyping(true);

    setTimeout(() => {
      let botReply =
        "Our cleanroom technicians are reviewing your inquiry. You can also call or WhatsApp us directly at 8591770877 for instant pricing!";
      const lower = textToSend.toLowerCase();
      if (lower.includes("iphone") || lower.includes("dead") || lower.includes("price") || lower.includes("how much")) {
        botReply =
          "We offer the highest market payout for dead iPhones and smartphones! You can call or WhatsApp us at 8591770877 for your personalized cash quote and free doorstep pickup.";
      } else if (lower.includes("screen") || lower.includes("repair") || lower.includes("time")) {
        botReply =
          "Most OLED replacements and battery swaps are completed in 45 minutes in our certified cleanroom. Book online or call 8591770877.";
      } else if (lower.includes("data") || lower.includes("safe")) {
        botReply =
          "All devices undergo certified NIST 800-88 sanitized wiping or cryptographically protected repairs under live CCTV cameras.";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: botReply,
          time: "Just now",
        },
      ]);
      setIsTyping(false);
    }, 700);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating Quick Call & WhatsApp Badges matching user design */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col gap-3 items-end">
        {/* Call Us Button */}
        <a
          href="tel:8591770877"
          title="Call Us: 8591770877"
          className="group flex items-center justify-between gap-3 min-w-[140px] sm:min-w-[155px] rounded-full bg-[#489535] hover:bg-[#3d832c] text-white pl-5 pr-1.5 py-1.5 shadow-[0_8px_25px_rgba(72,149,53,0.5)] border border-white/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span className="font-display text-sm font-bold tracking-tight text-white drop-shadow-sm">
            Call Us
          </span>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20 transition-transform duration-200 group-hover:scale-110">
            <Phone className="h-4 w-4 text-white fill-none stroke-[2.4]" />
          </span>
        </a>

        {/* WhatsApp Us Button */}
        <a
          href="https://wa.me/918591770877?text=Hi%20Sagar%20Tech%2C%20I%20want%20to%20sell%20or%20repair%20my%20phone."
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp Us: 8591770877"
          className="group flex items-center justify-between gap-3 min-w-[140px] sm:min-w-[155px] rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white pl-5 pr-1.5 py-1.5 shadow-[0_8px_25px_rgba(37,211,102,0.5)] border border-white/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span className="font-display text-sm font-bold tracking-tight text-white drop-shadow-sm">
            WhatsApp Us
          </span>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20 transition-transform duration-200 group-hover:scale-110">
            <WhatsAppIcon className="h-4 w-4 fill-white" />
          </span>
        </a>
      </div>

      {/* Floating Bottom Navigation Pill */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 rounded-full bg-ink/90 p-1.5 backdrop-blur-xl border border-white/20 shadow-[0_10px_35px_rgba(0,0,0,0.6)] font-label text-xs">
        <button
          type="button"
          onClick={() => scrollToSection("sell-calculator")}
          className="flex items-center gap-1.5 rounded-full px-3 py-2 text-white/80 hover:bg-white/15 hover:text-white transition cursor-pointer"
        >
          <IndianRupee className="h-3.5 w-3.5 text-gold" />
          <span className="hidden sm:inline">Sell Dead Phone</span>
        </button>

        <button
          type="button"
          onClick={() => {
            if (onOpenRepairModal) {
              onOpenRepairModal();
            } else {
              scrollToSection("quote");
            }
          }}
          className="flex items-center gap-1.5 rounded-full px-3 py-2 text-white/80 hover:bg-white/15 hover:text-white transition cursor-pointer"
        >
          <Wrench className="h-3.5 w-3.5 text-accent" />
          <span className="hidden sm:inline">Book Repair</span>
        </button>

        <button
          type="button"
          onClick={() => scrollToSection("diagnostic-triage")}
          className="flex items-center gap-1.5 rounded-full px-3 py-2 text-white/80 hover:bg-white/15 hover:text-white transition cursor-pointer"
        >
          <Zap className="h-3.5 w-3.5 text-emerald-400" />
          <span className="hidden sm:inline">AI Triage</span>
        </button>

        <div className="h-4 w-[1px] bg-white/20 mx-1 hidden sm:block" />

        {/* AI Assistant Chat Trigger */}
        <button
          type="button"
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="flex items-center gap-1.5 rounded-full bg-brand px-3.5 py-2 text-white font-bold hover:brightness-110 shadow-md shadow-brand/30 transition cursor-pointer"
        >
          <MessageSquare className="h-3.5 w-3.5" />
          <span>Ask AI</span>
        </button>
      </div>

      {/* Floating Chat Modal */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-5 z-50 w-full max-w-sm rounded-3xl bg-gradient-to-b from-ink via-zinc-950 to-black p-5 border border-white/20 shadow-2xl text-white animate-in slide-in-from-bottom-5 duration-200">
          {/* Chat Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="grid h-8 w-8 place-items-center rounded-xl bg-brand text-white">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold">
                  Sagar Tech AI Support
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-label">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 live-pulse" />
                  <span>Online · Instant Answers</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="my-3 max-h-72 min-h-[160px] overflow-y-auto space-y-2.5 pr-1 font-display text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2 ${
                  m.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {m.sender === "bot" && (
                  <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand/30 text-brand text-[10px]">
                    🤖
                  </div>
                )}
                <div
                  className={`rounded-2xl px-3.5 py-2 max-w-[80%] leading-relaxed ${
                    m.sender === "user"
                      ? "bg-brand text-white rounded-br-none"
                      : "bg-white/10 text-white/90 rounded-bl-none border border-white/10"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-1 text-[11px] text-white/50 pl-8">
                <span>ReviveBot is typing</span>
                <span className="live-pulse">...</span>
              </div>
            )}
          </div>

          {/* Preset Prompts */}
          <div className="mb-3 flex flex-wrap gap-1.5">
            {PRESET_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(q)}
                className="rounded-lg bg-white/5 hover:bg-white/15 px-2.5 py-1 text-[10px] text-white/70 hover:text-white transition border border-white/10 text-left font-display cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Chat Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask anything about phones or repairs…"
              className="flex-1 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs text-white placeholder:text-white/40 outline-none focus:border-brand font-display"
            />
            <button
              type="submit"
              className="rounded-xl bg-brand p-2 text-white hover:brightness-110 transition cursor-pointer"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
