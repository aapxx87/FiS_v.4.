const modal = document.querySelector('#myModal')

const btn = document.querySelector('#btnSmod')

const span = document.querySelector('.modal-close')

btn.onclick = function() {
  modal.style.display = "block"
}

span.onclick = function() {
  modal.style.display = "none"
}

window.onclick = function(event) {
  if(event.target == modal) {
    modal.style.display = "none"
  }
}
