export default function createMenu() {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-content");

  const headline = document.createElement("h1");
  headline.textContent = "Our Menu";

  const itemsList = document.createElement("ul");

  const item1 = document.createElement("li");
  item1.textContent = "Delicious Pizza - $15";

  const item2 = document.createElement("li");
  item2.textContent = "Fresh Caesar Salad - $10";

  const item3 = document.createElement("li");
  item3.textContent = "Classic Burger - $12";

  itemsList.appendChild(item1);
  itemsList.appendChild(item2);
  itemsList.appendChild(item3);

  menuDiv.appendChild(headline);
  menuDiv.appendChild(itemsList);

  return menuDiv;
}