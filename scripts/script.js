/*
  Name: Matthew Davis
  Date: 12 / 11 / 2022
  File Name: script.js
*/

/* Window alert on form button press (Schedule.html) */

function myFunction() {
  if (document.getElementById("name").value == "") {
    alert("Please enter your first and last name (John Arbuckle).");
    return false;
  }
  if (document.getElementById("pname").value == "") {
    alert("Please enter your pet's name (Fido).");
    return false;
  }
  if (document.getElementById("age").value == "") {
    alert("Please enter your pet's age (2 years / 2 months).");
    return false;
  }
  if (document.getElementById("species").value == "") {
    alert("Please enter your pet's species (dog / cat).");
    return false;
  }
  if (document.getElementById("mail").value == "") {
    alert("Please provide an email address.");
    return false;
  }
  if (document.getElementById("phone").value == "") {
    alert("Please provide a phone number.");
    return false;
  }
  else {
    alert("Thank you. Your appointment form is currently being processed. Heads to Tails will contact you within 1-2 business days.");
    return true;
  }
}
