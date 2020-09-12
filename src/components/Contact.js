import React from 'react';

const Contact = () => {
    return (

      <html>

        <title> Contact Us! </title>
          <script src="..\components\Contact.js"></script>
            <div>
              <form>
                <div class="form-group row">
                  <label for="full_name" class="col-md-4 col-form-label text-md-right"><h3>Full Name</h3></label>
                    <div class="col-md-6">
                      <input type="text" id="full_name" class="form-control" name="full-name" required/>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="email_address" class="col-md-4 col-form-label text-md-right"><h3>E-Mail Address</h3></label>
                      <div class="col-md-6">
                        <input type="text" id="email_address" class="form-control" name="email-address" required/>
                      </div>
                  </div>

                  <div>
                    <input id="message" name="message" class="span6 rounded-0" placeholder="Your Message" rows="5"></input>
                  </div>

                  <div class="col-md-6 offset-md-4">
                    <button type="submit" class="btn btn-primary">Send</button>
                  </div>
              </form>
            </div>
          </html>
    );
}

export default Contact;
