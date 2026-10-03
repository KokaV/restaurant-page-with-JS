// src/homepage.js
export default function createHomepage() {
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("home-content");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Our Cozy Restaurant!";

  const description = document.createElement("p");
  description.textContent = "We serve the best food in town, made with love and fresh ingredients. Come and enjoy a wonderful dining experience with us!";

  contentDiv.appendChild(headline);
  contentDiv.appendChild(description);

  return contentDiv;
}