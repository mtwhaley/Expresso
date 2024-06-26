class ingredientRepository {
  constructor() {
    this.ingredientList = [];
  }

  // Create/add operation
  addIngredient(ingredientName, purchasingCost, unitAmount, unitOfMeasure) {
    // Calling constructor model
    let newIngredient = new Ingredient(
      ingredientName,
      purchasingCost,
      unitAmount,
      unitOfMeasure
    );
    this.ingredientList.push(newIngredient);
    return newIngredient;
  }

  // Delete operation
  deleteIngredient(ingredientName) {
    let newIngredientList = [];
    for (let ingredient of this.ingredientList) {
      if (
        ingredient.ingredientName.toUpperCase() !== ingredientName.toUpperCase()
      ) {
        newIngredientList.push(ingredient);
      }
    }
    this.ingredientList = newIngredientList;
  }

  // Read operation method
  getIngredient(ingredientName) {
    for (let ingredient of this.ingredientList) {
      if (
        ingredient.ingredientName.toUpperCase() === ingredientName.toUpperCase()
      ) {
        return ingredient;
      }
    }
    throw new Error(`Ingredient "${ingredientName}" does not exist.`);
  }

  // Update operation
  updateIngredient(ingredient, newIngredient) {
    const ingredientIndex = this.ingredientList.indexOf(ingredient);
    this.ingredientList[ingredientIndex] = newIngredient;
  }
}
