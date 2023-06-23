import { example } from './data.js';

import data from './data/athletes/athletes.js';

const root= document.getElementById('root');
const allAthletes=data.athletes;


for(let i=0; i<allAthletes.length; i++){
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




