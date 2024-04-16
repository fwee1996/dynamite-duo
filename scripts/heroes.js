import { getHeroes } from "./database.js"
const heroes = getHeroes()




// This function, when invoked, will generate a string of HTML that looks like this.
//and exported to other modules
// <ul>
//     <li>Dynoguy</li>
//     <li>Hyperspeed</li>
// </ul>
// You haven't invoked it yet. You'll get to that later.
// turn those ugly objects into beautiful HTML
// This function will also be exported for use in other modules.


export const HeroList = () => {
    let heroHTML = "<ul>"

    for (const hero of heroes) {
        heroHTML += `<li>${hero.name}</li>`
    }

    heroHTML += "</ul>"

    return heroHTML
}

