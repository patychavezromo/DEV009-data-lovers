import { example } from './data.js';

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
    option.value= i;
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
    option.value= i;
    option.text= allSports[i];
    dropDownListSport.innerHTML += option.outerHTML;
}


const root= document.getElementById('root');



for(let i=0; i<allAthletes.length; i++){
    let target1= document.createElement('div');
    
    let name= document.createElement('h1');
    name.innerText= 'Nombre: '+data.athletes[i].name;
    root.appendChild(name);

    let gender= document.createElement('h1');
    gender.innerText= 'Género: '+data.athletes[i].gender; 
    root.appendChild(gender);

    let height= document.createElement('h1');
    height.innerText= 'Altura: '+data.athletes[i].height;
    root.appendChild(height);

    let weight= document.createElement('h1');
    weight.innerText= 'Peso: '+data.athletes[i].weight;
    root.appendChild(weight);

    let sport= document.createElement('h1');
    sport.innerText= 'Deporte: '+data.athletes[i].sport;
    root.appendChild(sport);

    let team= document.createElement('h1');
    team.innerText= 'Equipo: '+data.athletes[i].team;
    root.appendChild(team);

    let noc= document.createElement('h1');
    noc.innerText= 'País: '+data.athletes[i].noc;
    root.appendChild(noc);

    let age= document.createElement('h1');
    age.innerText= 'Edad: '+data.athletes[i].age;
    root.appendChild(age);

    let event= document.createElement('h1');
    event.innerText= 'Disciplina: '+data.athletes[i].event;
    root.appendChild(event);

    let medal= document.createElement('h1');
    medal.innerText= 'Medalla: '+data.athletes[i].medal;
    root.appendChild(medal);
}




