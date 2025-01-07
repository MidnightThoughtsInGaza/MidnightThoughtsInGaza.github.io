const scriptURL = 'https://script.google.com/macros/s/AKfycbwc2MBrdr4fhbpVGC7PodMGDoiE14wO9g7tYCKGIhJDw-nD9T-doqTQILfIeTeVsn6sBg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, {method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your order is successfully submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
