import recipeIdMatches from "../utils/recipeIdMatches"
import testData from "../test/helper/testData"

test('Should return true if recipe Ids match', () => {
    expect(recipeIdMatches(testData, "54321")).toBe(true)
});

test('Should return false if recipe Ids do not match', () => {
    expect(recipeIdMatches(testData, "12345")).toBe(false)
});

test('Should return false if called with nothing', () => {
    expect(recipeIdMatches()).toBe(false)
});

