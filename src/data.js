const dataFunctions= {


  femaleFilter: (list) =>{
    const femaleAthletes = list.filter(element => element.gender == "F");
    return femaleAthletes;
  },

  maleFilter: (list) =>{
    const maleAthletes = list.filter(element => element.gender == "M");
    return maleAthletes;
  },

  teamFilter: (list, selectedOption) =>{
    const teams = list.filter(element => element.team == selectedOption);
    return teams;
  },
  
  sportFilter: (list, selectedOption) =>{
    const sports = list.filter(element => element.sport == selectedOption);
    return sports;
  },

  orderAgeAscendant: (athletesList) => {
    athletesList.sort ((a,b) => {
      if (a.age == b.age){
        return 0;
      } if (a.age < b.age){
        return -1;
      } 
      return 1
    } ); 
  return athletesList;
  },
  orderAgeDescendant: (athletesList) => {
    athletesList.sort ((a,b) => {
      if (a.age == b.age){
        return 0;
      } if (a.age > b.age){
        return -1;
      } 
      return 1
    } ); 
  return athletesList;
  },

  orderHeightAscendant: (athletesList) => {
    athletesList.sort ((a,b) => {
      if (a.height == b.height){
        return 0;
      } if (a.height < b.height){
        return -1;
      } 
      return 1
    } ); 
  return athletesList;
  },

  orderHeightDescendant: (athletesList) => {
    athletesList.sort ((a,b) => {
      if (a.height == b.height){
        return 0;
      } if (a.height > b.height){
        return -1;
      } 
      return 1
    } ); 
  return athletesList;
  },

  orderWeightAscendant: (athletesList) => {
    const weightList=[];
    const notWeight=[];

    for(let i=0; i<athletesList.length; i++){
      const currentWeight=athletesList[i].weight;
      if(currentWeight!=='NA'){
        weightList.push(athletesList[i]);
      }
      if(currentWeight ==='NA'){
        notWeight.push(athletesList[i]);
      }
    }
    
    weightList.sort ((a,b) => {
      return a.weight - b.weight;
    } ); 

    for(let i=0; i<notWeight.length; i++){
      weightList.push(notWeight[i]);
    }
  return weightList;
  },

  orderWeightDescendant: (athletesList) => {
    const weightList=[];
    const notWeight=[];

    for(let i=0; i<athletesList.length; i++){
      const currentWeight=athletesList[i].weight;
      if(currentWeight!=='NA'){
        weightList.push(athletesList[i]);
      }
      if(currentWeight ==='NA'){
        notWeight.push(athletesList[i]);
      }
    }

    weightList.sort ((a,b) => {
      return b.weight - a.weight;
    } ); 

    for(let i=0; i<notWeight.length; i++){
      weightList.push(notWeight[i]);
    }

    return weightList;
  },

  showAllTeams: (allAthletes) =>{
    const allTeams= [];
    for (let i=0; i<allAthletes.length; i++){
      if(!allTeams.includes(allAthletes[i].team)){
        allTeams.push(allAthletes[i].team)
      }
    }
    return allTeams;
  },

  showAllSports: (allAthletes) =>{
    const allSports= [];
    for (let i=0; i<allAthletes.length; i++){
      if(!allSports.includes(allAthletes[i].sport)){
        allSports.push(allAthletes[i].sport)
      }
    }
    return allSports;
  },

  // showAllCards: (athletesList)=>{
  //   const root = document.getElementById('root');
 
  //   for(let i=0; i<athletesList.length; i++){
  //     let card= document.createElement('div');
  //     card.className= 'card';
  //     let content= document.createElement('div');
  //     content.className= 'content';

  //     let name= document.createElement('p');
  //     name.className = 'parrafoNombre';
  //     name.innerText= 'Nombre: '+athletesList[i].name;
  //     content.appendChild(name);

  //     let gender= document.createElement('p');
  //     gender.innerText= 'Género: '+athletesList[i].gender; 
  //     content.appendChild(gender);

  //     let height= document.createElement('p');
  //     height.innerText= 'Altura: '+athletesList[i].height;
  //     content.appendChild(height);

  //     let weight= document.createElement('p');
  //     weight.innerText= 'Peso: '+athletesList[i].weight;
  //     content.appendChild(weight);

  //     let sport= document.createElement('p');
  //     sport.innerText= 'Deporte: '+athletesList[i].sport;
  //     content.appendChild(sport);

  //     let team= document.createElement('p');
  //     team.innerText= 'Equipo: '+athletesList[i].team;
  //     content.appendChild(team);

  //     let noc= document.createElement('p');
  //     noc.innerText= 'País: '+athletesList[i].noc;
  //     content.appendChild(noc);

  //     let age= document.createElement('p');
  //     age.innerText= 'Edad: '+athletesList[i].age;
  //     content.appendChild(age);

  //     let event= document.createElement('p');
  //     event.innerText= 'Disciplina: '+athletesList[i].event;
  //     content.appendChild(event);

  //     let medal= document.createElement('p');
  //     medal.innerText= 'Medalla: '+athletesList[i].medal;
  //     content.appendChild(medal);

  //     card.appendChild(content);
  //     root.appendChild(card);

  //   }
  // }

};


export default dataFunctions;