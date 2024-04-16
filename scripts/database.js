const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ]
}

// function to export a copy of that data. 
//This function will be exported for use in other modules.
// copies the data for use in other modules

export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}

//add a new villains key that is an array of fun villain names
const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        // Remove this comment and create some villain objects
    ]
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}