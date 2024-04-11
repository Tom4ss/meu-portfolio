
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwsEYSZoSIFYB7ZrwM6A1Aj5aclilTIKkfrb1EevTIiC4cvBO-Sj7GbBLeF29iibqEV/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          msg.innerHTML = "Mensagem enviada com sucesso!"
          setTimeout(function() {
            msg.innerHTML = ""
          }, 5000)
          form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
