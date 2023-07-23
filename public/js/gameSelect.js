const highscoreBtnHandler = async (event) => {
    event.preventDefault();

    const mapId = event.srcElement.attributes.maze_id.nodeValue
    console.log(mapId)

    document.location.replace(`/highscores/${mapId}`)
}

const highscoreBtns = document.querySelectorAll(".highscoreBtn").forEach(btn => 
    btn.addEventListener('click', highscoreBtnHandler))


const playBtn = document.querySelector(".playBtn")
playBtn.addEventListener('click', timer()) 
