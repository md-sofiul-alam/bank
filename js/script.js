document.getElementById('submit-btn').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
const passwordField= document.getElementById ('password-field');
const password = passwordField.value;
if(( email==='mee' && password==='123456')){
    window.location.href = "account.html";
}
else{
    alert("Invalaied Id or Password")
}

})