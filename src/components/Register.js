
import React from 'react';

const Register = () => {

function userName(){
  var nameInput = document.getElementById('full_name').value;
  var userMail = document.getElementById('email_address').value;
  var usersId = document.getElementById('regUsername').value;
  var userPas = document.getElementById('regPassword').value;
  var phoneNum = document.getElementById('phone_number').value;
  var userAddy = document.getElementById('present_address').value;
  var result = document.getElementById('userinput').value;

    if (usersId.length < 4) {
      result.textContent = 'Username must contain at less 4 characters';
    } else {
      result.textContent = 'Your account has been created!'
    }

    if (userPas.length < 5) {
      result.textContent = 'Password must contain at least 5 characters';
    } else {
      result.textContent = 'Your account has been created!'
    }

    if (phoneNum.length === 10) {
      result.textContent = 'Input a correct phone number.';
    } else {
      result.textContent = 'Your account has been created!'
    }

    var submitButton = document.getElementById('userinput');
    submitButton.addEventListener('click', userName, false);
  }
  //var submitButton = document.getElementById('userinput');
  //submitButton.addEventListener('click', userName, false);

return(

<html>
  <title>Register</title>
    <body>
        <div class="text-center">
              <div>
                <h1 class="text-center">Register</h1>
              </div>

                  <div class="card-body">

                    <form name="my-form" onsubmit="User()" action="success.php" method="getElementById('id')">
                      <div class="form-group row">
                        <label for="full_name" class="col-md-4 col-form-label text-md-right">Full Name</label>
                      <div class="col-md-6">
                        <input type="text" id="full_name" class="form-control" name="full-name" required/>
                      </div>
                      </div>

                      <div class="form-group row">
                        <label for="email_address" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                          <div class="col-md-6">
                            <input type="text" id="email_address" class="form-control" name="email-address" required/>
                          </div>
                          </div>

                        <div class="form-group row">
                          <label for="Username" class="col-md-4 col-form-label text-md-right">User Name</label>
                            <div class="col-md-6">
                              <input type="text" id="regUsername" class="form-control" name="username" required/>
                            </div>
                        </div>

                        <div class="form-group row">
                          <label for="Password" class="col-md-4 col-form-label text-md-right">Password</label>
                            <div class="col-md-6">
                              <input type="text" id="regPassword" class="form-control" name="password" required/>
                            </div>
                        </div>

                        <div class="form-group row">
                          <label for="phone_number" class="col-md-4 col-form-label text-md-right">Phone Number</label>
                            <div class="col-md-6">
                              <input type="text" id="phone_number" class="form-control" required/>
                            </div>
                        </div>

                      <div class="form-group row">
                        <label for="present_address" class="col-md-4 col-form-label text-md-right">Present Address</label>
                          <div class="col-md-6">
                            <input type="text" id="present_address" class="form-control" required/>
                          </div>
                      </div>

                      <div class="col-md-6 offset-md-4">
                        <button type="button" id='userinput' class="btn btn-primary" onClick="userName()" href="/LoginSuccess">Register</button>
                      </div>
                  </form>

          </div>
        </div>
   </body>
</html>
  );
};

export default Register;
