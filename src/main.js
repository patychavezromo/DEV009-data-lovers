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

const selectedOrder = document.getElementById('order');

selectedOrder.addEventListener('change', () => {
    const selectedOption = selectedOrder.value;
    console.log(selectedOption);
    
    switch (selectedOption){
        case 'edad-ascendente':
            const ageAscendant = dataFunctions.orderAgeAscendant(allAthletes);
            root.innerHTML= "";
            dataFunctions.showAllCards(ageAscendant);
            break;
        case 'edad-descendente':
            const ageDescendant = dataFunctions.orderAgeDescendant(allAthletes);
            root.innerHTML= "";
            dataFunctions.showAllCards(ageDescendant);
            break;
        case 'altura-ascendente':
            const heightAscendant = dataFunctions.orderHeightAscendant(allAthletes);
            root.innerHTML= "";
            dataFunctions.showAllCards(heightAscendant);
            break;
        case 'altura-descendente':
            const heightDescendant = dataFunctions.orderHeightDescendant(allAthletes);
            root.innerHTML= "";
            dataFunctions.showAllCards(heightDescendant);
            break;
        case 'peso-ascendente':
            const weightAscendant = dataFunctions.orderWeightAscendant(allAthletes);
            root.innerHTML= "";
            dataFunctions.showAllCards(weightAscendant);
            break;
        case 'peso-descendente':
            const weightDescendant = dataFunctions.orderWeightDescendant(allAthletes);
            root.innerHTML= "";
            dataFunctions.showAllCards(weightDescendant);
            break;   
    }
    // if (selectedOrder.value === "mostrarTodo"){
    //     root.innerHTML= "";
    //     dataFunctions.showAllCards(allAthletes);
    // } 
    // if (selectedOrder.value === "edad-ascendente"){
    //     const ageAscendant = dataFunctions.orderAgeAscendant(allAthletes);
    //     root.innerHTML= "";
    //     dataFunctions.showAllCards(ageAscendant);
    // } 
    // if (selectedOrder.value === "edad-descendente"){
    //     const ageDescendant = dataFunctions.orderAgeDescendant(allAthletes);
    //     root.innerHTML= "";
    //     dataFunctions.showAllCards(ageDescendant);
    // }
});