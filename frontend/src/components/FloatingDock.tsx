import React, { useState } from"react";
import {
 MessageSquare,
 X,
 Send,
 Bot,
 Phone,
} from"lucide-react";
import { WhatsAppIcon } from"./WhatsAppIcon";
import { trackEvent } from"../lib/analytics";
import { waHref } from"../lib/whatsapp";

interface ChatMessage {
 sender:"bot" |"user";
 text: string;
 time: string;
}

const DEFAULT_MESSAGES: ChatMessage[] = [
 {
 sender:"bot",
 text:"Welcome to Revora! Sell your old/dead phone or book a 45-minute doorstep repair. How can we help you today?",
 time:"Just now",
 },
];

const PRESET_QUESTIONS = [
"How does dead phone cash pickup work?",
"How long does screen replacement take?",
"Is my personal data safe if the phone is dead?",
"What is the 90-day warranty coverage?",
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
 sender:"user",
 text: textToSend,
 time:"Just now",
 };

 setMessages((prev) => [...prev, userMsg]);
 if (!customText) setChatInput("");
 setIsTyping(true);

 setTimeout(() => {
 let botReply =
"Our lab technicians are reviewing your inquiry. You can also call or WhatsApp us directly at +91 8591770877 for instant pricing!";
 const lower = textToSend.toLowerCase();
 if (lower.includes("iphone") || lower.includes("dead") || lower.includes("price") || lower.includes("cash") || lower.includes("sell")) {
 botReply =
"We offer the highest market payout for dead iPhones and smartphones! Call or WhatsApp us at +91 8591770877 for your payout via UPI quote and free doorstep pickup.";
 } else if (lower.includes("screen") || lower.includes("repair") || lower.includes("time") || lower.includes("doorstep")) {
 botReply =
"Most OLED screen replacements and battery swaps are completed in 45 minutes right at your doorstep. Plus enjoy a free glass protector and cover!";
 } else if (lower.includes("data") || lower.includes("safe") || lower.includes("wipe")) {
 botReply =
"All trade-in devices undergo certified NIST 800-88 sanitized cryptographic wiping. Your personal photos and data remain 100% secure.";
 }

 setMessages((prev) => [
 ...prev,
 {
 sender:"bot",
 text: botReply,
 time:"Just now",
 },
 ]);
 setIsTyping(false);
 }, 600);
 };

 return (
 <>
 {/* Single Consolidated Floating Action Widget docked unobtrusively on Bottom-Right */}
 <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-30 flex items-center gap-1.5 p-1.5 rounded-full bg-white/95 backdrop-blur-md border border-line shadow-xl">
 {/* Quick Phone Call Button */}
 <a
 href="tel:8591770877"
 onClick={() => trackEvent("phone_call_click", { source:"floating_dock" })}
 title="Call Us: +91 8591770877"
 className="grid h-9 w-9 place-items-center rounded-full bg-background hover:bg-brand-tint text-brand transition border border-line cursor-pointer"
 >
 <Phone className="h-4 w-4 stroke-[2.4]" />
 </a>

 {/* Quick WhatsApp Button */}
 <a
 href={waHref("PAGE_CONTEXT", { pageTitle: "Site-wide floating dock" })}
 target="_blank"
 rel="noopener noreferrer"
 onClick={() => trackEvent("whatsapp_click", { source:"floating_dock" })}
 title="WhatsApp Us: +91 8591770877"
 className="grid h-9 w-9 place-items-center rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition border border-emerald-200 cursor-pointer"
 >
 <WhatsAppIcon className="h-4 w-4 fill-emerald-700" />
 </a>

 <div className="h-4 w-[1px] bg-line mx-0.5" />

 {/* AI Assistant Chat Trigger Pill */}
 <button
 type="button"
 onClick={() => setIsChatOpen(!isChatOpen)}
 className="flex items-center gap-1.5 rounded-full bg-brand hover:bg-brand-ink px-3.5 py-2 text-white font-bold text-xs shadow-sm transition cursor-pointer"
 >
 <MessageSquare className="h-3.5 w-3.5 text-white" />
 <span>Ask us</span>
 </button>
 </div>

 {/* Floating AI Support Drawer */}
 {isChatOpen && (
 <div className="fixed bottom-18 sm:bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 rounded-3xl bg-white border border-line p-4 sm:p-5 shadow-2xl text-ink animate-in slide-in-from-bottom-5 duration-200">
 {/* Chat Header */}
 <div className="flex items-center justify-between border-b border-line pb-3">
 <div className="flex items-center gap-2.5">
 <div className="grid h-8 w-8 place-items-center rounded-xl bg-brand-tint text-brand border border-brand/30">
 <Bot className="h-4 w-4 text-brand" />
 </div>
 <div>
 <h4 className="text-sm font-bold text-ink">
 Revora AI Assistant
 </h4>
 <div className="flex items-center gap-1.5 text-[10px] text-brand-ink font-semibold">
 <span className="h-1.5 w-1.5 rounded-full bg-brand" />
 <span>Online · Instant Answers</span>
 </div>
 </div>
 </div>
 <button
 onClick={() => setIsChatOpen(false)}
 aria-label="Close AI support drawer"
 className="p-1 rounded-full bg-background hover:bg-line text-muted transition cursor-pointer border border-line"
 >
 <X className="h-4 w-4" />
 </button>
 </div>

 {/* Messages Area */}
 <div className="my-3 max-h-64 min-h-[150px] overflow-y-auto space-y-2.5 pr-1 text-xs">
 {messages.map((m, idx) => (
 <div
 key={idx}
 className={`flex gap-2 ${
 m.sender ==="user" ?"justify-end" :"justify-start"
 }`}
 >
 {m.sender ==="bot" && (
 <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-tint text-brand text-[10px] border border-brand/30">
 <Bot className="h-3.5 w-3.5 text-brand" />
 </div>
 )}
 <div
 className={`rounded-2xl px-3 py-2 max-w-[82%] leading-relaxed ${
 m.sender ==="user"
 ?"bg-brand text-white rounded-br-none"
 :"bg-background text-ink rounded-bl-none border border-line"
 }`}
 >
 {m.text}
 </div>
 </div>
 ))}
 {isTyping && (
 <div className="flex items-center gap-1 text-[11px] text-muted pl-8">
 <span>Revora is typing</span>
 <span className="">...</span>
 </div>
 )}
 </div>

 {/* Preset Prompts */}
 <div className="mb-3 flex flex-wrap gap-1">
 {PRESET_QUESTIONS.map((q, idx) => (
 <button
 key={idx}
 type="button"
 onClick={() => handleSendMessage(q)}
 className="rounded-lg bg-background hover:bg-brand-tint px-2.5 py-1 text-[10px] text-muted hover:text-brand-ink transition border border-line text-left cursor-pointer"
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
 className="flex-1 rounded-xl border border-line bg-white px-3 py-2 text-xs text-ink placeholder:text-slate-400 outline-none focus:border-brand"
 />
 <button
 type="submit"
 className="rounded-xl bg-brand hover:bg-brand-ink p-2 text-white transition cursor-pointer"
 >
 <Send className="h-4 w-4" />
 </button>
 </form>
 </div>
 )}
 </>
 );
}

