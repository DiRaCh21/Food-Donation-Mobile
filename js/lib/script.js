$(document).ready(function() {
    // Show/hide pages based on navigation
    $("#donateButton").click(function() {
      $("#homePage").hide();
      $("#donationFormPage").show();
    });
  
    // Other navigation buttons and interactions
    $("#homeButton").click(function() {
      $("#donationFormPage").hide();
      $("#homePage").show();
    });
  });