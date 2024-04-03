class ingredientService {
  constructor() {
    this.ingredientRepository = new ingredientRepository();
  }

  validatePurchasingCost = (purchasingCost) => {
    if (typeof purchasingCost !== "number") {
      return false;
    }
    return Math.round(purchasingCost * 100) / 100 === purchasingCost;
  };

  addIngredient = (
    ingredientName,
    purchasingCost,
    unitAmount,
    unitOfMeasure
  ) => {
    if (!this.validatePurchasingCost(purchasingCost)) {
      throw new Error(
        "Purchasing cost must be a number with exactly two decimal places."
      );
    }
    return this.ingredientRepository.addIngredient(
      ingredientName,
      purchasingCost,
      unitAmount,
      unitOfMeasure
    );
  };

  getIngredient = (ingredientName) => {
    return this.ingredientRepository.getIngredient(ingredientName);
  };

  updateIngredient = (existingIngredient, newIngredient) => {
    this.ingredientRepository.updateIngredient(
      existingIngredient,
      newIngredient
    );
  };

  deleteIngredient = (ingredientName) => {
    this.ingredientRepository.deleteIngredient(ingredientName);
  };
}
