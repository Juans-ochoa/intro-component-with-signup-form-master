const d = document,
  $inputs = d.querySelectorAll("#contact-form input");

function validateInput(name, value, pattern) {
  const $img = d.querySelector(`img#${name}`),
    $span = d.querySelector(`span#${name}`),
    $input = d.getElementById(`${name}`);
  regex = new RegExp(pattern);
  let message = "";

  switch (name) {
    case "first-name":
      message =
        value !== ""
          ? !regex.exec(value)
            ? "First name only accept letters and spaces!"
            : ""
          : "First name cannot be empty";
      break;
    case "last-name":
      message =
        value !== ""
          ? !regex.exec(value)
            ? "Last name only accept letters and spaces!"
            : ""
          : "Last name cannot be empty";
      break;
    case "email":
      message =
        value !== ""
          ? !regex.exec(value)
            ? "Looks like this is not an email!"
            : ""
          : "Email cannot be empty";
      break;
    case "password":
      message = value === "" ? "Password cannot be empty" : "";
      break;
    default:
      break;
  }

  $span.textContent = message;

  if (message) {
    $input.classList.add("input-error-active");
    $img.classList.remove("none");
    $span.classList.remove("none");
  } else {
    $input.classList.remove("input-error-active");
    $img.classList.add("none");
    $span.classList.add("none");
  }
}

function validateForm() {
  $inputs.forEach((el) => {
    const $img = d.createElement("img");
    $span = d.createElement("span");

    const { name } = el;

    $img.src = "/images/icon-error.svg";
    $img.classList.add("icon-error", "none");
    $img.alt = "Icon-error";
    $img.id = name;

    $span.classList.add("message-error", "none");
    $span.id = name;

    el.insertAdjacentElement("afterend", $img);
    el.insertAdjacentElement("afterend", $span);
  });
}

d.addEventListener("DOMContentLoaded", (e) => {
  validateForm();
});

d.addEventListener("keyup", (e) => {
  $inputs.forEach((el) => {
    if (e.target === el) {
      const { name, value, pattern } = el;
      validateInput(name, value, pattern);
    }
  });
});

d.addEventListener("submit", (e) => {
  e.preventDefault();
  $inputs.forEach((el) => {
    const { name, value, pattern } = el;
    validateInput(name, value, pattern);
  });
});
