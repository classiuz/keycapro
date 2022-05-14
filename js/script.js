/* -------- NAVBAR FIXED SCRIPT -------- */

window.addEventListener('scroll', function() {
	let nav = document.querySelector("nav"); 
	let navbarHeight = nav.offsetHeight;
	if (window.scrollY > 0) {
		nav.classList.add("fixed");
        document.body.style.paddingTop = navbarHeight + "px";
	} else {
		nav.classList.remove("fixed");
		document.body.style.paddingTop = "";
	}
});

/* -------- NAVBAR LINKS SCRIPT -------- */

let navLinks = document.querySelectorAll("nav a");
let sections = document.querySelectorAll("section");

window.addEventListener("scroll", function() {
	var current = "home";
	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		if (pageYOffset >= sectionTop){
			current = section.getAttribute("id");
		}
	})
	navLinks.forEach((item) => {
		item.classList.remove("active");
		if (item.href.includes(current)){
			item.classList.add("active");
		}
		else {
			item.classList.remove("active");
		}
	})
});

/* -------- NAVBAR BUTTON SCRIPT -------- */

document.querySelector(".button").onclick = function() {
	let links = document.querySelector(".links");
	let nav = document.querySelector("nav"); 
	links.classList.toggle("show");
	nav.classList.toggle("nav-bg");
}

/* -------- FORM SUBMIT SCRIPT -------- */

document.querySelector("#submit").onclick = function() {
	let name = document.forms["contact"]["name"];
	let email = document.forms["contact"]["email"];
	let message = document.forms["contact"]["message"];
	if (name.value == "" && email.value == "" && message.value == "") {
		name.classList.add("invalid");
		email.classList.add("invalid");
		message.classList.add("invalid");
	}
	if (name.value == "") {
		name.classList.add("invalid");
	} else {
		name.classList.remove("invalid");
	}
	if (email.value == "") {
		email.classList.add("invalid");
	} else {
		email.classList.remove("invalid");
	}
	if (message.value == "") {
		message.classList.add("invalid");
	} else {
		message.classList.remove("invalid");
	}
	if (name.value !== "" && email.value !== "" && message.value !== "") {
		alert("El formulario es ilustrativo. Tu información no se envió a ningún lado.");
	}
	return false;
}

/* -------- CLOSE ALERT SCRIPT -------- */

document.querySelector(".close").onclick = function() {
	let alert = document.querySelector(".alert")
	alert.style.display = "none";
}
