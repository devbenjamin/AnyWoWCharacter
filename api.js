const baseURL = 'https://us.api.battle.net/wow/character/detheroc/unread?locale=en_US';
const key = 'vs54zh8bc83quqnpewyzkdwxpj74db3k';

let url;

// const search = document.querySelector('.search');
// const searchForm = document.querySelector('form');
// const submitBtn = document.querySelector('.submit');
// const profileBtn = document.querySelector('#log-profile');
const profile = document.querySelector('#get-profile');

profile.addEventListener('click', fetchResults);
//searchForm.addEventListener('submit', fetchResults);
//const nextBtn = document.querySelector('.next');

function fetchResults(e) {
    e.preventDefault();
    url = baseURL + '&apikey=' + key;
    // url = '';

    fetch(url)
        .then(function (result) {
            return result.json();
        })
        .then(function (json) {
            displayResults(json);
        })
};

function displayResults(json) {

    let name = document.createElement('h1');
    // let realm = document.createElement('h2');
    // let charClass = document.createElement('h3');
  //  console.log(detheroc/247/39049207-avatar.jpg)
    console.log('Name: ', json.name);
    console.log('Realm: ', json.realm);
    console.log('Class: ', json.class);
    console.log('Race: ', json.race);
    console.log('Gender: ', json.gender);
    console.log('Level: ', json.level);
    console.log('Faction: ', json.faction);
    console.log('Honorable Kills: ', json.totalHonorableKills);
}

// console.log(json);


