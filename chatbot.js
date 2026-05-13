"use strict";

// Question bank — array of objects (HW2 requirement)
const questionBank = [
  {
    keywords: ["who", "mohammed", "about", "yourself"],
    answer: "Mohammed Ghayada is a first-year Artificial Intelligence student at the West University of Timișoara (UVT). He's passionate about programming and building web projects."
  },
  {
    keywords: ["skill", "know", "good at", "technology", "tech"],
    answer: "Mohammed's skills include: HTML5 & CSS3, JavaScript, Java (7/10), Git & GitHub, CSS Grid & Flexbox, and Figma basics."
  },
  {
    keywords: ["project", "work", "built", "made", "portfolio"],
    answer: "Mohammed's projects include: a Developer Portfolio (HTML/CSS/JS), a Bank System (Java), a Calculator (Java), and a Responsive Web Design project. See the Projects page for details!"
  },
  {
    keywords: ["contact", "reach", "email", "hire", "touch"],
    answer: "You can reach Mohammed at mohamad.ghayada04@e-uvt.ro or visit the Contact page to send a message."
  },
  {
    keywords: ["education", "study", "university", "uvt", "degree", "school"],
    answer: "Mohammed is in his first year of a BSc in Artificial Intelligence at the West University of Timișoara (UVT)."
  },
  {
    keywords: ["github", "repo", "code", "open source"],
    answer: "You can find Mohammed's work at github.com/mohamadghayada04."
  },
  {
    keywords: ["java"],
    answer: "Mohammed has built several Java projects including a Bank System and a Calculator application."
  },
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    answer: "Hello! 👋 Great to meet you. I'm Mohammed's portfolio assistant. Ask me about his skills, projects, or how to contact him!"
  },
  {
    keywords: ["thank", "thanks", "great", "awesome"],
    answer: "You're welcome! 😊 Anything else you'd like to know about Mohammed?"
  }
];

const fallbacks = [
  "I'm not sure about that. Try asking about Mohammed's skills, projects, education, or contact info!",
  "I don't have that info — try: 'What are your skills?' or 'Tell me about your projects'.",
  "That's outside my knowledge! Check the About or Projects pages for more details."
];

let fallbackIndex = 0;

function getAnswer(userInput) {
  const lower = userInput.toLowerCase();
  for (const item of questionBank) {
    if (item.keywords.some(kw => lower.includes(kw))) return item.answer;
  }
  return fallbacks[fallbackIndex++ % fallbacks.length];
}

const chatLog = document.getElementById("chat-log");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

function appendMessage(text, role) {
  const msg = document.createElement("div");
  msg.classList.add("chat-msg", role);
  msg.textContent = text;
  chatLog.appendChild(msg);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function appendThinking() {
  const msg = document.createElement("div");
  msg.classList.add("chat-msg", "bot", "thinking");
  msg.textContent = "Thinking…";
  msg.id = "thinking-indicator";
  chatLog.appendChild(msg);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function removeThinking() {
  const el = document.getElementById("thinking-indicator");
  if (el) el.remove();
}

function handleMessage(text) {
  if (!text.trim()) return;
  appendMessage(text, "user");
  chatInput.value = "";
  appendThinking();
  setTimeout(() => {
    removeThinking();
    appendMessage(getAnswer(text), "bot");
  }, 600);
}

chatForm.addEventListener("submit", function(e) {
  e.preventDefault();
  handleMessage(chatInput.value.trim());
});

document.querySelectorAll(".suggestion-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    handleMessage(this.getAttribute("data-q"));
  });
});
