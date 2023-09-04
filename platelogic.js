const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("How much weight would you like to lift? (in kilograms)\n", function(answer) {   
    plateCalculator(answer)
    console.log("Goodbye!")
    rl.close()
})

function plateCalculator(barbellWeightInKg) {

    console.log("Welcome to Barbell Plate Calculator")

    let weightOneSide = (barbellWeightInKg - 20)/2

    console.log("Total weight: " + barbellWeightInKg + "\nWeight required on one side: " + weightOneSide)

    const platesArr = [20,15,10,5,2.5,1.25]

    console.log("You will need:")
    for (var i = 0; i < platesArr.length; i++) {
        if (weightOneSide < 1) break //when no more plates to be added, stop the loop

        let elem = platesArr[i]

        let numOfPlates = Math.floor(weightOneSide/elem)
        if (numOfPlates < 1) continue //skip plate if remaining weight is smaller than plate

        let weightThisIteration = numOfPlates*elem
        console.log(numOfPlates + " * " + elem)
        weightOneSide -= weightThisIteration
    }

}



