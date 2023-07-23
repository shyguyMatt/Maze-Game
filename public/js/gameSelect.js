const highscoreBtnHandler = async (event) => {
    event.preventDefault();

    const mapId = event.srcElement.attributes.maze_id.nodeValue
    console.log(mapId)

    document.location.href = `/highscores/${mapId}`;
}

const playBtnHandler = async (event) => {
    event.preventDefault();

    const mapId = event.srcElement.attributes.maze_id.nodeValue
    console.log(mapId)

    let response = await fetch(`/api/goToMap/${mapId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
    
    console.log(response)

    response = await fetch(`/room/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    console.log(response)

    if (response.ok) {
        document.location.href = `/room`
    }
}

const highscoreBtns = document.querySelectorAll(".highscoreBtn").forEach(btn => 
    btn.addEventListener('click', highscoreBtnHandler));

const playBtns = document.querySelectorAll(".playBtn").forEach(btn => 
    btn.addEventListener('click', playBtnHandler));