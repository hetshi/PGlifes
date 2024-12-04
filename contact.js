document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form from submitting immediately
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Simple client-side validation
      if (name === '' || email === '' || message === '') {
        formStatus.textContent = 'Please fill out all fields.';
        formStatus.classList.add('error');
        formStatus.classList.remove('success');
        return;
      }
  
      // Simulating form submission (you would integrate with a server-side backend)
      formStatus.textContent = 'Thank you for contacting us! Your message has been sent.';
      formStatus.classList.add('success');
      formStatus.classList.remove('error');
  
      // Clear the form
      form.reset();
    });
  });
  