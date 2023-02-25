const loadData = () => {
  const input = document.getElementById("search-field").value;
  const URL = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${input}`;
  fetch(URL)
    .then((res) => res.json())
    .then((players) => displayData(players.player));
};

const displayData = (data) => {
  const playersContainer = document.getElementById("players-container");
  playersContainer.innerHTML = '';
  document.getElementById("search-field").value = '';
  data.forEach((player) => {
    const div = document.createElement("div");
    const {
      strPlayer,
      strThumb,
      strNationality,
      idSoccerXML,
      strTeam,
      dateBorn,
      strBirthLocation,
      strWeight,
    } = player;
    div.innerHTML = `<div class="card w-96 lg:w-80 bg-base-100 shadow-xl">
    <figure><img src="${strThumb ? strThumb : "https://picsum.photos/384/384.jpg"}" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">${strPlayer}</h2>
    <p>${strNationality}</p>

    <p>League Team : ${strTeam}</p>

    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
    <label onclick="displayModal()" for="player-info" class="btn btn-info">Info</label> 
    </div>
  </div>
</div>
        `;
    playersContainer.appendChild(div);
  });
};

loadData()
//  Modal side