const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];

console.log("Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH:");  
explorers.forEach(element => {
    console.log(element.name);    
});
console.log("Imprime el stack de cada explorer, usa FOR EACH:")
explorers.forEach(element => {
    console.log(element.stack);    
});
// 
console.log("Crea una nueva lista con las listas de stacks de cada explorer, usa MAP:")
const mapExplorers = explorers.map(obj => obj.stack);
console.log(mapExplorers);
// 
console.log("Obtén la lista de explorers que tengan en su stack 'js', usa FILTER (para validar un elemento en un lista se usa el método includes):")
const jsExplorers = explorers.filter(obj => obj.stack.includes('js'));
console.log(jsExplorers);
// 
console.log("Busca el primer explorer que sea de la CDMX, usa FIND:")
const cdmxExplorers = explorers.find(obj => obj.city == 'CDMX');
console.log(cdmxExplorers);
// 
console.log("Obtén la suma de todos los exercises_completed, usa REDUCE:")
const sumCompletedExplorers = explorers.reduce((sum, item) => sum + item.exercises_completed, 0)
console.log(sumCompletedExplorers)
// 
console.log("Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME:")
const someExplorers = explorers.some(item => item.missions.onboarding.isFinished == true ||  item.missions.frontend.isFinished == true);
console.log(someExplorers)
// 
console.log("Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.:")
const everyExplorers = explorers.every(item => item.missions.onboarding.isFinished == true ||  item.missions.frontend.isFinished == true);
console.log(everyExplorers)