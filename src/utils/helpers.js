export function createElement(name, content, className) {
  const element = document.createElement(name);
  element.textContent = content;
  element.className = className;
  return element;
}

export function createFormInput(id, type, className) {
  const element = document.createElement("input");
  element.id = id;
  element.type = type;
  element.className = className;
  element.required = true;
  if (type === "password") {
    element.minLength = 8;
  }
  return element;
}

export function fadeAnimation(element) {
  element.animate(
    [{ opacity: 0 }, { opacity: 1 }],
    { duration: 500 },
    { iterations: 1 }
  );
}
