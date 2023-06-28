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
    let card= document.createElement('div');
    card.className= 'card';
    let content= document.createElement('div');
    content.className= 'content';
    
    let name= document.createElement('p');
    name.innerText= 'Nombre: '+data.athletes[i].name;
    content.appendChild(name);

    let gender= document.createElement('p');
    gender.innerText= 'Género: '+data.athletes[i].gender; 
    content.appendChild(gender);

    let height= document.createElement('p');
    height.innerText= 'Altura: '+data.athletes[i].height;
    content.appendChild(height);

    let weight= document.createElement('p');
    weight.innerText= 'Peso: '+data.athletes[i].weight;
    content.appendChild(weight);

    let sport= document.createElement('p');
    sport.innerText= 'Deporte: '+data.athletes[i].sport;
    content.appendChild(sport);

    let team= document.createElement('p');
    team.innerText= 'Equipo: '+data.athletes[i].team;
    content.appendChild(team);

    let noc= document.createElement('p');
    noc.innerText= 'País: '+data.athletes[i].noc;
    content.appendChild(noc);

    let age= document.createElement('p');
    age.innerText= 'Edad: '+data.athletes[i].age;
    content.appendChild(age);

    let event= document.createElement('p');
    event.innerText= 'Disciplina: '+data.athletes[i].event;
    content.appendChild(event);

    let medal= document.createElement('p');
    medal.innerText= 'Medalla: '+data.athletes[i].medal;
    content.appendChild(medal);

    card.appendChild(content);
    root.appendChild(card);

}





