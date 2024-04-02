// Function to show a Bootstrap modal for bookModal
function popupFunction(bookModal) {
    var myModal = new bootstrap.Modal(document.getElementById('bookModal'), {
      // creates a JavaScript object (myModal) that represents
      //  the Bootstrap modal with the ID 'bookModal'. 
      //  This object (myModal) can then be used to control 
      //  the behavior of the modal, such as showing or hiding
      //  it, programmatically. In the provided code, 
      // it is used to show the modal with the line 
      // myModal.show(); later in the code.
      keyboard: false
    });
    myModal.show();
  }
  
  
  function popupFunction_one(bookModal_one) {
    var Modal = new bootstrap.Modal(document.getElementById('bookModal_one'), {
      keyboard: false
    });
  Modal.show();
  }


  function popupFunction_two(bookModal_two) {
    var Modal1 = new bootstrap.Modal(document.getElementById('bookModal_two'), {
      keyboard: false
    });
  Modal1.show();
  }


  function popupFunction_three(bookModal_three) {
    var Modal2 = new bootstrap.Modal(document.getElementById('bookModal_three'), {
      keyboard: false
    });
  Modal2.show();
  }

  function popupFunction_four(bookModal_four) {
    var Modal3 = new bootstrap.Modal(document.getElementById('bookModal_four'), {
      keyboard: false
    });
  Modal3.show();
  }


  function popupFunction_five(bookModal_five) {
    var Modal4 = new bootstrap.Modal(document.getElementById('bookModal_five'), {
      keyboard: false
    });
  Modal4.show();
  }


  function popupFunction_six(bookModal_six) {
    var Modal5 = new bootstrap.Modal(document.getElementById('bookModal_six'), {
      keyboard: false
    });
  Modal5.show();
  }


  function popupFunction_seven(bookModal_seven) {
    var Modal5 = new bootstrap.Modal(document.getElementById('bookModal_seven'), {
      keyboard: false
    });
  Modal5.show();
  }

  // Function to redirect to a different URL (index1.html#)
  function myFunction() {
    location.replace("http://127.0.0.1:5500/index1.html#")
  }