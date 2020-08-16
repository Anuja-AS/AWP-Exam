function validate(){
    alert("You have successfully logged in");
    
    const userName=document.querySelectorId("username").value;
    const passWord=document.querySelectorId("password").value;  
    const emailId=document.querySelectorId("Email id").value;

    if(userName!=="" && passWord !== "" && emailId !=="")
    {
        alert("valid");
    }
    else{
        alert("invalid");
    }
    

}