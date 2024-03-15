const form = document.getElementById('form-valida');
const num1 = document.getElementById('numero-A');
const num2 = document.getElementById('numero-B');


function validaNumeroB(num1, num2) {
    if (num2 > num1) {
        return true;
    } else {
        return false;
    }
}

let formEValido = true;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const mensagemSucesso = `O primeiro número é: ${num1.value}, o segundo número é: ${num2.value}`;

    formEValido = validaNumeroB(parseFloat(num1.value), parseFloat(num2.value));
    
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    } else {
        num2.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
});

num2.addEventListener('keyup', function(e) {
    formEValido = validaNumeroB(parseFloat(num1.value), parseFloat(num2.value));

    if (!formEValido) {
        num2.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        num2.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});