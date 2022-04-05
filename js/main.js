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
function submit(){

    var a = see.value;

    alert("text");

   
    
}


