const getEvent = async () => {
  tile = await fetch('/api/getTile', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json'}
  }).then( function (tile) {
    return tile.json()
  }).then( function (tile) {
    let tileEvent = tile.tiles[0].event
    return tileEvent
  }).then( function (tileEvent) {
    if (!tileEvent) return;

    switch (tileEvent) {
      case 'finish':
        playFinish();
        break;
    }
  });
}
// Events 
  //Finish Line Event
const playFinish = async (tileEvent) => {
  await fetch(`/api/finish`,{
    method: 'POST',
    headers: { 'Content-Type': 'application/json'}
  }).then((response) => {
      return response.json()
  }).then((response) => {
    document.querySelector('#finalTime').textContent = dayjs(response.time).format('mm:ss.SSS')
  })

  fetchLoginStatus();
  document.querySelector('#save-loginBtn').attributes.disable.nodeValue = "false"
  document.querySelector('#highscoreModal').classList.add('is-active');
}

// Movement Handlers
  // North Handler
const goNorthHandler = async (event) => {
    console.log('go north')

    await fetch('/api/goNorth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

    await fetch(`/room/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    document.location.reload();
  };

  // East Handler
const goEastHandler = async (event) => {
    console.log('go east')

    await fetch('/api/goEast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

    await fetch(`/room/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    document.location.reload();
  };

  // South Handler
const goSouthHandler = async (event) => {
    console.log('go south')

    await fetch('/api/goSouth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

    await fetch(`/room/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    document.location.reload();
  };

  // West Handler
const goWestHandler = async (event) => {
    console.log('go west')

    await fetch('/api/goWest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

    await fetch(`/room/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    document.location.reload();
  };


const saveHighscore = async () => {
    document.querySelector('#save-loginBtn').classList.add('is-loading')
    document.querySelector('#save-loginBtn').attributes.disable.nodeValue = "true";
    await fetch('/api/savescore', {
      method: 'POST',
    })

    document.querySelector('#save-loginBtn').classList.remove('is-loading')
    document.querySelector('#save-loginBtn').textContent = 'Score Saved!'
}

getEvent();

try {
    document.querySelector('#northBtn')
            .addEventListener('click', goNorthHandler);
} catch(err) {

}

try {
    document.querySelector('#eastBtn')
            .addEventListener('click', goEastHandler);
} catch(err) {
    
}

try {
    document.querySelector('#southBtn')
            .addEventListener('click', goSouthHandler);
} catch(err) {
    
}

try {
    document.querySelector('#westBtn')
            .addEventListener('click', goWestHandler);
} catch(err) {
    
}

document.querySelector('#save-loginBtn')
        .addEventListener('click', function() {
          if (document.querySelector('#save-loginBtn').attributes.disable.nodeValue == "true") return;
          if (document.querySelector('#save-loginBtn').attributes.loginstatus.nodeValue == "true") saveHighscore();
          else loginNavBtnHandler()
        })

document.querySelector('#highscoreReturnBtn')
        .addEventListener('click', function() {
          document.location.replace('/');
        })
