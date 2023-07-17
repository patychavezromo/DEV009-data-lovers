import dataFunctions from '../src/data.js';

const dataTestGender = [
  {
    "name": "Giovanni Abagnale",
    "gender": "M",
    "height": "198",
    "weight": "90",
    "sport": "Rowing",
    "team": "Italy",
    "noc": "ITA",
    "age": 21,
    "event": "Rowing Men's Coxless Pairs",
    "medal": "Bronze"
  },
  {
    "name": "Patimat Abakarova",
    "gender": "F",
    "height": "165",
    "weight": "49",
    "sport": "Taekwondo",
    "team": "Azerbaijan",
    "noc": "AZE",
    "age": 21,
    "event": "Taekwondo Women's Flyweight",
    "medal": "Bronze"
  },
  {
    "name": "Luc Abalo",
    "gender": "M",
    "height": "182",
    "weight": "86",
    "sport": "Handball",
    "team": "France",
    "noc": "FRA",
    "age": 31,
    "event": "Handball Men's Handball",
    "medal": "Silver"
  },
  {
    "name": "Saeid Morad Abdevali",
    "gender": "M",
    "height": "170",
    "weight": "80",
    "sport": "Wrestling",
    "team": "Iran",
    "noc": "IRI",
    "age": 26,
    "event": "Wrestling Men's Middleweight, Greco-Roman",
    "medal": "Bronze"
  },
  {
    "name": "Denis Mikhaylovich Ablyazin",
    "gender": "M",
    "height": "161",
    "weight": "62",
    "sport": "Gymnastics",
    "team": "Russia",
    "noc": "RUS",
    "age": 24,
    "event": "Gymnastics Men's Team All-Around",
    "medal": "Silver"
  }
]

const dataTestComputeStats= [
  {
    "team": "Italy",
    "medal": "Bronze"
  },
  {
    "team": "Italy",
    "medal": "Bronze"
  },
  {
    "team": "France",
    "medal": "Silver"
  },
  {
    "team": "Italy",
    "medal": "Bronze"
  },
  {
    "team": "Russia",
    "medal": "Silver"
  },
  {
    "team": "Russia",
    "medal": "Silver"
  },
  {
    "team": "Russia",
    "medal": "Bronze"
  },
  {
    "team": "Australia",
    "medal": "Bronze"
  },
  {
    "team": "Italy",
    "medal": "Bronze"
  },
  {
    "team": "Jordan",
    "medal": "Gold"
  }
]

const dataTestFilteredMedals = 
{Italy: [{
  "team": "Italy",
  "medal": "Bronze"
},
{
  "team": "Italy",
  "medal": "Bronze"
}, 
{
  "team": "Italy",
  "medal": "Bronze"
},
{
  "team": "Italy",
  "medal": "Bronze"
}
],
France: [
  {
    "team": "France",
    "medal": "Silver"
  }
],
Russia: [{
  "team": "Russia",
  "medal": "Silver"
},
{
  "team": "Russia",
  "medal": "Silver"
},
{
  "team": "Russia",
  "medal": "Bronze"
}
],
Australia: [{
  "team": "Australia",
  "medal": "Bronze"
}
],
Jordan: [{
  "team": "Jordan",
  "medal": "Gold"
}
],
}

const dataTestOrderedMedals = {
  'Italy': { oro: 0, plata: 0, bronce: 4, total: 4 },
  'France': { oro: 0, plata: 2, bronce: 0, total: 2 },
  'Russia': { oro: 0, plata: 2, bronce: 1, total: 3 },
  'Australia': { oro: 0, plata: 0, bronce: 1, total: 1 },
  'Jordan': { oro: 1, plata: 0, bronce: 0, total: 1 },
  'Netherlands': { oro: 0, plata: 1, bronce: 0, total: 1 },
  'Great Britain': { oro: 1, plata: 0, bronce: 0, total: 1 },
  'United States': { oro: 2, plata: 0, bronce: 3, total: 5 },
  'New Zealand': { oro: 0, plata: 1, bronce: 0, total: 1 },
  'South Africa': { oro: 0, plata: 0, bronce: 2, total: 2 },
  'Spain': { oro: 0, plata: 1, bronce: 0, total: 1 },
  'Indonesia': { oro: 0, plata: 1, bronce: 0, total: 1 },
  'Germany': { oro: 0, plata: 0, bronce: 1, total: 1 }
}

