import percentToRating from "../utils/percentToRating"

test('Should return a number divided by 20 to 1 decimal place', () => {
    expect(percentToRating(100, 5)).toEqual("5.0")
    expect(percentToRating(71, 5)).toEqual("3.5")
});
