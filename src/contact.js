import { footerLoad } from "./footer";
import { homeLoad } from "./home";
import { menuLoad } from "./menu";
import { navLoad } from "./nav";

export function contactLoad() {
  const content = document.querySelector("#content");
  while (content.hasChildNodes()) {
    content.removeChild(content.lastChild);
  }

  navLoad();

  const phoneNumber = document.createElement("p");
  const address = document.createElement("p");

  phoneNumber.textContent = "0401010101";
  address.textContent = "1 Yomama Drive, Sydney";

  content.appendChild(phoneNumber);
  content.appendChild(address);

  footerLoad();
}
