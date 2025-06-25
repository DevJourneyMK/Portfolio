// Load EmailJS SDK
(function () {
  emailjs.init("hUIEGcifjD_Yr91OT"); // Replace with your actual Public Key
})();

// Add form submit event listener
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_v2f0bwz", "template_22pkh86", form)
      .then(function () {
        alert("✅ Message sent successfully!");
        form.reset(); // Clear the form
      }, function (error) {
        console.error("❌ Error sending email:", error);
        alert("Something went wrong. Please try again later.");
      });
  });
});
