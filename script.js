function handleCreateClick(event) {
  event.preventDefault();

  // Update the business card details
  document.getElementById("name").textContent = document.getElementById("InputName").value;
  document.getElementById("job-title").textContent = document.getElementById("InputJob").value;
  document.getElementById("phone").textContent = document.getElementById("InputPhone").value;

  // Create a mailto link for the email
  const emailValue = document.getElementById("InputMail").value;
  const emailLink = `mailto:${emailValue}`;
  document.getElementById("email").innerHTML = `<a href="${emailLink}" class="right-align">${emailValue}</a>`;
}

function handleBlueClick(event) {
  event.preventDefault();
  const bizCard = document.querySelector(".biz-card");
  bizCard.classList.toggle("blue");
  bizCard.classList.remove("yellow");
}

function handleYellowClick(event) {
  event.preventDefault();
  const bizCard = document.querySelector(".biz-card");
  bizCard.classList.toggle("yellow");
  bizCard.classList.remove("blue");
}

function backgroundClickEvent(event) {
  event.preventDefault();
  const bizCard = document.querySelector(".biz-card");

  // Set the background image
  bizCard.style.backgroundImage = "url('background_black.jpg')"; // Replace with your image URL
  bizCard.style.backgroundSize = "cover"; 
  bizCard.style.backgroundPosition = "center"; 
}

function setSecondBackground(event) {
  event.preventDefault();
  const bizCard = document.querySelector(".biz-card");

  // Set a predefined background image
  bizCard.style.backgroundImage = "url('golden.jpg')"; // Replace with your image URL
  bizCard.style.backgroundSize = "cover"; 
  bizCard.style.backgroundPosition = "center"; 
}

// Event listeners
document.querySelector(".background-button").addEventListener("click", backgroundClickEvent);
document.getElementById("setBackgroundButton").addEventListener("click", setSecondBackground);

// Add event listener for the create button
document.getElementById("submitCreate").addEventListener("click", handleCreateClick);

function handleFormEvents() {
  document.querySelector("button.blue").addEventListener("click", handleBlueClick);
  document.querySelector("button.yellow").addEventListener("click", handleYellowClick);
}

handleFormEvents();
