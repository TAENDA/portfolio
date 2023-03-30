import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

// CURSOR
const cursor = document.querySelector(".cursor");
const cursor1 = document.querySelector(".cursor1")
document.addEventListener("mousemove", function(e){
	cursor.style.cssText = cursor1.style.cssText = "left : " + e.clientX + "px; top: " + e.clientY + "px;";
})
// CONTACT FORM
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const shell = document.getElementById('shell');

signUpButton.addEventListener('click', () => {
	shell.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	shell.classList.remove("right-panel-active");
})
// mailchimp intergration 
// const express = require("express");
// const bodyParser = require("body-parser");
// const request = require("request");

// app.use(express.static());

// app.get("/", function(req, res) {
// 	res.sendFile(__dirname + "/index.html");
// });

// app.listen(3004, function() {

// });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <App />
);
