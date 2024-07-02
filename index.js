var password = prompt("Enter a password:");
if(password.length < 5){
    alert("Password must be atleast 6 characters long!");
}
else{
    var hasAlphabet = false;
    var hasNumber = false;
    for(var i=0; i< password.length; i++){
    var charcode = password.charCodeAt(i)
    if((charcode >= 65 && charcode <= 90) || (charcode >= 97 && charcode <= 122)){
hasAlphabet = true;
    } else if(charcode >= 48 && charcode <= 57){
hasNumber = true;
    }
    }
    if (hasAlphabet && hasNumber){
        alert("Valid password")
    } else{
        alert("Password must contain alphabet and numbers both")
    }
}