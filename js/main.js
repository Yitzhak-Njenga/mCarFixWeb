// swipe container sign in & sign up
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

//see password

function seePassword(){
    var see = document.getElementById("password")
    var confirm = document.getElementById("confirm_password")


    if(see.type === "password"){
        see.type = "text";
    }else{
        see.type = "password";
    }

    if(confirm.type === "password"){
        confirm.type = "text";
    }else{
        confirm.type = "password";
    }

}

//confirm password
document.getElementById("submit").addEventListener("click",confirm);

function confirm(){

	var pass = document.getElementById("password");
	var confirm_pass = document.getElementById("confirm_password");
	var number = document.getElementById("number");


	var password = pass.value;
	var confirm_password = confirm_pass.value;
	var phonenumber = number.value

	if(password !== confirm_password){
		alert("password does not match")
	
	}

	if(phonenumber.length < 10){
		alert("phone number must contain 10 digits");
	}
}


