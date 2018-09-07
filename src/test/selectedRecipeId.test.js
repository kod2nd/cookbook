import selectedRecipeId from "../utils/selectedRecipeId"
import testData from "../test/helper/testData"

test('Should return true if recipe Ids match', () => {
    expect(selectedRecipeId(testData, "54321")).toBe(true)
});

test('Should return false if recipe Ids do not match', () => {
    expect(selectedRecipeId(testData, "12345")).toBe(false)
});
