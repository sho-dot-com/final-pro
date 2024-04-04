"use strict";


let hamMenu = document.querySelector(".ham-menu");
let offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

let form = document.getElementById("formelement");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let errors = {};

  //username
  let usernameValue = document.getElementById("usernamefield").value;
  // let usernameValue2 = document.querySelector('[name="username"]').value;

  if (usernameValue.length < 4) {
    errors.username = "Username must be more than 4 characters";
  }

  if (usernameValue == "") {
    errors.username = "Username can not be empty";
  }

  // password
  let passwordValue1 = document.getElementById("passwordfield").value;
  let passwordValue2 = document.getElementById("passwordfiled2").value;

  if (passwordValue1 == "") {
    errors.passw = "password can not be emtpy";
  }
  if (passwordValue1 != passwordValue2) {
    errors.passw2 = "passwords do not match";
  }

  // radio
  let gender = false;
  let radioElements = this.querySelectorAll('[name="gender"]');
  // console.log(radioElements);
  radioElements.forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender = "Please Select Your Gender";
  }

  //checkbox
  let checkBoxAgree = document.getElementById("checkfield").checked;
  if (!checkBoxAgree) {
    errors.agree = "You must agree our terms and conditions";
  }

  console.log(errors);

  this.querySelectorAll(".error-text").forEach((el) => {
    el.textContent = " ";
  });

  for (let item in errors) {
    console.log(item); //key

    let errorTextElement = document.getElementById("error_" + item);
    console.log(errorTextElement);

    if (errorTextElement) {
      errorTextElement.textContent = errors[item];
    }
  }

  if (Object.keys(errors).length === 0) {
    this.submit();
  }
});

// let errors = {
//   username: "Username can not be empty",
//   passw: "password can not be emtpy",
//   gender: "Please Select Your Gender",
//   agree: "You must agree our terms and conditions",
// };

// show hide password
let passw = document.getElementById("passwordfield");
let icon = document.getElementById("toggleIcon");

icon.addEventListener("click", function () {
  if (passw.type == "password") {
    passw.setAttribute("type", "text");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passw.setAttribute("type", "password");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
});

// email regex
let email = document.getElementById("emailfield");

function validation() {
  let emailValue = document.getElementById("emailfield").value;
  let textError = document.getElementById("error-email");
  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailPattern.test(emailValue)) {
    textError.textContent = "Your Email is valid";
    textError.style.color = "green";
  } else {
    textError.textContent = "Your Email is invalid";
    textError.style.color = "red";
  }

  if (emailValue == "") {
    textError.innerHTML = " ";
  }
}

email.addEventListener("keyup", validation);

// oop
const Person = function (fname, birthYear) {
  this.fisrtName = fname;
  this.birth = birthYear;
};

// console.log(Person.prototype);

Person.prototype.printAge = function () {
  console.log(2024 - this.birth);
};

const info = new Person("anna", 2002);
const info2 = new Person("lasha", 1992);
const info3 = new Person("nini", 2012);
console.log(info);
console.log(info2);
console.log(info3);

info.printAge();
info2.printAge();
info3.printAge();
//
// 1. {}
// 2. this value = {}
// 3. prototype
// 4. {}


//classes es6
// const PersonInfo = class {

// }

class PersonInfo {
  constructor(fname, birthYearUser) {
    this.firstName = fname;
    this.byear = birthYearUser;
  }
  getAge() {
    console.log(2024 - this.byear);
  }
}

const obj = new PersonInfo("nika", 1992);
const obj2 = new PersonInfo("beka", 2001);

console.log(obj);
console.log(obj2);
obj.getAge();
obj2.getAge();

let asyncFnc = async () => {
  const response = await fetch("https://reqres.in/api/users?page=");
  console.log(response);

  if (response.status !== 200) {
    throw new Error("can not fetch data");
  }
  let data = await response.json();
  return data;
};
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// scroll to top
let topIcon = document.getElementById("topIcon")

topIcon.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});