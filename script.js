
// Function for form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Please fill in all fields!');
    return;
  }

  alert('Thank you for your message! I will get back to you soon.');
  // Here, you can add code to send the form data to a server if needed.
});
