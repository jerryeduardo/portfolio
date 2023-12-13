// 1st Modal
var firstModal = document.getElementById("first-modal");
var btnFirstModal = document.getElementById("btn-first-modal");
var close = document.getElementsByClassName("close")[0];

btnFirstModal.onclick = function(){
	firstModal.style.display = "block";
}
close.onclick = function(){
	firstModal.style.display = "none";
}
window.addEventListener("click", function(event){
	if(event.target == firstModal){
		firstModal.style.display = "none";
	}
});

// 2nd Modal
var secondModal = document.getElementById("second-modal");
var btnSecondModal = document.getElementById("btn-second-modal");
var close = document.getElementsByClassName("close")[1];

btnSecondModal.onclick = function(){
	secondModal.style.display = "block";
}
close.onclick = function(){
	secondModal.style.display = "none";
}
window.addEventListener("click", function(event){
	if(event.target == secondModal){
		secondModal.style.display = "none";
	}
});

// 3rd Modal
var thirdModal = document.getElementById("third-modal");
var btnThirdModal = document.getElementById("btn-third-modal");
var close = document.getElementsByClassName("close")[2];

btnThirdModal.onclick = function(){
	thirdModal.style.display = "block";
}
close.onclick = function(){
	thirdModal.style.display = "none";
}
window.addEventListener("click", function(event){
	if(event.target == thirdModal){
		thirdModal.style.display = "none";
	}
});

// 4th Modal
var fourthModal = document.getElementById("fourth-modal");
var btnFourthModal = document.getElementById("btn-fourth-modal");
var close = document.getElementsByClassName("close")[3];

btnFourthModal.onclick = function(){
	fourthModal.style.display = "block";
}
close.onclick = function(){
	fourthModal.style.display = "none";
}
window.addEventListener("click", function(event){
	if(event.target == fourthModal){
		fourthModal.style.display = "none";
	}
});

// 5th Modal
var fifthModal = document.getElementById("fifth-modal");
var btnFifthModal = document.getElementById("btn-fifth-modal");
var close = document.getElementsByClassName("close")[4];

btnFifthModal.onclick = function(){
	fifthModal.style.display = "block";
}
close.onclick = function(){
	fifthModal.style.display = "none";
}
window.addEventListener("click", function(event){
	if(event.target == fifthModal){
		fifthModal.style.display = "none";
	}
});

// 6th Modal
var sixthModal = document.getElementById("sixth-modal");
var btnSixthModal = document.getElementById("btn-sixth-modal");
var close = document.getElementsByClassName("close")[5];

btnSixthModal.onclick = function(){
	sixthModal.style.display = "block";
}
close.onclick = function(){
	sixthModal.style.display = "none";
}
window.addEventListener("click", function(event){
	if(event.target == sixthModal){
		sixthModal.style.display = "none";
	}
});