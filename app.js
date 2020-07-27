console.log("Loaded Up");

//Clears content of input fields.

    $('.send-btn').click(function() {
        if ( $('.textbox').val() == '' ) {
          $('#submit-msg').html("You need to fill all fields.")
          $('.textbox').val('')
          $('.msg').val('')
        }else {
          $('#submit-msg').html("We will get back to you as soon as possible.")
          $('.textbox').val('')
          $('.msg').val('')   
        }
        
    console.log("All done")   
    });

//jQuery UI- Progressbar---------------

$( function() {
  $( "#bar" ).progressbar({
      value: 63
  });
} );