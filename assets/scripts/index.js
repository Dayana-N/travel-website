const bookPass = document.getElementById('bookPass');
const bookPassSection = document.getElementsByClassName('dubai-pass')[0];

bookPass.addEventListener('click', (e) => {
    localStorage.setItem('bookPass', 'true');

    const alertMessage = document.createElement('div');
    alertMessage.classList.add('alert', 'alert-success', 'alert-dismissible', 'fade', 'text-center', 'show');
    alertMessage.role = 'alert';
    alertMessage.id = 'alert';
    alertMessage.innerHTML = `
     Pass added to shoppig cart
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    console.log(alertMessage);
    bookPassSection.append(alertMessage);
});
