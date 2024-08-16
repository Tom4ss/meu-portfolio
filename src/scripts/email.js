const scriptURL = 'https://script.google.com/macros/s/AKfycbwsEYSZoSIFYB7ZrwM6A1Aj5aclilTIKkfrb1EevTIiC4cvBO-Sj7GbBLeF29iibqEV/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();

    const button = document.querySelector('.btn2');
    button.classList.add('loading');

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Mensagem enviada com sucesso!";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
            button.classList.remove('loading');
        })
        .catch(error => {
            msg.innerHTML = "Erro ao enviar mensagem. Tente novamente.";
            console.error('Error!', error.message);
            button.classList.remove('loading');
        });
});

function openmenu() {
    document.getElementById("sidemenu").style.right = "0";
}

function closemenu() {
    document.getElementById("sidemenu").style.right = "-200px";
}
