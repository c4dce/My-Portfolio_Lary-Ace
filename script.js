
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if(name === '' || email === '' || message === '') {
      feedback.style.color = 'red';
      feedback.textContent = 'Please fill out all fields.';
      feedback.style.display = 'block';
      return;
    }

    
    feedback.style.color = '#144d8b';
    feedback.textContent = 'Sending message...';
    feedback.style.display = 'block';

    setTimeout(() => {
      feedback.textContent = 'Thank you for reaching out! I will get back to you soon.';
      form.reset();
    }, 1500);
  });