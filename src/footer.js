export function footerLoad() {
  const content = document.querySelector("#content");

  const footer = document.createElement("footer");
  const credit = document.createElement("p");

  credit.textContent = "© Copyright 2023 shamikrah. All rights reserved.";

  footer.appendChild(credit);
  content.appendChild(footer);
}
