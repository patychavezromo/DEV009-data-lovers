

const dataFunctions= {


  femaleFilter: (list) =>{
    const femaleAthletes = list.filter(element => element.gender === "F");
    return femaleAthletes;
  },

  maleFilter: (list) =>{
    const maleAthletes = list.filter(element => element.gender === "M");
    return maleAthletes;
  },

  teamFilter: (list, selectedOption) =>{
    const teams = list.filter(element => element.team === selectedOption);
    return teams;
  },
  
  sportFilter: (list, selectedOption) =>{
    const sports = list.filter(element => element.sport === selectedOption);
    return sports;
  },

  orderAgeAscendant: (athletesList) => {
    athletesList.sort ((a,b) => {
      if (a.age === b.age){
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
      if (a.age === b.age){
        return 0;
      } if (a.age > b.age){
        return -1;
      } 
      return 1
    } ); 
    return athletesList;
  },

  orderHeightAscendant: (athletesList) => {
    const heightList=[];
    const notHeight=[];

    for(let i=0; i<athletesList.length; i++){
      const currentHeight=athletesList[i].height;
      if(currentHeight !=='NA'){
        heightList.push(athletesList[i]);
      }
      if(currentHeight === 'NA'){
        notHeight.push(athletesList[i]);
      }
    }

    heightList.sort ((a,b) => {
      if (a.height === b.height){
        return 0;
      } if (a.height < b.height){
        return -1;
      } 
      return 1
    } ); 

    for(let i=0; i<notHeight.length; i++){
      heightList.push(notHeight[i]);
    }
    return heightList;
  },

  orderHeightDescendant: (athletesList) => {
    const heightList=[];
    const notHeight=[];

    for(let i=0; i<athletesList.length; i++){
      const currentHeight=athletesList[i].height;
      if(currentHeight !=='NA'){
        heightList.push(athletesList[i]);
      }
      if(currentHeight === 'NA'){
        notHeight.push(athletesList[i]);
      }
    }

    heightList.sort ((a,b) => {
      if (a.height === b.height){
        return 0;
      } if (a.height > b.height){
        return -1;
      } 
      return 1
    } ); 
    

    for(let i=0; i<notHeight.length; i++){
      heightList.push(notHeight[i]);
    }
    return heightList;
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


  athletesByTeam: (allAthletes)=>{
    const valorInicial={};
    const atletasPorPais = allAthletes.reduce(
      (atletasPorPais, atletas)=>{
        if(!atletasPorPais[atletas.team]){
          atletasPorPais[atletas.team]=[atletas];
        }else{
          atletasPorPais[atletas.team].push(atletas);
        }
        return atletasPorPais;
      }
      ,valorInicial);
    return atletasPorPais;
  },


  totalMedals: (listAthletesByTeam)=>{
    const totalDeMedallasPorPais={};
    for(const team in listAthletesByTeam){
      const medallasDelPaisActual=listAthletesByTeam[team].reduce(
        (medallasDelPaisActual,atleta)=>{
          if(atleta.medal==='Gold'){
            medallasDelPaisActual.oro ++;
          }
          if(atleta.medal==='Silver'){
            medallasDelPaisActual.plata ++;
          }
          if(atleta.medal==='Bronze'){
            medallasDelPaisActual.bronce ++;
          }
          medallasDelPaisActual.total=
                medallasDelPaisActual.oro+
                medallasDelPaisActual.plata+
                medallasDelPaisActual.bronce;
                
          return medallasDelPaisActual;
        },
        {
          oro:0,
          plata:0,
          bronce:0,
          total:0
        }
      );
      totalDeMedallasPorPais[team] = medallasDelPaisActual;
    }
    return totalDeMedallasPorPais;
  },
};


export default dataFunctions;