// import { Drink } from "./Drink";
// import { DrinkRepository } from "./DrinkRepository";

/*
 Accessible functions of the DrinkService class:

 Create
    (drinkName, ingredientList, productCost, markupPercent)
 Read
    ()
    **returns repository list**
 Update
    (drinkObject, options)
 Delete
    (drinkObject)
 PrintRepository
    ()
    **prints list to the console**
 GetDrinkByName
    (drinkName)
    **returns drink object**
*/

class DrinkService {
  #repo = new DrinkRepository();

  //validation functions
  #validateMarkup = (markup) => {
    if (isNaN(markup)) {
      markup = Number(markup.slice(0, -1));
    }
    if (isNaN(markup)) {
      return;
    }
    return markup;
  };

  #validateProductionCost = (cost) => {
    if (isNaN(cost)) {
      cost = Number(cost.slice(1));
    }
    if (isNaN(cost)) {
      return;
    }
    return Number(cost);
  };

  //instantiation function
  #createDrink(name, ingredients, productionCost, markupPercentage, addToList) {
    const valCost = this.#validateProductionCost(productionCost);
    const valMarkup = this.#validateMarkup(markupPercentage);

    if (valMarkup === undefined || valCost === undefined) {
      console.log("handle undefined");
    }

    const newDrink = new Drink(name, ingredients, valCost, valMarkup);
    if (addToList) this.repo.__AddDrink(newDrink);
    else return newDrink;
  }

  //CRUD functions
  Create = (
    name,
    ingredientArray,
    productionCost,
    markupPercentage,
    addToList
  ) => {
    this.#createDrink(
      name,
      ingredientArray,
      productionCost,
      markupPercentage,
      addToList
    );
  };
  Read = () => {
    return this.#repo.__Read();
  };
  Update = (oldDrink, obj = {}) => {
    const newDrink = this.#createDrink(
      obj.name != undefined ? obj.name : oldDrink.getName(),
      obj.ingredients != undefined ? obj.ingredients : oldDrink.ingredients,
      obj.productionCost != undefined
        ? obj.productionCost
        : oldDrink.productionCost,
      obj.markupPercentage != undefined
        ? obj.markupPercentage
        : oldDrink.markupPercentage
    );
    this.#repo.__Replace(oldDrink, newDrink);
  };
  Delete = (drink) => {
    this.#repo.__Delete(drink);
  };

  PrintRepository = () => {
    for (let drink of this.repo.__Read()) {
      drink.print();
    }
  };
  GetDrinkByName = (drinkName) => {
    for (let drink of this.repo.__Read()) {
      if (drink.drinkName.toUpperCase() === drinkName.toUpperCase())
        return drink;
    }
  };
}
