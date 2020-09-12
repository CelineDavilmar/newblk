import React from 'react';

const Login = () => {

const attempt = 3; // Number of attempts
const reg = require('./Register'); // Using Register.js to import users info

//creating the log in function
function validate(){
  var username = document.getElementById('logUsername').value;
  var username1 = document.getElementsByName(reg.regUsername).value;
  var password = document.getElementById('logPassword').value;
  var password1 = document.getElementById(reg.regPassword).value;
  var loginButton = document.getElementById('log');

  //Checking username and password
  if (username === username1 & password === password1){
    alert ("Welcome to BLK.");
    window.location = "LoginSuccess.js"
    return false;
  } else {
    attempt-- //Going down by 1
    alert("You have "+attempt+" attempt");

    //Rejection for failed attempts
    if (attempt === 0){
    document.getElementById('logUsername').disabled = true;
    document.getElementById('logPassword').disabled = true;
    document.getElementById('log').disabled = true;
    return false;
   }
  }
}

return (

<html>
  <title>LogIn</title>
    <body>
      <div class="wrapper fadeInDown">
        <div id="formContent">

          <div class="fadeIn first">
            <img src="https://pngimg.com/uploads/letter_b/letter_b_PNG46.png" id="icon" alt="User Icon" />
          </div>


          <form method="post" action="">
            <input type="text" id="logUsername" class="fadeIn second" name="login" placeholder="Username" required/>
            <input type="text" id="logPassword" class="fadeIn third" name="login" placeholder="Password" required/>
              <div class="checkbox">
                <label><input type="checkbox" name="remember"/> Remember me </label>
              </div>
            <input id="log" type="submit" class="fadeIn fourth" value="Log In" href="/LoginSuccess"/>
          </form>


          <div id="formFooter">
            <a class="underlineHover" href="/Password"> Forgot Password? </a>
              <h2>/</h2>
            <a class="underlineHover" href="/Register"> Register </a>
          </div>

          </div>
          <body>
            <script src="/components/Login.js" charset="utf-8"></script>
          </body>
        </div>
      </body>
</html>
  );
}
export default Login;
