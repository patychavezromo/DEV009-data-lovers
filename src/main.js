import dataFunctions from './data.js';
import athletes from './data/athletes/athletes.js';
import data from './data/athletes/athletes.js';

const allAthletes=data.athletes;

const allTeams= dataFunctions.showAllTeams(allAthletes);
const dropDownListTeam= document.getElementById('team');
for(let i=0; i<allTeams.length; i++){
    let option= document.createElement('option');
    option.value= allTeams[i];
    option.text= allTeams[i];
    dropDownListTeam.innerHTML += option.outerHTML;
}


const allSports=dataFunctions.showAllSports(allAthletes);
const dropDownListSport= document.getElementById('sport');
for(let i=0; i<allSports.length; i++){
    let option= document.createElement ('option');
    option.value= allSports[i];
    option.text= allSports[i];
    dropDownListSport.innerHTML += option.outerHTML;
}

function showAllCards (athletesList){
    const root = document.getElementById('root');
 
    for(let i=0; i<athletesList.length; i++){
      let card= document.createElement('div');
      card.className= 'card';
      let content= document.createElement('div');
      content.className= 'content';

      let name= document.createElement('p');
      name.className = 'parrafoNombre';
      name.innerText= 'Nombre: '+athletesList[i].name;
      content.appendChild(name);

      let gender= document.createElement('p');
      gender.innerText= 'Género: '+athletesList[i].gender; 
      content.appendChild(gender);

      let height= document.createElement('p');
      height.innerText= 'Altura: '+athletesList[i].height;
      content.appendChild(height);

      let weight= document.createElement('p');
      weight.innerText= 'Peso: '+athletesList[i].weight;
      content.appendChild(weight);

      let sport= document.createElement('p');
      sport.innerText= 'Deporte: '+athletesList[i].sport;
      content.appendChild(sport);

      let team= document.createElement('p');
      team.innerText= 'Equipo: '+athletesList[i].team;
      content.appendChild(team);

      let noc= document.createElement('p');
      noc.innerText= 'País: '+athletesList[i].noc;
      content.appendChild(noc);

      let age= document.createElement('p');
      age.innerText= 'Edad: '+athletesList[i].age;
      content.appendChild(age);

      let event= document.createElement('p');
      event.innerText= 'Disciplina: '+athletesList[i].event;
      content.appendChild(event);

      let medal= document.createElement('p');
      medal.innerText= 'Medalla: '+athletesList[i].medal;
      content.appendChild(medal);

      card.appendChild(content);
      root.appendChild(card);

    }
  };

const root = document.getElementById('root');
showAllCards(allAthletes);

const selectedGender = document.getElementById('gender');

selectedGender.addEventListener('change', ()  => {
    const selectedOption = selectedGender.value;
    console.log(selectedOption);

    switch (selectedOption){
        case 'femenino':       
            const femaleList = dataFunctions.femaleFilter(allAthletes);
            root.innerHTML= "";
            showAllCards(femaleList);
            break;

        case 'masculino':
            const maleList = dataFunctions.maleFilter(allAthletes);
            root.innerHTML= "";
            showAllCards(maleList);
            break;
        case 'mostrarTodo':
            root.innerHTML= "";
            showAllCards(allAthletes);
            break;
    }
} );

const selectedTeam = document.getElementById('team');

selectedTeam.addEventListener('change', () => {
    const selectedOption = selectedTeam.value;
    console.log(selectedOption);

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
    console.log(selectedOption);

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
    console.log(selectedOption);
    
    switch (selectedOption){
        case 'edad-ascendente':
            const ageAscendant = dataFunctions.orderAgeAscendant(allAthletes);
            root.innerHTML= "";
            showAllCards(ageAscendant);
            break;
        case 'edad-descendente':
            const ageDescendant = dataFunctions.orderAgeDescendant(allAthletes);
            root.innerHTML= "";
            showAllCards(ageDescendant);
            break;
        case 'altura-ascendente':
            const heightAscendant = dataFunctions.orderHeightAscendant(allAthletes);
            root.innerHTML= "";
            showAllCards(heightAscendant);
            break;
        case 'altura-descendente':
            const heightDescendant = dataFunctions.orderHeightDescendant(allAthletes);
            root.innerHTML= "";
            showAllCards(heightDescendant);
            break;
        case 'peso-ascendente':
            const weightAscendant = dataFunctions.orderWeightAscendant(allAthletes);
            root.innerHTML= "";
            showAllCards(weightAscendant);
            break;
        case 'peso-descendente':
            const weightDescendant = dataFunctions.orderWeightDescendant(allAthletes);
            root.innerHTML= "";
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