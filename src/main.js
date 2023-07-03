import dataFunctions from './data.js';
import data from './data/athletes/athletes.js';

const allAthletes=data.athletes;

const allTeams= [];
for (let i=0; i<allAthletes.length; i++){
    if(!allTeams.includes(allAthletes[i].team)){
        allTeams.push(allAthletes[i].team)
    }
}

const dropDownListTeam= document.getElementById('team');
for(let i=0; i<allTeams.length; i++){
    let option= document.createElement('option');
    option.value= allTeams[i];
    option.text= allTeams[i];
    dropDownListTeam.innerHTML += option.outerHTML;
}

const allSports= [];
for (let i=0; i<allAthletes.length; i++){
    if(!allSports.includes(allAthletes[i].sport)){
        allSports.push(allAthletes[i].sport)
    }
}

const dropDownListSport= document.getElementById('sport');
for(let i=0; i<allSports.length; i++){
    let option= document.createElement ('option');
    option.value= allSports[i];
    option.text= allSports[i];
    dropDownListSport.innerHTML += option.outerHTML;
}

const root = document.getElementById('root');
dataFunctions.showAllCards(allAthletes);

const selectedGender = document.getElementById('gender');

selectedGender.addEventListener('change', ()  => {
    const selectedOption = selectedGender.value;
    console.log(selectedOption);

    switch (selectedOption){
        case 'femenino':
            const femaleList = dataFunctions.femaleFilter(allAthletes);
            root.innerHTML= "";
            dataFunctions.showAllCards(femaleList);
            break;

        case 'masculino':
            const maleList = dataFunctions.maleFilter(allAthletes);
            root.innerHTML= "";
            dataFunctions.showAllCards(maleList);
            break;
        case 'mostrarTodo':
            root.innerHTML= "";
            dataFunctions.showAllCards(allAthletes);
            break;
    }
} );

const selectedTeam = document.getElementById('team');

selectedTeam.addEventListener('change', () => {
    const selectedOption = selectedTeam.value;
    console.log(selectedOption);

    if (selectedTeam.value === "mostrarTodo"){
        root.innerHTML= "";
        dataFunctions.showAllCards(allAthletes);
    } else {
        const teamList = dataFunctions.teamFilter(allAthletes, selectedOption);
        root.innerHTML= "";
        dataFunctions.showAllCards(teamList);
    }
});

const selectedSport = document.getElementById('sport');

selectedSport.addEventListener('change', () => {
    const selectedOption = selectedSport.value;
    console.log(selectedOption);

    if (selectedSport.value === "mostrarTodo"){
        root.innerHTML= "";
        dataFunctions.showAllCards(allAthletes);
    } else {
    const sportList = dataFunctions.sportFilter(allAthletes, selectedOption);
    root.innerHTML= "";
    dataFunctions.showAllCards(sportList);
    }
});