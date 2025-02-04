import dataFunctions from './data.js';
import data from './data/athletes/athletes.js';

const allAthletes=data.athletes;

const allTeams= dataFunctions.showAllTeams(allAthletes);
const dropDownListTeam= document.getElementById('team');
for(let i=0; i<allTeams.length; i++){
  const option= document.createElement('option');
  option.value= allTeams[i];
  option.text= allTeams[i];
  dropDownListTeam.innerHTML += option.outerHTML;
}


const allSports=dataFunctions.showAllSports(allAthletes);
const dropDownListSport= document.getElementById('sport');
for(let i=0; i<allSports.length; i++){
  const option= document.createElement ('option');
  option.value= allSports[i];
  option.text= allSports[i];
  dropDownListSport.innerHTML += option.outerHTML;
}

function showAllCards (athletesList){
  const root = document.getElementById('root');

  

  athletesList.forEach( function (athlete) {
    const card= document.createElement('div');
    card.className= 'card';
    const content= document.createElement('div');
    content.className= 'content';

    const name= document.createElement('p');
    name.className = 'athletesNameOnCard';
    name.innerText= 'Nombre: '+athlete.name;
    content.appendChild(name);

    const gender= document.createElement('p');
    gender.innerText= 'Género: '+athlete.gender; 
    content.appendChild(gender);

    const height= document.createElement('p');
    height.innerText= 'Altura: '+athlete.height;
    content.appendChild(height);

    const weight= document.createElement('p');
    weight.innerText= 'Peso: '+athlete.weight;
    content.appendChild(weight);

    const sport= document.createElement('p');
    sport.innerText= 'Deporte: '+athlete.sport;
    content.appendChild(sport);

    const team= document.createElement('p');
    team.innerText= 'Equipo: '+athlete.team;
    content.appendChild(team);

    const noc= document.createElement('p');
    noc.innerText= 'País: '+athlete.noc;
    content.appendChild(noc);

    const age= document.createElement('p');
    age.innerText= 'Edad: '+athlete.age;
    content.appendChild(age);

    const event= document.createElement('p');
    event.innerText= 'Disciplina: '+athlete.event;
    content.appendChild(event);

    const medal= document.createElement('p');
    medal.innerText= 'Medalla: '+athlete.medal;
    content.appendChild(medal);

    card.appendChild(content);
    root.appendChild(card);
  });
}

const root = document.getElementById('root');
showAllCards(allAthletes);

const selectedGender = document.getElementById('gender');

selectedGender.addEventListener('change', ()  => {
  const selectedOption = selectedGender.value;
  const deleteAll = root.innerHTML= "";
  const femaleList = dataFunctions.femaleFilter(allAthletes);
  const maleList = dataFunctions.maleFilter(allAthletes);

  switch (selectedOption){

  case 'femenino':       
    femaleList;
    deleteAll;
    showAllCards(femaleList);
    break;
  case 'masculino':
    maleList;
    deleteAll;
    showAllCards(maleList);
    break;
  case 'showAll':
    deleteAll;
    showAllCards(allAthletes);
    break;
  }
} );

const selectedTeam = document.getElementById('team');

selectedTeam.addEventListener('change', () => {
  const selectedOption = selectedTeam.value; 

  if (selectedTeam.value === "showAll"){
    root.innerHTML= "";
    showAllCards(allAthletes);
  } else {
    const teamList = dataFunctions.teamFilter(allAthletes, selectedOption);
    root.innerHTML= "";
    showAllCards(teamList);
  }
});

const selectedSport = document.getElementById('sport');

selectedSport.addEventListener('change', () => {
  const selectedOption = selectedSport.value;

  if (selectedSport.value === "showAll"){
    root.innerHTML= "";
    showAllCards(allAthletes);
  } else {
    const sportList = dataFunctions.sportFilter(allAthletes, selectedOption);
    root.innerHTML= "";
    showAllCards(sportList);
  }
});

const selectedOrder = document.getElementById('order');

selectedOrder.addEventListener('change', () => {
  const selectedOption = selectedOrder.value;
  const deleteAll = root.innerHTML= "";
  let ageAscendant=[];
  let ageDescendant=[];
  let heightAscendant=[];
  let heightDescendant = [];
  let weightAscendant = [];
  let weightDescendant = [];

  switch (selectedOption){
  case 'edad-ascendente':
    ageAscendant=dataFunctions.orderAgeAscendant(allAthletes);
    deleteAll;
    showAllCards(ageAscendant);
    break;

  case 'edad-descendente':
    ageDescendant=dataFunctions.orderAgeDescendant(allAthletes);
    deleteAll;
    showAllCards(ageDescendant);
    break;

  case 'altura-ascendente':
    heightAscendant=dataFunctions.orderHeightAscendant(allAthletes);
    deleteAll;
    showAllCards(heightAscendant);
    break;

  case 'altura-descendente':
    heightDescendant=dataFunctions.orderHeightDescendant(allAthletes);
    deleteAll;
    showAllCards(heightDescendant);
    break;

  case 'peso-ascendente':
    weightAscendant=dataFunctions.orderWeightAscendant(allAthletes);
    deleteAll;
    showAllCards(weightAscendant);
    break;

  case 'peso-descendente':
    weightDescendant=dataFunctions.orderWeightDescendant(allAthletes);
    deleteAll;
    showAllCards(weightDescendant);
    break;   
  }

});

const searchBar= document.getElementById('searchBar');

searchBar.addEventListener('keyup',(e) =>{
  const text = e.target.value.toLowerCase();
  const filteredAthletes = allAthletes.filter(athlete =>{
    return athlete.name.toLowerCase().includes(text);
  })
  root.innerHTML="";
  showAllCards(filteredAthletes);
});


function createTableTopTen(allAthletes){
  const allAthletesByTeam= dataFunctions.athletesByTeam(allAthletes);
  const medalsByTeam=dataFunctions.totalMedalsByTeam(allAthletesByTeam);
  const medalsByTeamOrderedDescendent=dataFunctions.orderMedalsTopTen(medalsByTeam);

  const table=document.getElementsByClassName('table')[0];
  for(let i=0; i<medalsByTeamOrderedDescendent.length; i++){
    const row=document.createElement('tr');
    row.className='rows';

    const fieldForTeam= document.createElement('td');
    fieldForTeam.innerText= (i+1)+".- "+medalsByTeamOrderedDescendent[i][0];
    fieldForTeam.className= "pais";
    row.appendChild(fieldForTeam);

    const fieldForGoldMedal= document.createElement('td');
    fieldForGoldMedal.innerText= medalsByTeamOrderedDescendent[i][1].oro;
    row.appendChild(fieldForGoldMedal);

    const fieldForSilverMedal= document.createElement('td');
    fieldForSilverMedal.innerText= medalsByTeamOrderedDescendent[i][1].plata;
    row.appendChild(fieldForSilverMedal);

    const fieldForBronzeMedal= document.createElement('td');
    fieldForBronzeMedal.innerText= medalsByTeamOrderedDescendent[i][1].bronce;
    row.appendChild(fieldForBronzeMedal);

    const fieldForTotalMedalsTeam= document.createElement('td');
    fieldForTotalMedalsTeam.innerText= medalsByTeamOrderedDescendent[i][1].total;
    row.appendChild(fieldForTotalMedalsTeam);

    table.appendChild(row);
  }
}

createTableTopTen(allAthletes)

