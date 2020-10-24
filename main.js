function ValidateEmail()
{
  var errorText = document.getElementById("errortext");
  errorText.style.display="none";
  var inputText = document.getElementById("email-input");
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputText.value.match(mailformat))
  {
   inputText.style.border="1px solid green";
   errorText.innerHTML="Successfull";
   errorText.style.color="green";
   errorText.style.display="block";
    return true;
  }
  else
  {
     inputText.style.border="1px solid hsl(354, 100%, 66%)";
        errorText.innerHTML = "Please provide a valid email address";
        errorText.style.color="hsl(354, 100%, 66%)";
    errorText.style.display="block";
    return false;
  }
}