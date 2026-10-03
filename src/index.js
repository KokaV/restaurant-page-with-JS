import "./styles.css";
import createHomepage from "./homepage.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";

const content = document.querySelector("#content");

// დამხმარე ფუნქცია, რომელიც ასუფთავებს და ტვირთავს ახალ გვერდს
function loadTab(tabFunction) {
  content.textContent = ""; // ვწმენდთ ძველ კონტენტს
  content.appendChild(tabFunction());
}

// საწყისი გვერდის ჩატვირთვა გვერდის გახსნისას
loadTab(createHomepage);

// ღილაკებზე ევენთ-ლისენერების მიმაგრება
document.querySelector("#home-btn").addEventListener("click", () => {
  loadTab(createHomepage);
});

document.querySelector("#menu-btn").addEventListener("click", () => {
  loadTab(createMenu);
});

document.querySelector("#contact-btn").addEventListener("click", () => {
  loadTab(createContact);
});