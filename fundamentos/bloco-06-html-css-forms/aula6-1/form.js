window.onload = function() {
  const send = document.querySelector('#send');
  send.addEventListener('click', submit);
}


function error() {
  const fullname = document.querySelector('#name').value.length;
  const invalidName = fullname < 10 || fullname > 40;
  const email = document.querySelector('#email').value.length;
  const invalidEmail = email < 10 || email > 50;
  const answer= document.querySelector('answer').value.length;
  const invalidAnswer = answer > 500;
    if (invalidName || invalidEmail || invalidAnswer) {
      return false;
  } else {
      return true;
  }
}

function submit(event) {
  event.preventDefault();
  const validation = error();
  if (validation === false) {
    alert('Dados Inválidos!');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso Trybe Trip.');
  }
}