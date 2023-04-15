import {
  createElement,
  createFormInput,
  fadeAnimation,
  validateForm,
} from "./helpers";

export function showForm(element) {
  element.innerHTML = "";
  element.appendChild(createElement("h1", "Sign Up", "page-heading"));
  element.appendChild(
    createElement(
      "p",
      "Sign up now to reserve a table at a moment's notice. As a bonus, receive nana's latest pancake recipes right in your inbox. You know you want to!",
      "sign-up-text"
    )
  );
  element.appendChild(
    createElement(
      "p",
      "Please note, this is not a real service.",
      "sign-up-text"
    )
  );

  const form = createElement("form", "", "sign-up");
  form.noValidate = true;

  const firstName = createElement("div", "", "form-section");
  firstName.appendChild(createElement("p", "First Name", "form-label"));
  const firstNameInput = createFormInput("first-name", "text", "form-input");
  firstName.appendChild(firstNameInput);
  firstName.appendChild(
    createElement("p", "Please fill in this field.", "invalid")
  );
  form.appendChild(firstName);

  const lastName = createElement("div", "", "form-section");
  lastName.appendChild(createElement("p", "Last Name", "form-label"));
  const lastNameInput = createFormInput("last-name", "text", "form-input");
  lastName.appendChild(lastNameInput);
  lastName.appendChild(
    createElement("p", "Please fill in this field.", "invalid")
  );
  form.appendChild(lastName);

  const email = createElement("div", "", "form-section");
  email.appendChild(createElement("p", "E-Mail", "form-label"));
  const emailInput = createFormInput("email", "email", "form-input");
  email.appendChild(emailInput);
  email.appendChild(
    createElement("p", "Please enter a valid email address.", "invalid")
  );
  form.appendChild(email);

  const number = createElement("div", "", "form-section");
  number.appendChild(createElement("p", "Phone Number", "form-label"));
  const numberInput = createFormInput("phone-number", "tel", "form-input");
  numberInput.setAttribute("pattern", "0[0-9]{10,14}");
  number.appendChild(numberInput);
  number.appendChild(
    createElement("p", "Please enter a valid UK number.", "invalid")
  );
  form.appendChild(number);

  const pwd = createElement("div", "", "form-section");
  pwd.appendChild(createElement("p", "Password", "form-label"));
  const pwdInput = createFormInput("password", "password", "form-input");
  pwd.appendChild(pwdInput);
  pwd.appendChild(
    createElement("p", "Please enter an 8-digit password.", "invalid")
  );
  form.appendChild(pwd);

  const confirmpwd = createElement("div", "", "form-section");
  confirmpwd.appendChild(createElement("p", "Confirm Password", "form-label"));
  const confirmpwdInput = createFormInput(
    "confirm-pwd",
    "password",
    "form-input"
  );
  confirmpwd.appendChild(confirmpwdInput);
  confirmpwd.appendChild(
    createElement("p", "Please ensure passwords match.", "invalid")
  );
  form.appendChild(confirmpwd);

  const signUpBtn = createElement("button", "Sign up!", "sign-up-btn");
  signUpBtn.type = "button";
  form.appendChild(signUpBtn);

  element.appendChild(form);

  const p = createElement("p", "", "sign-up-text");
  p.innerHTML = `Already have an account? <a href="#">Log in</a>.`;
  element.appendChild(p);

  firstNameInput.focus();

  const attribution = createElement("p", "", "attribution");
  attribution.innerHTML = `Website by <a href="https://github.com/shubsmastan">ShubsMastan</a>`;
  element.appendChild(attribution);

  fadeAnimation(element);

  signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let valid = true;

    if (!firstNameInput.checkValidity()) {
      firstName.querySelector(".invalid").classList.add("active");
      valid = false;
    } else {
      firstName.querySelector(".invalid").classList.remove("active");
    }

    if (!lastNameInput.checkValidity()) {
      lastName.querySelector(".invalid").classList.add("active");
      valid = false;
    } else {
      lastName.querySelector(".invalid").classList.remove("active");
    }

    if (!emailInput.checkValidity()) {
      email.querySelector(".invalid").classList.add("active");
      valid = false;
    } else {
      email.querySelector(".invalid").classList.remove("active");
    }

    if (!numberInput.checkValidity()) {
      number.querySelector(".invalid").classList.add("active");
      valid = false;
    } else {
      number.querySelector(".invalid").classList.remove("active");
    }

    if (!pwdInput.checkValidity()) {
      pwd.querySelector(".invalid").classList.add("active");
      valid = false;
    } else {
      pwd.querySelector(".invalid").classList.remove("active");
    }

    if (confirmpwdInput.value !== pwdInput.value) {
      confirmpwd.querySelector(".invalid").classList.add("active");
      valid = false;
    } else {
      confirmpwd.querySelector(".invalid").classList.remove("active");
    }

    if (valid) {
      alert("Pancake time!");
    }
  });
}
