const button = document.querySelector('#send')

button.addEventListener("click", function (e) {
  e.preventDefault()

  let name = document.querySelector('#name-input').value
  let year = document.querySelector('#year-input').value
  let linguage = document.querySelector('#linguage-input').value

  alert(`"Olá ${name}, você tem ${year} anos e já está aprendendo ${linguage}!"`)
})