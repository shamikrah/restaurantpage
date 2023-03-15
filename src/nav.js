export function navLoad() {
  const content = document.querySelector("#content");

  const header = document.createElement("header");
  const headline = document.createElement("h1");
  const nav = document.createElement("nav");
  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");

  headline.textContent = "Restaurant";
  homeBtn.textContent = "Home";
  menuBtn.textContent = "Menu";
  contactBtn.textContent = "Contact";

  homeBtn.addEventListener("click", homeLoad);
  menuBtn.addEventListener("click", menuLoad);
  contactBtn.addEventListener("click", contactLoad);

  header.appendChild(headline);
  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
  content.appendChild(header);
  content.appendChild(nav);
}
