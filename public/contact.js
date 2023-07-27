emailjs.init("I94Plb7JWPDHKXocV");

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the user's input from the form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Send the email using EmailJS
  emailjs
    .send("service_df7stus", "template_iqwu7jn", {
      to_email: "kevinyuzer0@gmail.com",
      from_name: name,
      from_email: email,
      message: message,
    })
    .then(function (response) {
      console.log("Email sent successfully!", response);
      // Show the success message to the user
      const confirmationMessage = document.getElementById("confirmation-message");
      confirmationMessage.innerText = "Thanks for contacting us! We will reach out shortly.";
      confirmationMessage.classList.add("show-message");
      // Hide the message after 5 seconds
      setTimeout(function () {
        confirmationMessage.classList.remove("show-message");
        confirmationMessage.innerText = ""; // Clear the message text
      }, 5000);
    })
    .catch(function (error) {
      console.log("Failed to send email.", error);
      // Show the error message to the user
      const confirmationMessage = document.getElementById("confirmation-message");
      confirmationMessage.innerText = "Failed to send email. Please try again later.";
      confirmationMessage.classList.add("show-message");
      // Hide the message after 5 seconds
      setTimeout(function () {
        confirmationMessage.classList.remove("show-message");
        confirmationMessage.innerText = ""; // Clear the message text
      }, 5000);
    });

  // Clear the form fields after submission 
  document.getElementById("contact-form").reset();
});
