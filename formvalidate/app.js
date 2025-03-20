const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(e);
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const contact = document.getElementById("contact");
  const password = document.getElementById("password");
  const confirmpassword = document.getElementById("confirmpassword");
  const city = document.getElementById("city");
  const country = document.getElementById("country");
  const successMessage = document.getElementById("successMessage");
  let isValid = true;
  let firstinvalidfield = null;
  function validateFiled(field, regex, errorMessage) {
    // console.log(field.value.trim());
    // console.log(field);
    const errorElement = field.nextElementSibling;
    if (!regex.test(field.value.trim())) {
      errorElement.textContent = errorMessage;
      errorElement.style.display = "block";
      if (!firstinvalidfield) {
        firstinvalidfield = field;
      }
      isValid = false;
    } else {
      errorElement.style.display = "none";
    }
  }
  validateFiled(name, /^[a-zA-Z0-9\s]+$/, "Name must containe only letters");
  validateFiled(email, /^\S+@\S+\.\S+$/, "enter a valid email Addresss");
  validateFiled(contact, /^\d{10}$/, "contact must be a 10 digit number");
  validateFiled(city, /^[a-zA-Z\s]+$/, "City must contain only letters.");
  validateFiled(country, /^[a-zA-Z\s]+$/, "Country must contain only letters.");
  validateFiled(
    password,
    /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,}$/,
    "Password must have 8+ chars, a number, a special char, and an uppercase."
  );
  if (confirmpassword.value.trim() !== password.value.trim()) {
    confirmpassword.nextElementSibling.textContent = "Password must match";
    confirmpassword.nextElementSibling.style.display = "block";
    if (!firstinvalidfield) {
      firstinvalidfield = confirmpassword;
    }
    isValid = false;
  } else {
    confirmpassword.nextElementSibling.style.display = "none";
  }
  if (isValid) {
    const formData = {
      Name: name.value.trim(),
      Email: email.value.trim(),
      Contact: contact.value.trim(),
      Password: password.value.trim(),
      City: city.value.trim(),
      Country: country.value.trim(),
    };
    console.log("form Data Submitted", formData);
    alert("Form submitted successfully.");
    // successMessage.textContent = "Form submitted successfully.";
    successMessage.style.display = "block";
    // document.getElementById("form").reset();
  } else {
    successMessage.textContent = "Form submitted successfully.";
    successMessage.style.display = "none";
  }
});
// console.log(form);
function togglebutton(togglebuttonid, passwordFieldid) {
  const togglebutton = document.getElementById(togglebuttonid);
  const passwordfieid = document.getElementById(passwordFieldid);
  togglebutton.addEventListener("click", () => {
    if (passwordfieid.type === "password") {
      passwordfieid.type = "text";
      togglebutton.textContent = "🙈";
      //   passwordfieid.type = "password";
    } else {
      passwordfieid.type = "password";
      togglebutton.textContent = "👁️";
      //   passwordfieid.type = "text";
    }
  });
}
togglebutton("togglePassword", "password");
togglebutton("togglePasswordconfirm", "confirmpassword");