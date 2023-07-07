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
 
  for(let i=0; i<athletesList.length; i++){
    const card= document.createElement('div');
    card.className= 'card';
    const content= document.createElement('div');
    content.className= 'content';

    const name= document.createElement('p');
    name.className = 'parrafoNombre';
    name.innerText= 'Nombre: '+athletesList[i].name;
    content.appendChild(name);

    const gender= document.createElement('p');
    gender.innerText= 'Género: '+athletesList[i].gender; 
    content.appendChild(gender);

    const height= document.createElement('p');
    height.innerText= 'Altura: '+athletesList[i].height;
    content.appendChild(height);

    const weight= document.createElement('p');
    weight.innerText= 'Peso: '+athletesList[i].weight;
    content.appendChild(weight);

    const sport= document.createElement('p');
    sport.innerText= 'Deporte: '+athletesList[i].sport;
    content.appendChild(sport);

    const team= document.createElement('p');
    team.innerText= 'Equipo: '+athletesList[i].team;
    content.appendChild(team);

    const noc= document.createElement('p');
    noc.innerText= 'País: '+athletesList[i].noc;
    content.appendChild(noc);

    const age= document.createElement('p');
    age.innerText= 'Edad: '+athletesList[i].age;
    content.appendChild(age);

    const event= document.createElement('p');
    event.innerText= 'Disciplina: '+athletesList[i].event;
    content.appendChild(event);

    const medal= document.createElement('p');
    medal.innerText= 'Medalla: '+athletesList[i].medal;
    content.appendChild(medal);

    card.appendChild(content);
    root.appendChild(card);

  }
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
  case 'mostrarTodo':
    deleteAll;
    showAllCards(allAthletes);
    break;
  }
} );

const selectedTeam = document.getElementById('team');

selectedTeam.addEventListener('change', () => {
  const selectedOption = selectedTeam.value; 

  if (selectedTeam.value === "mostrarTodo"){
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

  if (selectedSport.value === "mostrarTodo"){
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
  const ageAscendant = dataFunctions.orderAgeAscendant(allAthletes);
  const ageDescendant = dataFunctions.orderAgeDescendant(allAthletes);
  const heightAscendant = dataFunctions.orderHeightAscendant(allAthletes);
  const heightDescendant = dataFunctions.orderHeightDescendant(allAthletes);
  const weightAscendant = dataFunctions.orderWeightAscendant(allAthletes);
  const weightDescendant = dataFunctions.orderWeightDescendant(allAthletes);

  switch (selectedOption){
  case 'edad-ascendente':
    ageAscendant;
    deleteAll;
    showAllCards(ageAscendant);
    break;
  case 'edad-descendente':
    ageDescendant;
    deleteAll;
    showAllCards(ageDescendant);
    break;
  case 'altura-ascendente':
    heightAscendant;
    deleteAll;
    showAllCards(heightAscendant);
    break;
  case 'altura-descendente':
    heightDescendant;
    deleteAll;
    showAllCards(heightDescendant);
    break;
  case 'peso-ascendente':
    weightAscendant;
    deleteAll;
    showAllCards(weightAscendant);
    break;
  case 'peso-descendente':
    weightDescendant;
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