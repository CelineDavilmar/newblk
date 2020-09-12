import React from 'react';

const Password = () => {
    return (

                  <div class="panel-body">
                    <div class="text-center">

                      <h3 class="text-center">Forgot Password?</h3>

                    <div class="my-form">

                 <form name="my-form" onsubmit="return validform()" action="success.php" method="">
                   <div class="form-group row">
                     <label for="email_address" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                       <div class="col-md-6">
                         <input type="text" id="email_address" class="form-control" name="email-address"/>
                       </div>
                       </div>

                  <div class="form-group">
                    <input name="recover-submit" class="btn btn-lg btn-primary btn-block" value="Reset Password" type="submit"/>
                  </div>
                    <input type="hidden" class="hide" name="token" id="token" value=""/>
                </form>

               </div>
             </div>
           </div>

    );
}

export default Password;
