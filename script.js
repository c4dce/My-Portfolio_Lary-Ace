
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  function showFeedback(message, color) {
    feedback.textContent = message;
    feedback.style.color = color;
    feedback.classList.add('visible');
  }

  function hideFeedback() {
    feedback.classList.remove('visible');
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if(name === '' || email === '' || message === '') {
      showFeedback('Please fill out all fields.', 'red');
      return;
    }

    showFeedback('Sending message...', '#144d8b');

    setTimeout(() => {
      showFeedback('Thank you for reaching out! I will get back to you soon.', '#144d8b');
      form.reset();
      setTimeout(() => {
        hideFeedback();
      }, 3500);
    }, 1500);
  });
