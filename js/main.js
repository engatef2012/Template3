"use strict";
const megaMenu = document.querySelector(".mega-menu");
const otherLinks = document.querySelector("header .links li:last-of-type");
// add open class on the mega menu on mosue hover on otherlinks
otherLinks.addEventListener("mouseover", function () {
  megaMenu.classList.add("open");
});
// // remove open class on the mega menu on mosue leaving it
megaMenu.addEventListener("mouseleave", function () {
  megaMenu.classList.remove("open");
});
// make the event date after 5 days
const eventDate = new Date().setDate(new Date().getDate() + 5);
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
console.log(seconds);
let countdown = setInterval(function () {
  let datediff = eventDate - new Date();
  const sec = Math.floor((datediff / 1000) % 60);
  seconds.textContent = sec>9?sec:'0'+sec;
  let min = Math.floor((datediff / 1000 / 60) % 60);
  minutes.textContent = min>9?min:'0'+min;
  let hrs = Math.floor((datediff / 1000 / 60 / 60) % 24);
  hours.textContent = hrs>9?hrs:'0'+hrs;
  let d = Math.floor(datediff / 1000 / 60 / 60 / 24);
  days.textContent = d>9?d:'0'+d;
}, 1000);
