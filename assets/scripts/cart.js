document.addEventListener('DOMContentLoaded', () => {
    const cartContent = document.getElementsByClassName('cart')[0];
    const emptyCart = document.getElementsByClassName('cart-empty')[0];
    const cartPayment = document.getElementsByClassName('card-pay')[0];
    const bookPass = localStorage.getItem('bookPass');

    if (bookPass === 'true') {
        emptyCart.classList.add('hide');
        cartContent.classList.remove('hide');
        cartPayment.classList.remove('hide');
    } else {
        emptyCart.classList.remove('hide');
        cartContent.classList.add('hide');
        cartPayment.classList.add('hide');
    }
});

function deleteItem() {
    localStorage.removeItem('bookPass');
}
