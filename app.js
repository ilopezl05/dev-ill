console.log("Loaded Up");

//Clears content of input fields.

      $('.send-btn').click(function() {
          if ( $('.textbox').val() == '' ) {
            $('#submit-msg').html("You need to fill all fields.")
          }else {
            $('#submit-msg').html("We will get back to you as soon as possible.")  
          }

         console.log("All done")   
      });
