function createElement({ type, classList = [] }) {
  const element = document.createElement(type);
  element.classList.add(...classList);
  return element;
}

const body = document.querySelector("body");

const divElement = createElement({ type: "div" });
const icons = [
  { class: "fa fa-home", href: "#" },
  { class: "fa fa-search", href: "#" },
  { class: "fa fa-envelope", href: "#" },
  { class: "fa fa-globe", href: "#" },
  { class: "fa fa-trash", href: "#" },
];

for (let i = 0; i < icons.length; i++) {
  const anchorELement = createElement({ type: "a" });
  anchorELement.href = icons[i].href;
  const iconElement = createElement({
    type: "i",
    classList: icons[i].class.split(" "),
  });
  anchorELement.appendChild(iconElement);
  divElement.appendChild(anchorELement);
}

body.appendChild(divElement);
