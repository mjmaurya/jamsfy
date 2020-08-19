//Contact
var name=false;
var email=false;
var mobile=false;
var message=false;
function nameFunction(){
	x=document.getElementById('name').value;
	if (x.length<3) {

		x=document.getElementById('name').style.backgroundColor = "red";
	}
	else{
		x=document.getElementById('name').style.backgroundColor = "green";
		name=true;
	}
}
function emailFunction(){
	x=document.getElementById('email').value;
	var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");
	if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length) {
		document.getElementById('email').style.backgroundColor = "red";
	}
	else{
		document.getElementById('email').style.backgroundColor = "green";
		email=true;
	}
}
function mobileFunction(){
	x=document.getElementById('mobile').value;
	console.log(typeof(x));
	if (x.length==10) {
		x=document.getElementById('mobile').style.backgroundColor="green"
		mobile=true;
	}
	else{
		x=document.getElementById('mobile').style.backgroundColor = "red";
	}
}
function messageFunction(){
	x=document.getElementById('message').value;
	if (x.length<10) {
		x=document.getElementById('message').style.backgroundColor = "red";
	}
	else{
		x=document.getElementById('message').style.backgroundColor="green"
		message=true;
	}
}
function validateContact(){ 
	document.getElementById("nameE").innerHTML=""
	document.getElementById("emailE").innerHTML=""
	document.getElementById("mobileE").innerHTML=""
	document.getElementById("messageE").innerHTML=""
var name=document.getElementById('name').value;
var email=document.getElementById('email').value;
var mobile=document.getElementById('mobile').value;
var message=document.getElementById('message').value;
if (name.length<3) {
	document.getElementById("nameE").innerHTML="Please enter Valid name"
}
var atposition=email.indexOf("@");  
var dotposition=email.lastIndexOf(".")
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length) {
document.getElementById("emailE").innerHTML="Please enter Valid Email"
}
if (mobile.length!=10) {
document.getElementById("mobileE").innerHTML="Please enter Valid Mobile Number"
}
if (message.length<10) {
document.getElementById("messageE").innerHTML="Message should be 10 charecter long"
}
if (!name || !email || !mobile || !message) {
return false;
}
else{
	alert("Quries Submitted !");
}
}