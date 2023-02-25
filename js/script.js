const loadData = () => {
  const input = document.getElementById("search-field").value;
  const URL = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${input}`;
  fetch(URL)
    .then((res) => res.json())
    .then((players) => displayData(players.player));
};

const displayData = (data) => {
  const playersContainer = document.getElementById("players-container");
  playersContainer.innerHTML = "";
  document.getElementById("search-field").value = "";
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
      idPlayer,
    } = player;
    div.innerHTML = `<div class="card w-96 lg:w-80 bg-base-100 shadow-xl">
    <figure><img src="${
      strThumb ? strThumb : "https://picsum.photos/384/384.jpg"
    }" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">${strPlayer}</h2>
    <p class="font-semibold">${strNationality}</p>
    <p>League Team : ${strTeam}</p>
    <p>Date Of Birth : ${dateBorn} birth location : ${strBirthLocation}</p>
    
    
    <div class="card-actions justify-end">
    <button onclick="displayModal(${idPlayer})"><a href="#my-modal-2" class="btn btn-info">Info</a></button>
    </div>
  </div>
</div>
        `;
    playersContainer.appendChild(div);
  });
};


// display modal value-----
// search for id
// const displayModal = (id) => {
//   const URL = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`;
//   fetch(URL)
//     .then((res) => res.json())
//     .then((player) => loadModalData(player.players[0]));
// };

// const loadModalData = (data) => {
//     const modalContainer = document.getElementById('modal-container');
//     modalContainer.innerHTML = `
//     <div class="modal" id="my-modal-2">
//     <div class="modal-box">
//       <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
//       <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
//       <div class="modal-action">
//        <a href="#" class="btn">Yay!</a>
//       </div>
//     </div>
//   </div>
//     `
    
// };

loadData();