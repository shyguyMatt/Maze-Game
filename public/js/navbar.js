const loginNavBtnHandler = async (event) => {
      document.location.href = '/login'
};

const homeNavBtnHandler = async (event) => {
      document.location.href = '/'
};

const highscoreNavBtnHandler = async (event) => {
      document.location.href = '/highscores'
};

document.querySelector('#loginNavBtn')
        .addEventListener('click', loginNavBtnHandler)

document.querySelector('#homeNavBtn')
        .addEventListener('click', homeNavBtnHandler)

document.querySelector('#highscoresNavBtn')
        .addEventListener('click', highscoreNavBtnHandler)