function showMessage() {
  alert("Welcome! Let's get started 🚀");
}

document.getElementById("contactForm").addEventListener("submit", function(event){
  event.preventDefault();
  alert("Your message has been sent!");
  this.reset();
});
