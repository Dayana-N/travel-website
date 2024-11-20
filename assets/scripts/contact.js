const contactFormContainer = document.getElementById('contact-form-container');
const contactForm = document.getElementById('contactForm');
const formSuccessMessage = document.getElementsByClassName('form-submitted')[0];
function submitContactForm() {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        contactForm.classList.add('hide');
        formSuccessMessage.classList.remove('hide');
        contactFormContainer.classList.add('contact-form-container');
    });
}

submitContactForm();
