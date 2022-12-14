let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();


var more = document.getElementById("more");
more.style.display = "none";

function validateForm(){
  var btn2 = document.getElementById("btn2");
  var name = document.forms.RegForm.name.value;
  var phone = document.forms.RegForm.ph.value;
  var ad = document.forms.RegForm.ad.value;
  var foodname = document.forms.RegForm.fnm.value;
  var mail = document.forms.RegForm.mail.value;

  var regPhone=/^\d{10}$/;  // Javascript reGex for Phone Number and name validation.
  var regName = /\d+$/g;
  var regmail = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

  if (name == "" || regName.test(name)) {
      window.alert("Please enter your name properly.");
      name.focus();
      return false;
  }

  if (name == "" || regName.test(foodname)) {
    window.alert("Please enter a food name");
    name.focus();
    return false;
}

if (name == "" || regName.test(ad)) {
  window.alert("Please enter a proper address");
  name.focus();
  return false;
}

  if (name == "" || regmail.test(mail)) {
    window.alert("Please enter proper mail.");
    name.focus();
    return false;
}

  if (phone == "" || !regPhone.test(phone)) {
      alert("Please enter valid phone number.");
      phone.focus();
      return false;
  }
  return true;
}