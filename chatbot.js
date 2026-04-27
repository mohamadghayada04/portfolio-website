const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

const responses = [
    { question: "hello", answer: "Hi there!" },
    { question: "who are you", answer: "I am your chatbot." },
    { question: "what do you do", answer: "I help answer questions." }
];

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const userText = input.value.toLowerCase();

    const userMessage = document.createElement("p");
    userMessage.textContent = "You: " + userText;
    userMessage.classList.add("user");
    chatBox.appendChild(userMessage);

    let reply = "I don't understand.";

    responses.forEach(item => {
        if (userText.includes(item.question)) {
            reply = item.answer;
        }
    });

    const botMessage = document.createElement("p");
    botMessage.textContent = "Bot: " + reply;
    botMessage.classList.add("bot");
    chatBox.appendChild(botMessage);

    input.value = "";
});
