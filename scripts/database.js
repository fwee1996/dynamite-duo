const database = { 

    heroes: [  { id: 1, name: "Dynoguy", power: "Fire blasts" }, 

               { id: 2, name: "Hyperspeed", power: "Super speed" } ], 

    villains: [ { id: 1, name: "Man Ray", power: "Laser blast" }, 

                { id: 2, name: "Dirty Bubble", power: "Trap enemies" } ] 

} 
 

// Function to export a copy of that data for use in other modules:

export const getHeroes = () => { 

    return database.heroes.map(hero => ({...hero})) 

} 

 
export const getVillains = () => { 

    return database.villains.map(villain => ({...villain})) 

} 