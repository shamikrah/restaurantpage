export function pageLoad() {
  console.log("lol");

  const content = document.querySelector("#content");
  const image = document.createElement("img");
  //image;
  const headline = document.createElement("h1");
  headline.textContent = "Restaurant";
  const copy = document.createElement("p");
  copy.textContent = "Tis great";
  content.appendChild(image);
  content.appendChild(headline);
  content.appendChild(copy);
}
