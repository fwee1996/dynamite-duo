// Book-2 Column 2: Composing All HTML
// Import the function references that generate the HTML lists
import { HeroList } from "./heroes.js"
import { VillainList } from "./villains.js"

// Capture the return values of the HTML list generators
const heroListHTML = HeroList()
const villainListHTML = VillainList()

// Build up a single string containing both chunks of HTML
const theWholeEnchilada = `
    <h1>Heroes</h1>
    ${heroListHTML}

    <h1>Villains</h1>
    ${villainListHTML}
`
debugger

// Book-2 Column 2: Targeting a DOM Element
// JavaScript target the existing DOM element
// #container is way of specifying that you want an HTML element 
// whose id attribute equals "container". That just so happens to be this element.

// Look in your index.html file again to see it.

// <main id="container">
//     <h1>The Dynamite Duo</h1>
// </main>
const theExistingMainElement = document.querySelector("#container") //reference to the <main> element

//debugger-- this keyword is for loading up the webpage, 
//click refresh and see main element and innerHTML work on h1 element in inspect tab>sources
//  <h1>The Dynamite Duo</h1>
//commented out debugger bcs line 18 another debugger to test 


theExistingMainElement.innerHTML = theWholeEnchilada