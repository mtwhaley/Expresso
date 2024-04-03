class Drink {
  constructor(drinkName, ingredients, productionCost, markupPercentage) {
    (this.itemName = drinkName),
      (this.ingredients = ingredients),
      (this.productionCost = productionCost),
      (this.markupPercentage = markupPercentage),
      (this.salePrice = this.calculateSalePrice());
  }

  calculateSalePrice = () =>
    (1 + this.markupPercentage / 100) * this.productionCost;

  //setters
  updateName(newName) {
    this.itemName = newName;
  }
  updateIngredients(newIngredients) {
    this.ingredients = newIngredients;
  }
  updateProductionCost(newCost) {
    this.productionCost = newCost;
    this.calculateSalePrice();
  }
  updateMarkupPercentage(newMarkup) {
    this.markupPercentage = newMarkup;
    this.calculateSalePrice();
  }

  //getters
  getName = () => this.itemName;
  getIngredients = () => this.ingredients;
  getProductionCost = () => this.productionCost.toFixed(2);
  getMarkupPercentage = () => this.markupPercentage;
  getSalePrice = () => this.calculateSalePrice().toFixed(2);

  //print to console
  print = () => {
    let returnString = "";
    returnString += this.itemName + "\n\t$" + this.salePrice.toFixed(2);
    returnString += " (" + this.productionCost.toFixed(2);
    returnString += " @ " + this.markupPercentage + "% markup)\n";
    returnString += "\tingredients:";
    for (let ing of this.ingredients) {
      returnString += "\n\t\t" + ing; //replace this with appropriate accessor
    }
    console.log(returnString);
  };
}
