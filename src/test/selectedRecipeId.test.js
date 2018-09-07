import selectedRecipeId from "../utils/selectedRecipeId"
import testData from "../test/helper/testData"

test('Should return itself if an argument is passed into it', () => {
    expect(selectedRecipeId(testData.recipe_id)).toBe("54321")
});

test('Should return null if empty string is passed as an argument', () => {
    expect(selectedRecipeId("")).toBe(null)
});