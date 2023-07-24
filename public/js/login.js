const loginHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#loginEmail').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();
  
    if (email && password) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.querySelector('#loginModal').classList.remove('is-active')
        document.querySelector('#loginEmail').value = '';
        document.querySelector('#loginPassword').value = '';
        fetchLoginStatus();
      } else {
        alert('Failed to log in');
      }
    }
  };

const signupHandler = async (event) => {
  event.preventDefault();

  const newPlayerData = {
    user_name: document.querySelector('#signupName').value.trim(),
    email: document.querySelector('#signupEmail').value.trim(),
    password: document.querySelector('#signupPassword').value.trim(),
  }

  response = await fetch('/api/user/newUser', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPlayerData)
  })

  if (response.ok) {
    document.querySelector('#signupModal').classList.remove('is-active')
  }
}

const loginCancelBtns = document.querySelectorAll('.loginCancel').forEach(btn =>
  btn.addEventListener('click', function() {
  document.querySelector('#loginModal').classList.remove('is-active');
  document.querySelector('#loginEmail').value = '';
  document.querySelector('#loginPassword').value = '';
}));

const signupCancelBtns = document.querySelectorAll('.signupCancel').forEach(btn =>
  btn.addEventListener('click', function() {
  document.querySelector('#signupModal').classList.remove('is-active');
  document.querySelector('#signupName').value = '';
  document.querySelector('#signupEmail').value = '';
  document.querySelector('#signupPassword').value = '';
}));

document.querySelector('#loginLink').addEventListener('click', function() {
  document.querySelector('#signupModal').classList.remove('is-active');
  document.querySelector('#signupName').value = '';
  document.querySelector('#signupEmail').value = '';
  document.querySelector('#signupPassword').value = '';
  document.querySelector('#loginModal').classList.add('is-active');
});

document.querySelector('#signupLink').addEventListener('click', function() {
  document.querySelector('#loginModal').classList.remove('is-active');
  document.querySelector('#loginEmail').value = '';
  document.querySelector('#loginPassword').value = '';
  document.querySelector('#signupModal').classList.add('is-active');
});

document.querySelector('#loginBtn')
        .addEventListener('click', loginHandler)

document.querySelector('#signupBtn')
        .addEventListener('click', signupHandler)