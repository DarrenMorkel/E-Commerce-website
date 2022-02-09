var logform = document.querySelector("#LogForm");
logform.addEventListener('submit' , function(p){
    p.preventDefault();

});

function myLogFunction(){
    var uname = document.querySelector ("#uname");
    var psw = document.querySelector ("#psw");

    if (uname.value =="Admin" && psw.value=="1234")
    {
        window.location.href= "home.html";
        alert("You are logged in successfully.")
    }
    else{
        alert ("Incorrect username and password")
    }

  
};

/*var SignForm = document.querySelector("#SignForm");
SignForm.addEventListener('submit', function(e){
    e.preventDefault();
});

function mySignFunction(){
    var uname = document.querySelector ("#signuname");
    var psw = document.querySelector ("#signpsw");

    if(signuname.value == ''  && signpsw.value =='' ){
        alert("Please fill out all of the fields.")
    }
    else{
        window.location.href ="log.html";
        alert ("Log in using username: Admin and password:1234")
    }
}*/

var button = document.querySelector ('#btn');
button.addEventListener('submit', function gotoHome(){
    window.location.href ="home.html";
    alert("Your order has been placed successfully!")
});


