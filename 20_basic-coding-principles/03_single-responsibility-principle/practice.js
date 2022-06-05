/******************************** CONSTANTS *********************************/
const applePieRecipe = [
    { name: "pie crust", cost: 10.00, quantity: 1 },
    { name: "sugar", cost: 3.00, quantity: 0.5 },
    { name: "butter", cost: 1.00, quantity: 1 },
    { name: "apples", cost: 6.00, quantity: 7 },
    { name: "cinnamon", cost: 5.50, quantity: 1 },
    { name: "eggs", cost: 2.00, quantity: 1 },
];

const pumpkinPieRecipe = [
    { name: "pie crust", cost: 10.00, quantity: 1 },
    { name: "sugar", cost: 3.00, quantity: 0.5 },
    { name: "butter", cost: 1.00, quantity: 1 },
    { name: "pumpkin", cost: 3.75, quantity: 2 },
    { name: "cinnamon", cost: 5.50, quantity: 1 },
    { name: "eggs", cost: 2.00, quantity: 1 },
];

const cherryPieRecipe = [
    { name: "pie crust", cost: 10.00, quantity: 1 },
    { name: "sugar", cost: 3.00, quantity: 0.5 },
    { name: "butter", cost: 1.00, quantity: 1 },
    { name: "cherries", cost: 12.00, quantity: 10 },
    { name: "eggs", cost: 2.00, quantity: 1 },
];

const recipes = {
    applePie: applePieRecipe,
    pumpkinPie: pumpkinPieRecipe,
    cherryPie: cherryPieRecipe
};
/* DO NOT CHANGE THE CODE ABOVE */

/*************************** FUNCTION TO REFACTOR ****************************/

const printIngredient = (pie, recipe) => {
    let combiningMsg = `Combining ingredients for ${pie}: `
    combiningMsg += recipe.map(ingredient => ingredient.name).join(', ');
    console.log(combiningMsg);
    return combiningMsg;
}

const getCostOfPie = recipeName => {
    let result = recipeName.reduce((prev, current) => {
        return prev + current.cost;
    }, recipeName[0].cost);

    console.log(`Cost per pie: ${result}`);
    return result;
}

const getTotalCost = (cost, quantity) => {
    return cost * quantity;
}

const getRevenue = (total, profitMargin) => {
    return total * (profitMargin || 1.2);
}

function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
    // Find the recipe for the pieType specified
    const recipe = recipes[pieType];

    // Bake the number of pies specified by the pieQuantity
    for (let i = 0; i < pieQuantity; i++) {
        // Print the ingredients for each ingredient in the recipe
        printIngredient(pieType, recipe);

        // Print the nth pie that was baked
        console.log(`Baked pie ${i + 1}!`);
    }

    let cost = getCostOfPie(recipe);

    let total = getTotalCost(cost, pieQuantity);

    let revenue = getRevenue(total, profitMargin);

    console.log(`Sold ${pieQuantity} pies for $${revenue.toFixed(2)}!`);
}

/******************************* LOCAL TESTS *******************************/
// bakeAndSellPies("applePie", 5, 2.5);
// bakeAndSellPies("pumpkinPie", 2);
// bakeAndSellPies("cherryPie", 7, 1.7);

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
    bakeAndSellPies
};