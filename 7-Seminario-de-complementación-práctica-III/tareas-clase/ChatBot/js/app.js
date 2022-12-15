const chatBody=document.querySelector(".chat-body");

const textinput=document.querySelector("#txtinput");

const send=document.querySelector(".send");



send.addEventListener("click", () => renderUserMessage());



textinput.addEventListener("keyup", (event) => {

  if (event.keyCode === 13) {

    renderUserMessage();

  }

});



const renderUserMessage = () => {

  const userInput = textinput.value;

  renderMessageEle(userInput, "user");

  textinput.value = "";

  setTimeout(() => {

    renderChatbotResponse(userInput);

    setScrollPosition();

  }, 600);

};



const renderChatbotResponse = (userInput) => {

  const res = getChatbotResponse(userInput);

  renderMessageEle(res);

};



const renderMessageEle = (txt, type) => {

  let className = "user-message";

  if (type !== "user") {

    className = "chatbot-message";

  }

  const messageEle = document.createElement("div");

  const txtNode = document.createTextNode(txt);

  messageEle.classList.add(className);

  messageEle.append(txtNode);

  chatBody.append(messageEle);

};



const getChatbotResponse = (userInput) => {

  return responseObj[userInput] == undefined

    ? "Por favor, intente algo más"

    : responseObj[userInput];

};



const setScrollPosition = () => {

  if (chatBody.scrollHeight > 0) {

    chatBody.scrollTop = chatBody.scrollHeight;

  }

};