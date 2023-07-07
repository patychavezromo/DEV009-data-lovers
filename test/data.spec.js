import dataFunctions from '../src/data.js';

const dataTestGender = [{"gender": "M"},{ "gender": "F",}]
 
const dataTestTeam = [{"team": "United States"}, {"team": "Italy"},{"team": "Canada"}]

const dataTestSport = [{"sport": "Rowing"},{"sport": "Taekwondo"}, {"sport": "Handball"}, {"sport": "Wrestling"}, {"sport": "Gymnastics"}, {"sport": "Swimming"}]

const dataTestOrderAge = [{"age": 36},{"age": 25},{"age": 18},{"age": 32},{"age": 28},{"age": 24}]

const dataTestOrderHeight = [{"height": 187},{"height": 165},{"height": 192},{"height": 180},{"height": 179},{"height": 147}]

const dataTestOrderWeight = [{"weight": 50},{"weight": 100},{"weight": 45},{"weight": 49},{"weight": 38},{"weight": 70}]

const dataTestDropDownListTeam = [{"team": 'Italy'},{"team": 'France'},{"team": 'Iran'},{"team": 'Italy'},{"team": 'France'},{"team": 'Italy'},{"team": 'Iran'}]

const dataTestDropDownListSports = [{"sport": 'Taekwondo'},{"sport": 'Handball'},{"sport": 'Taekwondo'},{"sport": 'Gymnastics'},{"sport": 'Taekwondo'},{"sport": 'Gymnastics'},{"sport": 'Handball'}]

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


  //test para filtro de order Age Ascendant
  describe("dataFunctions.orderAgeAscendant", () => {
    it('Debería retornar la lista de atletas ordenada por edad ascendente"' + dataTestOrderAge + '"', () => {
      expect(dataFunctions.orderAgeAscendant(dataTestOrderAge)).toEqual(
        [{"age": 18},{"age": 24},{"age": 25},{"age": 28},{"age": 32},{"age": 36}]
      );
    });
  });


  //test para filtro de order Age Descendant
  describe("dataFunctions.orderAgeDescendant", () => {
    it('Debería retornar la lista de atletas ordenada por edad descendente"' + dataTestOrderAge + '"', () => {
      expect(dataFunctions.orderAgeDescendant(dataTestOrderAge)).toEqual(
        [{"age": 36},{"age": 32},{"age": 28},{"age": 25},{"age": 24},{"age": 18}]
      );
    });
  });

  //test para filtro de order height Ascendant
  describe("dataFunctions.orderHeightAscendant", () => {
    it('Debería retornar la lista de atletas ordenada por altura ascendente"' + dataTestOrderHeight + '"', () => {
      expect(dataFunctions.orderHeightAscendant(dataTestOrderHeight)).toEqual(
        [{"height": 147},{"height": 165},{"height": 179},{"height": 180},{"height": 187},{"height": 192}]
      );
    });
  });

  //test para filtro de order height Descendant
  describe("dataFunctions.orderHeightDescendant", () => {
    it('Debería retornar la lista de atletas ordenada por altura descendente"' + dataTestOrderHeight + '"', () => {
      expect(dataFunctions.orderHeightDescendant(dataTestOrderHeight)).toEqual(
        [{"height": 192},{"height": 187},{"height": 180},{"height": 179},{"height": 165},{"height": 147}]
      );
    });
  });

  //test para filtro de order weight Ascendant
  describe("dataFunctions.orderWeightAscendant", () => {
    it('Debería retornar la lista de atletas ordenada por peso ascendente"' + dataTestOrderWeight + '"', () => {
      expect(dataFunctions.orderWeightAscendant(dataTestOrderWeight)).toEqual(
        [{"weight": 38},{"weight": 45},{"weight": 49},{"weight": 50},{"weight": 70},{"weight": 100}]
      );
    });
  });

  //test para filtro de order weight Descendant
  describe("dataFunctions.orderWeightDescendant", () => {
    it('Debería retornar la lista de atletas ordenada por peso descendente"' + dataTestOrderWeight + '"', () => {
      expect(dataFunctions.orderWeightDescendant(dataTestOrderWeight)).toEqual(
        [{"weight": 100},{"weight": 70},{"weight": 50},{"weight": 49},{"weight": 45},{"weight": 38}]
      );
    });
  });


  //test para filtro de equipos que se incluyen en la barra desplegable
  describe("dataFunctions.showAllTeams", () => {
    it('Debería retornar el tamaño de la lista sin equipos repetidos"' + dataTestDropDownListTeam + '"', () => {
      expect(dataFunctions.showAllTeams(dataTestDropDownListTeam).length).toBe(3);
    });
  });

  //test para filtro de deportes que se incluyen en la barra desplegable
  describe("dataFunctions.showAllSports", () => {
    it('Debería retornar el tamaño de la lista sin deportes repetidos"' + dataTestDropDownListSports + '"', () => {
      expect(dataFunctions.showAllSports(dataTestDropDownListSports).length).toBe(3);
    });
  });
  

});

