const loginBtn = document.querySelector('#login-outNavBtn');
const saveHighscoreBtn = document.querySelector('#save-loginBtn')

const fetchLoginStatus = async () => {
      const response = await fetch('/api/loginstatus', {
            method: 'POST',
      })

      if (response.ok){
            loginBtn.attributes.loginstatus.nodeValue = "true";
            loginBtn.textContent = 'Logout';

            saveHighscoreBtn.attributes.loginstatus.nodeValue = "true";
            saveHighscoreBtn.textContent = 'Save HighScore'
      } else {
            loginBtn.attributes.loginstatus.nodeValue = "false";
            loginBtn.textContent = 'Login';

            saveHighscoreBtn.attributes.loginstatus.nodeValue = "false";
            saveHighscoreBtn.textContent = 'Login';
      }
};

const loginNavBtnHandler = async (event) => {
      document.querySelector('#loginModal').classList.add('is-active')
};

const homeNavBtnHandler = async (event) => {
      document.location.href = '/'
};

const highscoreNavBtnHandler = async (event) => {
      document.location.href = '/highscores'
};

const logoutNavBtnHandler = async () => {
      console.log('button pressed')
      const response = await fetch('/api/user/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
            // document.location.reload();
      } else {
            alert('Failed to log out.')
      }
      fetchLoginStatus();
};

fetchLoginStatus()

document.querySelector('#login-outNavBtn')
      .addEventListener('click', function() {
            if (loginBtn.attributes.loginstatus.nodeValue == "true") logoutNavBtnHandler()
            else loginNavBtnHandler()
      });

try {
      document.querySelector('#homeNavBtn')
            .addEventListener('click', homeNavBtnHandler)
} catch (err) {

}

try {
      document.querySelector('#highscoresNavBtn')
            .addEventListener('click', highscoreNavBtnHandler)
} catch (err) {

}
