const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //   validation
  const Password = form.Password.value;
  const passwordPattern = /^.{6,12}$/;

  if (passwordPattern.test(Password)) {
    alert("congratulations! you successfully claimed your trial");
  } else {
    feedback.textContent = "password must be between 6 & 12 characters long";
  }
  console.log(form.lname.value);
});
