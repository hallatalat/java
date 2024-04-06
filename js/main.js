function validation(){
    var name = document.getElementById("user").value;
    var email = document.getElementById("email").value;  
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;
    var message = document.getElementById("message");
     message.setAttribute("class","square");

    if(name=="" && email=="" && pass=="" && confirm==""){
        message.innerHTML ="Enter Date In Form";
        return false; 
    }else if(name.length<5 || name.length>15){
      message.innerHTML ="Enter Date 5-15 char in Name";
      return false;
    }else if(email.indexOf("@",3) ==-1){
      message.innerHTML ="Enter Valid Email";
      return false;  
    }else if(pass.length<8){
        message.innerHTML = "Enter Atleast 8 Char in Password";
        return false;
    }else if(pass != confirm){
        message.innerHTML = "Matching Password";
        return false;
    }
}