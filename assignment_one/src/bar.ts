export let BEER_ONE : string = "heineken";
export let BEER_TWO : string = "corona";
export let COCKTAIL_ONE : string = "mojito";
export let COCKTAIL_TWO : string = "margerita";
export let COCKTAIL_SPECIAL : string = "special_bacardi";

const COCKTAILS : string[] = [ COCKTAIL_ONE, COCKTAIL_TWO, COCKTAIL_SPECIAL ];
const BEERS : string[] = [ BEER_ONE, BEER_TWO ];

export const isCocktail = (drink:string='') =>
       COCKTAILS.indexOf(drink.toLowerCase())>-1;
export const isBeer = (drink:string='') =>
       BEERS.indexOf(drink.toLowerCase())>-1;

// TODO: use Map
// Memorize prices for drinks.
const PRICES : object = {}

export function calculateCost(drink:string='',
       isStudent:boolean=false, amount:number=1) {
    // convert user input to lower case
    drink = drink.toLowerCase();

    if ( !isBeer(drink) && !isCocktail(drink) ){
        throw new Error("Drink does not exist");
    }

    amount = Number.parseInt(amount)
    if ( !Number.isFinite(amount) || amount<1 ) {
       throw new Error("Invalid amount of drinks ordered");
    }
    
    if (amount>2 && isCocktail(drink) ) {
       throw new Error("Not allowed to order more than 2 cocktails");
    }
    
    var finalPrice = PRICES[drink];
    
    if (isStudent && isBeer(drink)) {
        finalPrice = finalPrice-finalPrice/10;
    }
    
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

// Tonic water 
const ingredient_5 = () => 20;

// Gin
function ingredient_6() {
    return 85;
}

// shake it well
PRICES[COCKTAIL_TWO] =  ingredient_6() + ingredient_5() + ingredient_4();

// my favorite
PRICES[COCKTAIL_SPECIAL] = ingredient_6()/2 
  + ingredient_1() + ingredient_2() + ingredient_3();

// nothing special
PRICES[COCKTAIL_ONE] = 103;

// bitte ein bit
PRICES[BEER_ONE] = 74;

// corona 2019
PRICES[BEER_TWO] = 110;
