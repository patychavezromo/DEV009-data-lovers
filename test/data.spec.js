import dataFunctions from '../src/data.js';

const dataTestGender = [{"gender": "M"},{ "gender": "F",}]
 
const dataTestTeam = [{"team": "United States"}, {"team": "Italy"},{"team": "Canada"}]

const dataTestSport = [{"sport": "Rowing"},{"sport": "Taekwondo"}, {"sport": "Handball"}, {"sport": "Wrestling"}, {"sport": "Gymnastics"}, {"sport": "Swimming"}]

describe ("dataFunctions",() =>{
  //test para filtro de atletas femeninas
  describe("dataFunctions.femaleFilter", () => {
    it('Debería retornar sólo atletas mujeres para "' + dataTestGender + '"', () => {
      expect(dataFunctions.femaleFilter(dataTestGender, "F")).toEqual([
        {
          "gender": "F",
        }
      ]);
    });
  });


  //test para filtro de atletas masculinos
  describe("dataFunctions.maleFilter", () => {
    it('Debería retornar sólo atletas hombres para "' + dataTestGender + '"', () => {
      expect(dataFunctions.maleFilter(dataTestGender, "M")).toEqual([
        {
          "gender": "M",
        }
      ]);
    });
  });

  //test para filtro de teams
  describe("dataFunctions.teamFilter", () => {
    it('Debería retornar sólo atletas del mismo equipo "' + dataTestTeam + '"', () => {
      expect(dataFunctions.teamFilter(dataTestTeam, "Italy")).toEqual([
        {
          "team": "Italy",
        }
      ]);
    });
  });
   //test para filtro de sports
   describe("dataFunctions.sportFilter", () => {
    it('Debería retornar sólo atletas del mismo deporte "' + dataTestSport + '"', () => {
      expect(dataFunctions.sportFilter(dataTestSport, "Rowing")).toEqual([
        {
          "sport": "Rowing",
        }
      ]);
    });
  });
});

