class DrinkRepository {
  constructor() {
    this.Drinks = [];
    this.saveData =
      '[{"drinkName":"espresso","ingredients":[],"productionCost":2,"markupPercentage":105,"salePrice":4.1},{"drinkName":"Caramel Macchiato","ingredients":["caramel","milk"],"productionCost":2.49,"markupPercentage":"310","salePrice":10.209},{"drinkName":"Mocha","ingredients":["espresso","milk","chocolate"],"productionCost":2.75,"markupPercentage":300,"salePrice":11}]';
    this.__loadSaveData();
  }

  //CRUD functions for Drinks array
  __AddDrink = (drinkObj) => {
    this.Drinks.push(drinkObj);
  };
  __Read = () => {
    return this.Drinks;
  };
  __Delete = (drinkObj) => {
    this.Drinks = this.Drinks.filter((drink) => drink !== drinkObj);
  };
  __Replace = (oldDrink, newDrink) => {
    const index = this.Drinks.indexOf(oldDrink);
    this.Drinks[index] = newDrink;
  };

  __loadSaveData = () => {
    const saveArray = JSON.parse(this.saveData);
    for (let dataObj of saveArray) {
      this.Drinks.push(
        new Drink(
          dataObj.drinkName,
          dataObj.ingredients,
          dataObj.productionCost,
          dataObj.markupPercentage
        )
      );
    }
  };
}
