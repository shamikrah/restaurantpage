import { contactLoad } from "./contact";
import { footerLoad } from "./footer";
import { homeLoad } from "./home";
import { navLoad } from "./nav";

export function menuLoad() {
  const content = document.querySelector("#content");
  while (content.hasChildNodes()) {
    content.removeChild(content.lastChild);
  }

  navLoad();

  const menuItemOne = document.createElement("p");
  const menuItemTwo = document.createElement("p");

  menuItemOne.textContent = "Steak and Chips";
  menuItemTwo.textContent = "Rice and Curry";

  content.appendChild(menuItemOne);
  content.appendChild(menuItemOne);

  footerLoad();
}
