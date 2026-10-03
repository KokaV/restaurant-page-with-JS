export default function createContact() {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-content");

  const headline = document.createElement("h1");
  headline.textContent = "Contact Us";

  const phone = document.createElement("p");
  phone.textContent = "Phone: +995 (32) 555-1234";

  const address = document.createElement("p");
  address.textContent = "Address: Rustaveli Avenue 1, Tbilisi, Georgia";

  contactDiv.appendChild(headline);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(address);

  return contactDiv;
}