describe ("dataFunctions",() =>{

  
  //test para filtro de atletas femeninas
  describe("dataFunctions.femaleFilter", () => {
    it('Debería retornar sólo atletas mujeres para "' + dataTestGender + '"', () => {
      expect(dataFunctions.femaleFilter(dataTestGender, "F")).toEqual([
        {
          "name": "Patimat Abakarova",
          "gender": "F",
          "height": "165",
          "weight": "49",
          "sport": "Taekwondo",
          "team": "Azerbaijan",
          "noc": "AZE",
          "age": 21,
          "event": "Taekwondo Women's Flyweight",
          "medal": "Bronze"
        }
      ]);
    });
  });

  //test para filtro de atletas masculinos
  describe("dataFunctions.maleFilter", () => {
    it('Debería retornar sólo atletas hombres para "' + dataTestGender + '"', () => {
      expect(dataFunctions.maleFilter(dataTestGender, "M")).toEqual([
        {
          "name": "Giovanni Abagnale",
          "gender": "M",
          "height": "198",
          "weight": "90",
          "sport": "Rowing",
          "team": "Italy",
          "noc": "ITA",
          "age": 21,
          "event": "Rowing Men's Coxless Pairs",
          "medal": "Bronze"
        },
        {
          "name": "Luc Abalo",
          "gender": "M",
          "height": "182",
          "weight": "86",
          "sport": "Handball",
          "team": "France",
          "noc": "FRA",
          "age": 31,
          "event": "Handball Men's Handball",
          "medal": "Silver"
        },
        {
          "name": "Saeid Morad Abdevali",
          "gender": "M",
          "height": "170",
          "weight": "80",
          "sport": "Wrestling",
          "team": "Iran",
          "noc": "IRI",
          "age": 26,
          "event": "Wrestling Men's Middleweight, Greco-Roman",
          "medal": "Bronze"
        },
        {
          "name": "Denis Mikhaylovich Ablyazin",
          "gender": "M",
          "height": "161",
          "weight": "62",
          "sport": "Gymnastics",
          "team": "Russia",
          "noc": "RUS",
          "age": 24,
          "event": "Gymnastics Men's Team All-Around",
          "medal": "Silver"
        }
      ]);
    });
  });

  //test para filtro de teams
  describe("dataFunctions.teamFilter", () => {
    it('Debería retornar sólo atletas del mismo equipo "' + dataTestGender + '"', () => {
      expect(dataFunctions.teamFilter(dataTestGender, "Italy")).toEqual([
        {
          "name": "Giovanni Abagnale",
          "gender": "M",
          "height": "198",
          "weight": "90",
          "sport": "Rowing",
          "team": "Italy",
          "noc": "ITA",
          "age": 21,
          "event": "Rowing Men's Coxless Pairs",
          "medal": "Bronze"
        }
      ]);
    });
  });

  //test para filtro de sports
  describe("dataFunctions.sportFilter", () => {
    it('Debería retornar sólo atletas del mismo deporte "' + dataTestGender + '"', () => {
      expect(dataFunctions.sportFilter(dataTestGender, "Rowing")).toEqual([
        {
          "name": "Giovanni Abagnale",
          "gender": "M",
          "height": "198",
          "weight": "90",
          "sport": "Rowing",
          "team": "Italy",
          "noc": "ITA",
          "age": 21,
          "event": "Rowing Men's Coxless Pairs",
          "medal": "Bronze"
        }
      ]);
    });
  });


  //test para filtro de order Age Ascendant
  describe("dataFunctions.orderAgeAscendant", () => {
    it('Debería retornar la lista de atletas ordenada por edad ascendente"' + dataTestGender + '"', () => {
      expect(dataFunctions.orderAgeAscendant(dataTestGender)).toEqual([
        {
          "name": "Giovanni Abagnale",
          "gender": "M",
          "height": "198",
          "weight": "90",
          "sport": "Rowing",
          "team": "Italy",
          "noc": "ITA",
          "age": 21,
          "event": "Rowing Men's Coxless Pairs",
          "medal": "Bronze"
        },
        {
          "name": "Patimat Abakarova",
          "gender": "F",
          "height": "165",
          "weight": "49",
          "sport": "Taekwondo",
          "team": "Azerbaijan",
          "noc": "AZE",
          "age": 21,
          "event": "Taekwondo Women's Flyweight",
          "medal": "Bronze"
        },
        {
          "name": "Denis Mikhaylovich Ablyazin",
          "gender": "M",
          "height": "161",
          "weight": "62",
          "sport": "Gymnastics",
          "team": "Russia",
          "noc": "RUS",
          "age": 24,
          "event": "Gymnastics Men's Team All-Around",
          "medal": "Silver"
        },
        {
          "name": "Saeid Morad Abdevali",
          "gender": "M",
          "height": "170",
          "weight": "80",
          "sport": "Wrestling",
          "team": "Iran",
          "noc": "IRI",
          "age": 26,
          "event": "Wrestling Men's Middleweight, Greco-Roman",
          "medal": "Bronze"
        },
        {
          "name": "Luc Abalo",
          "gender": "M",
          "height": "182",
          "weight": "86",
          "sport": "Handball",
          "team": "France",
          "noc": "FRA",
          "age": 31,
          "event": "Handball Men's Handball",
          "medal": "Silver"
        }
      ]);
    });
  });


  //test para filtro de order Age Descendant
  describe("dataFunctions.orderAgeDescendant", () => {
    it('Debería retornar la lista de atletas ordenada por edad descendente"' + dataTestGender + '"', () => {
      expect(dataFunctions.orderAgeDescendant(dataTestGender)).toEqual([
        {
          "name": "Luc Abalo",
          "gender": "M",
          "height": "182",
          "weight": "86",
          "sport": "Handball",
          "team": "France",
          "noc": "FRA",
          "age": 31,
          "event": "Handball Men's Handball",
          "medal": "Silver"
        },
        {
          "name": "Saeid Morad Abdevali",
          "gender": "M",
          "height": "170",
          "weight": "80",
          "sport": "Wrestling",
          "team": "Iran",
          "noc": "IRI",
          "age": 26,
          "event": "Wrestling Men's Middleweight, Greco-Roman",
          "medal": "Bronze"
        },
        {
          "name": "Denis Mikhaylovich Ablyazin",
          "gender": "M",
          "height": "161",
          "weight": "62",
          "sport": "Gymnastics",
          "team": "Russia",
          "noc": "RUS",
          "age": 24,
          "event": "Gymnastics Men's Team All-Around",
          "medal": "Silver"
        },
        {
          "name": "Giovanni Abagnale",
          "gender": "M",
          "height": "198",
          "weight": "90",
          "sport": "Rowing",
          "team": "Italy",
          "noc": "ITA",
          "age": 21,
          "event": "Rowing Men's Coxless Pairs",
          "medal": "Bronze"
        },
        {
          "name": "Patimat Abakarova",
          "gender": "F",
          "height": "165",
          "weight": "49",
          "sport": "Taekwondo",
          "team": "Azerbaijan",
          "noc": "AZE",
          "age": 21,
          "event": "Taekwondo Women's Flyweight",
          "medal": "Bronze"
        }
      ]);
    });
  });

  //test para filtro de order height Ascendant
  describe("dataFunctions.orderHeightAscendant", () => {
    it('Debería retornar la lista de atletas ordenada por altura ascendente"' + dataTestGender + '"', () => {
      expect(dataFunctions.orderHeightAscendant(dataTestGender)).toEqual([
        {
          "name": "Denis Mikhaylovich Ablyazin",
          "gender": "M",
          "height": "161",
          "weight": "62",
          "sport": "Gymnastics",
          "team": "Russia",
          "noc": "RUS",
          "age": 24,
          "event": "Gymnastics Men's Team All-Around",
          "medal": "Silver"
        },
        {
          "name": "Patimat Abakarova",
          "gender": "F",
          "height": "165",
          "weight": "49",
          "sport": "Taekwondo",
          "team": "Azerbaijan",
          "noc": "AZE",
          "age": 21,
          "event": "Taekwondo Women's Flyweight",
          "medal": "Bronze"
        },
        {
          "name": "Saeid Morad Abdevali",
          "gender": "M",
          "height": "170",
          "weight": "80",
          "sport": "Wrestling",
          "team": "Iran",
          "noc": "IRI",
          "age": 26,
          "event": "Wrestling Men's Middleweight, Greco-Roman",
          "medal": "Bronze"
        },
        {
          "name": "Luc Abalo",
          "gender": "M",
          "height": "182",
          "weight": "86",
          "sport": "Handball",
          "team": "France",
          "noc": "FRA",
          "age": 31,
          "event": "Handball Men's Handball",
          "medal": "Silver"
        },
        {
          "name": "Giovanni Abagnale",
          "gender": "M",
          "height": "198",
          "weight": "90",
          "sport": "Rowing",
          "team": "Italy",
          "noc": "ITA",
          "age": 21,
          "event": "Rowing Men's Coxless Pairs",
          "medal": "Bronze"
        }
      ]);
    });
  });

  //test para filtro de order height Descendant
  describe("dataFunctions.orderHeightDescendant", () => {
    it('Debería retornar la lista de atletas ordenada por altura descendente"' + dataTestGender + '"', () => {
      expect(dataFunctions.orderHeightDescendant(dataTestGender)).toEqual([
        {
          "name": "Giovanni Abagnale",
          "gender": "M",
          "height": "198",
          "weight": "90",
          "sport": "Rowing",
          "team": "Italy",
          "noc": "ITA",
          "age": 21,
          "event": "Rowing Men's Coxless Pairs",
          "medal": "Bronze"
        },
        {
          "name": "Luc Abalo",
          "gender": "M",
          "height": "182",
          "weight": "86",
          "sport": "Handball",
          "team": "France",
          "noc": "FRA",
          "age": 31,
          "event": "Handball Men's Handball",
          "medal": "Silver"
        },
        {
          "name": "Saeid Morad Abdevali",
          "gender": "M",
          "height": "170",
          "weight": "80",
          "sport": "Wrestling",
          "team": "Iran",
          "noc": "IRI",
          "age": 26,
          "event": "Wrestling Men's Middleweight, Greco-Roman",
          "medal": "Bronze"
        },
        {
          "name": "Patimat Abakarova",
          "gender": "F",
          "height": "165",
          "weight": "49",
          "sport": "Taekwondo",
          "team": "Azerbaijan",
          "noc": "AZE",
          "age": 21,
          "event": "Taekwondo Women's Flyweight",
          "medal": "Bronze"
        },
        {
          "name": "Denis Mikhaylovich Ablyazin",
          "gender": "M",
          "height": "161",
          "weight": "62",
          "sport": "Gymnastics",
          "team": "Russia",
          "noc": "RUS",
          "age": 24,
          "event": "Gymnastics Men's Team All-Around",
          "medal": "Silver"
        }
      ]);
    });
  });

  //test para filtro de order weight Ascendant
  describe("dataFunctions.orderWeightAscendant", () => {
    it('Debería retornar la lista de atletas ordenada por peso ascendente"' + dataTestGender + '"', () => {
      expect(dataFunctions.orderWeightAscendant(dataTestGender)).toEqual([
        {
          "name": "Patimat Abakarova",
          "gender": "F",
          "height": "165",
          "weight": "49",
          "sport": "Taekwondo",
          "team": "Azerbaijan",
          "noc": "AZE",
          "age": 21,
          "event": "Taekwondo Women's Flyweight",
          "medal": "Bronze"
        },
        {
          "name": "Denis Mikhaylovich Ablyazin",
          "gender": "M",
          "height": "161",
          "weight": "62",
          "sport": "Gymnastics",
          "team": "Russia",
          "noc": "RUS",
          "age": 24,
          "event": "Gymnastics Men's Team All-Around",
          "medal": "Silver"
        },
        {
          "name": "Saeid Morad Abdevali",
          "gender": "M",
          "height": "170",
          "weight": "80",
          "sport": "Wrestling",
          "team": "Iran",
          "noc": "IRI",
          "age": 26,
          "event": "Wrestling Men's Middleweight, Greco-Roman",
          "medal": "Bronze"
        },
        {
          "name": "Luc Abalo",
          "gender": "M",
          "height": "182",
          "weight": "86",
          "sport": "Handball",
          "team": "France",
          "noc": "FRA",
          "age": 31,
          "event": "Handball Men's Handball",
          "medal": "Silver"
        },
        {
          "name": "Giovanni Abagnale",
          "gender": "M",
          "height": "198",
          "weight": "90",
          "sport": "Rowing",
          "team": "Italy",
          "noc": "ITA",
          "age": 21,
          "event": "Rowing Men's Coxless Pairs",
          "medal": "Bronze"
        }
      ]);
    });
  });

  //test para filtro de order weight Descendant
  describe("dataFunctions.orderWeightDescendant", () => {
    it('Debería retornar la lista de atletas ordenada por peso descendente"' + dataTestGender + '"', () => {
      expect(dataFunctions.orderWeightDescendant(dataTestGender)).toEqual([
        {
          "name": "Giovanni Abagnale",
          "gender": "M",
          "height": "198",
          "weight": "90",
          "sport": "Rowing",
          "team": "Italy",
          "noc": "ITA",
          "age": 21,
          "event": "Rowing Men's Coxless Pairs",
          "medal": "Bronze"
        },
        {
          "name": "Luc Abalo",
          "gender": "M",
          "height": "182",
          "weight": "86",
          "sport": "Handball",
          "team": "France",
          "noc": "FRA",
          "age": 31,
          "event": "Handball Men's Handball",
          "medal": "Silver"
        },
        {
          "name": "Saeid Morad Abdevali",
          "gender": "M",
          "height": "170",
          "weight": "80",
          "sport": "Wrestling",
          "team": "Iran",
          "noc": "IRI",
          "age": 26,
          "event": "Wrestling Men's Middleweight, Greco-Roman",
          "medal": "Bronze"
        },
        {
          "name": "Denis Mikhaylovich Ablyazin",
          "gender": "M",
          "height": "161",
          "weight": "62",
          "sport": "Gymnastics",
          "team": "Russia",
          "noc": "RUS",
          "age": 24,
          "event": "Gymnastics Men's Team All-Around",
          "medal": "Silver"
        },
        {
          "name": "Patimat Abakarova",
          "gender": "F",
          "height": "165",
          "weight": "49",
          "sport": "Taekwondo",
          "team": "Azerbaijan",
          "noc": "AZE",
          "age": 21,
          "event": "Taekwondo Women's Flyweight",
          "medal": "Bronze"
        },
      ]);
    });
  });


  //test para filtro de equipos que se incluyen en la barra desplegable
  describe("dataFunctions.showAllTeams", () => {
    it('Debería retornar el tamaño de la lista sin equipos repetidos"' + dataTestGender + '"', () => {
      expect(dataFunctions.showAllTeams(dataTestGender).length).toBe(5);
    });
  });

  //test para filtro de deportes que se incluyen en la barra desplegable
  describe("dataFunctions.showAllSports", () => {
    it('Debería retornar el tamaño de la lista sin deportes repetidos"' + dataTestGender + '"', () => {
      expect(dataFunctions.showAllSports(dataTestGender).length).toBe(5);
    });
  });
  
  //test para calculo agregado
  describe("dataFunctions.athletesByTeam", () => {
    it('Debería retornar un objeto con la lista de atletas por cada país "' + dataTestComputeStats + '"', () => {
      expect(dataFunctions.athletesByTeam(dataTestComputeStats)).toEqual(
        {Italy: [{
          "team": "Italy",
          "medal": "Bronze"
        },
        {
          "team": "Italy",
          "medal": "Bronze"
        }, 
        {
          "team": "Italy",
          "medal": "Bronze"
        },
        {
          "team": "Italy",
          "medal": "Bronze"
        }
        ],
        France: [
          {
            "team": "France",
            "medal": "Silver"
          }
        ],
        Russia: [{
          "team": "Russia",
          "medal": "Silver"
        },
        {
          "team": "Russia",
          "medal": "Silver"
        },
        {
          "team": "Russia",
          "medal": "Bronze"
        }
        ],
        Australia: [{
          "team": "Australia",
          "medal": "Bronze"
        }
        ],
        Jordan: [{
          "team": "Jordan",
          "medal": "Gold"
        }
        ]
        }
      );
    });
  });

  //test para calculo agregado de total de medallas
  describe("dataFunctions.totalMedalsByTeam", () => {
    it('Debería retornar el total de medallas por país "' + dataTestFilteredMedals + '"', () => {
      expect(dataFunctions.totalMedalsByTeam(dataTestFilteredMedals)).toEqual(
        {
          "Australia": {
            bronce: 1,
            oro: 0,
            plata: 0,
            total: 1,
          },
          "France": {
            bronce: 0,
            oro: 0,
            plata: 1, 
            total: 1,
          },
          "Italy": {
            bronce: 4,
            oro: 0,
            plata: 0, 
            total: 4,
          },
          "Jordan": {
            bronce: 0,
            oro: 1,
            plata: 0,
            total: 1,
          },
          "Russia": {
            bronce: 1, 
            oro: 0,
            plata: 2,
            total: 3,
          },
        }
      );
    });
  });


//test para calculo agregado de ordenamiento de medallas por país
describe("dataFunctions.orderMedalsTopTen", () => {
  it('Debería retornar ordenamiento descendente del total de medallas por país "' + dataTestOrderedMedals + '"', () => {
    expect(dataFunctions.orderMedalsTopTen(dataTestOrderedMedals)).toEqual(
      [
        [ 'United States', { oro: 2, plata: 0, bronce: 3, total: 5 } ],
        [ 'Italy', { oro: 0, plata: 0, bronce: 4, total: 4 } ],
        [ 'Russia', { oro: 0, plata: 2, bronce: 1, total: 3 } ],
        [ 'France', { oro: 0, plata: 2, bronce: 0, total: 2 } ],
        [ 'South Africa', { oro: 0, plata: 0, bronce: 2, total: 2 } ],
        [ 'Australia', { oro: 0, plata: 0, bronce: 1, total: 1 } ],
        [ 'Jordan', { oro: 1, plata: 0, bronce: 0, total: 1 } ],
        [ 'Netherlands', { oro: 0, plata: 1, bronce: 0, total: 1 } ],
        [ 'Great Britain', { oro: 1, plata: 0, bronce: 0, total: 1 } ],
        [ 'New Zealand', { oro: 0, plata: 1, bronce: 0, total: 1 } ]
      ]                 
      );
    });
  });


   




});

