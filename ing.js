class Ingredient {
  constructor(ingredientName, purchasingCost, unitAmount, unitOfMeasure) {
    // Sets (private) instance fields/variables. The constructor is saying take this blueprint and do something with it.
    this._ingredientName = ingredientName;
    this._purchasingCost = purchasingCost;
    this._unitAmount = unitAmount;
    this._unitOfMeasure = unitOfMeasure;
  }

  set ingredientName(ingredientName) {
    this._ingredientName = ingredientName;
  }

  set purchasingCost(purchasingCost) {
    this._purchasingCost = purchasingCost;
  }

  set unitAmount(unitAmount) {
    this._unitAmount = unitAmount;
  }

  set unitOfMeasure(unitOfMeasure) {
    this._unitOfMeasure = unitOfMeasure;
  }

  get ingredientName() {
    return this._ingredientName;
  }

  get purchasingCost() {
    return this._purchasingCost;
  }

  get unitAmount() {
    return this._unitAmount;
  }

  get unitOfMeasure() {
    return this._unitOfMeasure;
  }
}
