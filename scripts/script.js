// ids ophalen
const fixedButton = document.getElementById("fixedButton");
const chatBox = document.getElementById("chatBox");
const closeChatButton = document.getElementById("closeChat");
const aiOpenChat = document.getElementById("aiButtonSecondary");
const aiCloseChat = document.getElementById("aiChatClose");
const aiChatBox = document.querySelector(".ai-chat-desktop");


const filterButton = document.getElementById("filterenButton");
const filterenSection = document.getElementById("filterSection");

fixedButton.addEventListener("click", openChat);
closeChatButton.addEventListener("click", closeChat);

aiOpenChat.addEventListener("click", aiChatOpen);
aiCloseChat.addEventListener("click", aiChatClose);

filterButton.addEventListener("click", toggleFilter);

document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
  if (event.code == "Escape") {
    closeChat();
    closeFilter();
  }
}

function aiChatOpen() {
  aiChatBox.classList.add("desktop-visible-chat");
}

function aiChatClose() {
  aiChatBox.classList.remove("desktop-visible-chat");
}

function openChat() {
  chatBox.classList.add("is-open");
  fixedButton.classList.add("is-open");
}

function closeChat() {
  chatBox.classList.remove("is-open");
  fixedButton.classList.remove("is-open");
}

function toggleFilter() {
  filterenSection.classList.toggle("is-open");
}