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

// export function validateForm(form) {
//   const inputs = form.getElementsByTagName("input");
//   let valid = true;
//   for (let i = 0; i < inputs.length; i++) {
//     if (inputs[i].id === "confirm-pwd") {
//       if (inputs[i].value !== inputs[i - 1].value) {
//         inputs[i].parentNode.querySelector(".invalid").classList.add("active");
//         inputs[i].classList.add("invalid");
//         valid = false;
//       } else {
//         inputs[i].parentNode
//           .querySelector(".invalid")
//           .classList.remove("active");
//       }
//     } else if (!inputs[i].checkValidity()) {
//       inputs[i].parentNode.querySelector(".invalid").classList.add("active");
//       inputs[i].classList.add("invalid");
//       valid = false;
//     } else {
//       inputs[i].parentNode.querySelector(".invalid").classList.remove("active");
//     }
//   }
//   if (valid) {
//     alert("Pancake time!");
//   }
// }
