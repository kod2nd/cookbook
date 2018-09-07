const percentToRating = (percentage, ratingSteps) => {
    const divisor = 100 / ratingSteps
    const rating = percentage / divisor;
    return rating.toFixed(1);
  };

export default percentToRating