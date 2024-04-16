import { getVillains } from "./database.js"

const villains = getVillains()


// This function, when invoked, will generate a string of HTML that looks like this.

// <ul>
//     <li>Villain 1</li>
//     <li>Villain 2</li>
//     <li>Villain 3</li>
//     <li>Villain 4</li>
// </ul>
// You haven't invoked it yet. You'll get to that later.
export const VillainList = () => {
    let villainHTML = "<ul>"

    for (const villain of villains) {
        villainHTML += `<li>${villain.name}</li>`
    }

    villainHTML += "</ul>"

    return villainHTML
}