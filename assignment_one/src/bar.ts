export let BEER_ONE = "heineken";
export let BEERTWO = 'corona';
export let CocktailOne = `mojito`;
export let cocktail2="margerita"
export let special_cocktail="special_bacardi";

export function calculateCost(drink, isStudent, amount) {
    if (amount> 2 && (drink == CocktailOne||drink == cocktail2)) {
    throw new Error("Not allowed to order more than 2 cocktails");
    }
    var finalPrice;
        if (drink == BEER_ONE) {
            finalPrice = 74;
        }
    else if (drink == CocktailOne) {
        finalPrice = 103;
    }
    else if (drink == BEERTWO) finalPrice = 110;
    else if (drink == BEERTWO) finalPrice = 110;
    else if (drink == cocktail2) {
        finalPrice = ingredient_6() + ingredient_5() + ingredient_4();
    }
    else if (drink == special_cocktail) {finalPrice = ingredient_6()/2 
        + ingredient_1() + ingredient_2() + ingredient_3();
    }
    else {
        throw new Error("Drink does not exist");
    }
    if (isStudent && (drink ==BEER_ONE||drink == BEERTWO)) {
        finalPrice = finalPrice-finalPrice/10;
    }
    if (!finalPrice) return;
    return Math.ceil(finalPrice*amount);
}

// Rum
function ingredient_1() {
    return 65;
}

// Mint
function ingredient_2() {
    return 10;
}

// Lime Juice
function ingredient_3() {
    return 10;
}

// Sugar
function ingredient_4() {
    return 10;
}

/**
 * Tonic water
 */ 
const ingredient_5 = () => 20;

// Gin
function ingredient_6() {
    return 85;
}
