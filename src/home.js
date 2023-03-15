import { contactLoad } from "./contact";
import { footerLoad } from "./footer";
import { menuLoad } from "./menu";
import { navLoad } from "./nav";

export function homeLoad() {
  const content = document.querySelector("#content");
  while (content.hasChildNodes()) {
    content.removeChild(content.lastChild);
  }

  navLoad();

  const p = document.createElement("p");

  p.textContent = "This is the homepage, hi";

  content.appendChild(p);

  footerLoad();
}
