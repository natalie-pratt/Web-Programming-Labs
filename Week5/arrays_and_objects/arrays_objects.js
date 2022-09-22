/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('For this lab, please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
}

let latitude = iss_location.iss_position.latitude // Retrieve latitude
    console.log() // Space between lines
    console.log('ISS Latitude: ' + latitude)
let longitude = iss_location.iss_position.longitude // Retrieve longitude
    console.log('ISS Longitude: ' + longitude)


/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

rates.CHF = 1.1787 // Add key/value to rates

let euros = 100
let AUD = rates.AUD // Retrieve exchange rate from rates
let euroToAud = euros * AUD // Find exchange between Euros and Australian dollars
console.log('\n100 Euros to AUD: ' + euroToAud.toFixed(2)) // Print to the nearest 2 decimals

let ratesList = [] // Create list of rates
for (let currency in rates) { // Loop over rates dictionary

    let rate = rates[currency] // Define each rate individually
    ratesList.push(rate) // Add rate to list
}

// Get the highest rate from list
let highestRate = ratesList.reduce((a, b) => Math.max(a, b)) // Code adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
console.log('\nHighest exchange rate: ' + highestRate)




/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
    { name: "Bill Clinton", cat: "Socks" },
    { name: "Gary Oldman", cat: "Soymilk" },
    { name: "Katy Perry", cat: "Kitty Purry" },
    { name: "Snoop Dogg", cat: "Miles Davis" }
]

// Loop through list of cats and owners dictionaries
cats_and_owners.forEach(function (dictionary){

    let catOwner = dictionary.name // Get each cat owner name
    let cat = dictionary.cat // Get each cat name
    if (catOwner === "Gary Oldman") { // Only print cat name if owner's name is Gary Oldman
        console.log('\nGary Oldman\'s cat is named ' + cat)
    }
})

let TSwiftCat = {name: 'Taylor Swift', cat: 'Meredith'} // Make Taylor Swift and her cat's names into dictionary
cats_and_owners.push(TSwiftCat) // Add Taylor Swift's name and cat to list

console.log() // Space between lines

cats_and_owners.forEach(function (dictionary){ // Loop through cats and owners again

    let catOwner = dictionary.name // Get cat owner name and cat name
    let cat = dictionary.cat

    console.log(`${catOwner}'s cat is named ${cat}`) // Print owner and cat name
})



/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

let nobel_prize_winners_2017 = {
    "prizes":[
        {
            "year":"2017",
            "category":"physics",
            "laureates":[
                {
                    "id":"941",
                    "firstname":"Rainer",
                    "surname":"Weiss",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"2"
                },
                {
                    "id":"942",
                    "firstname":"Barry C.",
                    "surname":"Barish",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                },
                {
                    "id":"943",
                    "firstname":"Kip S.",
                    "surname":"Thorne",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                }
            ]
        },
        {
            "year":"2017",
            "category":"chemistry",
            "laureates":[
                {
                    "id":"944",
                    "firstname":"Jacques",
                    "surname":"Dubochet",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"945",
                    "firstname":"Joachim",
                    "surname":"Frank",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"946",
                    "firstname":"Richard",
                    "surname":"Henderson",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"medicine",
            "laureates":[
                {
                    "id":"938",
                    "firstname":"Jeffrey C.",
                    "surname":"Hall",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"939",
                    "firstname":"Michael",
                    "surname":"Rosbash",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"940",
                    "firstname":"Michael W.",
                    "surname":"Young",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"literature",
            "laureates":[
                {
                    "id":"947",
                    "firstname":"Kazuo",
                    "surname":"Ishiguro",
                    "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share":"1"
                }
            ]
        },
        {
            "year":"2017",
            "category":"peace",
            "laureates":[
                {
                    "id":"948",
                    "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share":"1",
                    "surname":""
                }
            ]
        },
        {
            "year":"2017",
            "category":"economics",
            "laureates":[
                {
                    "id":"949",
                    "firstname":"Richard H.",
                    "surname":"Thaler",
                    "motivation":"\"for his contributions to behavioural economics\"",
                    "share":"1"
                }
            ]
        }
    ]
}

let laureateCounter = 0 // Keep track of number of laureates

// Retrieve list out of dictionary to get literature laureate name
for (let prizes in nobel_prize_winners_2017) {

    let prize = nobel_prize_winners_2017.prizes // Define what a prize is

    prize.forEach(function (prizes) { // Get list of prizes

        let category = prizes.category // Get categories
        let laureates = prizes.laureates

        laureates.forEach(function (key) { // Loop through keys in laureates

            laureateCounter++ // Increase number of laureates for each loop

            if (category === 'literature') { // Get category: literature

                let laureateFirstName = key.firstname // Get name of award winner
                let laureateSurname = key.surname
                let laureateFullName = laureateFirstName + ' ' + laureateSurname
                console.log('\nLiterature Nobel Prize winner: ' + laureateFullName)
            }

        })

    })
}

console.log() // Space between lines
console.log('Winners in Physics category:')

for (let prizes in nobel_prize_winners_2017) {

    let prize = nobel_prize_winners_2017.prizes // Define what a prize is

    prize.forEach(function (prizes) { // Get list of prizes

        let category = prizes.category // Get categories
        let laureates = prizes.laureates

        if (category === 'physics') { // Get category: literature

            laureates.forEach(function (key) { // Loop through keys in laureates

                let laureateID = key.id
                console.log(laureateID)
            })
        }
    })
}

console.log() // Space between lines
console.log('All category names:')
let categoryCount = 0

for (let prizes in nobel_prize_winners_2017) {

    let prize = nobel_prize_winners_2017.prizes // Define what a prize is

    prize.forEach(function (prizes) { // Get list of prizes

        let category = prizes.category // Get categories
        console.log(category)
        categoryCount++
    })
}

console.log() // Space between lines
console.log(`There are ${categoryCount} categories`) // Print category counter

console.log() // Space between lines
console.log(`There were ${laureateCounter} laureates in 2017`) // Print laureate counter