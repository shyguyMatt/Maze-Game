const loginBtnHandler = async (event) => {
    event.preventDefault();
    console.log('button pressed')

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
        document.location.href =  '/';
        alert('successfully logged in')
      } else {
        alert('Failed to log in');
      }
    }
  };

document.querySelector('#loginBtn')
        .addEventListener('click', loginBtnHandler)