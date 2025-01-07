const scriptURL = 'https://script.google.com/macros/s/AKfycbwjvPdEwOsDFsvwib-rx2Zzm5sH5hbiLpHQj1vmgSG7BD7BsOhkmk9U2NiZOQ6RQLLZ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, {method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your order is successfully submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
