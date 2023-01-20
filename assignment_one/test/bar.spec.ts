import { BEER_ONE, BEERTWO, CocktailOne, cocktail2, special_cocktail, calculateCost } from "../src/bar";
import { expect, assert, should } from 'chai';
import 'mocha';

describe('Ordering drinks gives the expected price', () => {
    it('Corctly calculates 74kr for a Heineken', () => {
        const price = calculateCost(BEER_ONE, false, 1);
        expect(price).to.equal(74);
    });
    it('Correctly calculates 103kr for a Mojito cocktail', () => {
        const price = calculateCost(CocktailOne, false, 1);
        expect(price).to.equal(103);
    });
    it('Correctly calculates 115kr for a Margerita cocktail', () => {
        const price = calculateCost(cocktail2, false, 1);
        expect(price).to.equal(115);
    });
    it('Correctly calculates 127.5 kr for a special bacardi cocktail', () => {
        const price = calculateCost(special_cocktail, false, '1');
        expect(price).to.equal(128);
    });
});

describe('Student discounts are correctly handled', () => {
    it('Correctly gives 10% discount for beers', () => {
        const price = calculateCost(BEER_ONE, true, 1);
        expect(price).to.equal(67);
        const price2 = calculateCost(BEERTWO, true, 1);
        expect(price2).to.equal(99);
    });
    it('Also gives discount for multiple beers', () => {
        const price = calculateCost(BEER_ONE, true, 3);
        expect(price).to.equal(200);
    });
    it('Does not allow discounts for cocktails', () => {
        const price = calculateCost(CocktailOne, true, 1);
        expect(price).to.equal(103);
        const price1 = calculateCost(cocktail2, true, 1);
        expect(price1).to.equal(115);
        const price2 = calculateCost(special_cocktail, true, 1);
        expect(price2).to.equal(128);
    });
});

describe('Error handling is correct', () => {
    it('Prevent people from ordering drinks that don\'t exist', () => {
        const COCKTAIL_THREE = 'chili_martini';
        assert.throws(() => calculateCost(COCKTAIL_THREE, false, 1), 'Drink does not exist');
    });
    it('Will NOT allow ordering more than two cocktails', () => {
        assert.throws(() => calculateCost(CocktailOne, false, 3), 'Not allowed to order more than 2 cocktails');
    });
    it('Will allow ordering more than 2 beers', () => {
        assert.doesNotThrow(() => calculateCost(BEER_ONE, false, 3))
    });
});
