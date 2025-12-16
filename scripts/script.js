// ids ophalen
const fixedButton = document.getElementById("fixedButton");
const chatBox = document.getElementById("chatBox");
const closeChatButton = document.getElementById("closeChat");
const aiOpenChat = document.getElementById("aiButtonSecondary");
const aiCloseChat = document.getElementById("aiChatClose");
const aiChatBox = document.querySelector(".ai-chat-desktop");


// array voor foto's
const images = [
  "./images/fiets-1.png",
  "./images/fiets-2.png"
];

let currentIndex = 1

const mainImage = document.getElementById("mainImage")
const thumbs = document.querySelector(".thumbnails img")


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
    aiChatClose();
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

function selectImage(index) {
  currentIndex = index
  mainImage.src = images[index]
  updateActive()
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length
  selectImage(currentIndex)
}

function prevImage() {
  currentIndex = (currentIndex = 1 + images.length) % images.length
  selectImage(currentIndex)
}

function updateActive() {
  thumbs.forEach((img, i) => {
    img.classList.toggle("active", i === currentIndex)
  })
}