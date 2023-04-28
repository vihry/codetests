import { BEER_ONE, BEER_TWO,
  COCKTAIL_ONE, COCKTAIL_TWO, COCKTAIL_SPECIAL,
  calculateCost, isBeer, isCocktail } from "../src/bar";
import { expect, assert, should } from 'chai';
import 'mocha';

describe('Test correct initialization', () => {
    it('Correctly detects beer', () => {
        expect(isBeer(COCKTAIL_ONE)).to.be.false;
        expect(isBeer(BEER_ONE)).to.be.true;
	expect(isBeer(BEER_TWO)).to.be.true;
	expect(isBeer('')).to.be.false;
	expect(isBeer('CoRONa')).to.be.true;
    });
    it('Correctly detects cocktails', () => {
        expect(isCocktail(BEER_ONE)).to.be.false;
        expect(isCocktail(COCKTAIL_ONE)).to.be.true;
	expect(isCocktail(COCKTAIL_TWO)).to.be.true;
	expect(isCocktail(COCKTAIL_SPECIAL)).to.be.true;
	expect(isCocktail()).to.be.false;
    });
});

describe('Ordering drinks gives the expected price', () => {
    it('Correctly calculates 74kr for a Heineken', () => {
        const price = calculateCost(BEER_ONE, false, 1);
        expect(price).to.equal(74);
    });
    it('Correctly calculates 103kr for a Mojito cocktail', () => {
        const price = calculateCost(COCKTAIL_ONE, false, 1);
        expect(price).to.equal(103);
    });
    it('Correctly calculates 115kr for a Margerita cocktail', () => {
        const price = calculateCost(COCKTAIL_TWO, false, 1);
        expect(price).to.equal(115);
    });
    it('Correctly calculates 127.5 kr for a special bacardi cocktail', () => {
        const price = calculateCost(COCKTAIL_SPECIAL, false, '1');
        expect(price).to.equal(128);
    });
    it('Correctly calculates 74kr for a Heineken with default params', () => {
        const price = calculateCost(BEER_ONE);
        expect(price).to.equal(74);
    });
});

describe('Student discounts are correctly handled', () => {
    it('Correctly gives 10% discount for beers', () => {
        const price = calculateCost(BEER_ONE, true, 1);
        expect(price).to.equal(67);
        const price2 = calculateCost(BEER_TWO, true, 1);
        expect(price2).to.equal(99);
    });
    it('Also gives discount for multiple beers', () => {
        const price = calculateCost(BEER_ONE, true, 3);
        expect(price).to.equal(200);
    });
    it('Does not allow discounts for cocktails', () => {
        const price = calculateCost(COCKTAIL_ONE, true, 1);
        expect(price).to.equal(103);
        const price1 = calculateCost(COCKTAIL_TWO, true, 1);
        expect(price1).to.equal(115);
        const price2 = calculateCost(COCKTAIL_SPECIAL, true, 1);
        expect(price2).to.equal(128);
    });
});

describe('Error handling is correct', () => {
    it('Prevent people from ordering drinks that don\'t exist', () => {
        const COCKTAIL_THREE = 'chili_martini';
        assert.throws(() => calculateCost(COCKTAIL_THREE, false, 1), 'Drink does not exist');
    });
    it('Will NOT allow ordering more than two cocktails', () => {
        assert.throws(() => calculateCost(COCKTAIL_ONE, false, 3), 'Not allowed to order more than 2 cocktails');
    });
    it('Will allow ordering more than 2 beers', () => {
        assert.doesNotThrow(() => calculateCost(BEER_ONE, false, 3))
    });
    it('Raise exception on zero count of drinks', () => {
        assert.throws(() => calculateCost(COCKTAIL_SPECIAL, false, 0), 'Invalid amount of drinks ordered' );
    });
    it('Raise exception when all params are default', () => {
        assert.throws(() => calculateCost(), 'Drink does not exist' );
    });
});

