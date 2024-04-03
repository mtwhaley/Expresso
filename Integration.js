//import { DrinkService } from "./DrinkService";

class ExpressOService {
  ingredientList=[]
  constructor() {
    this.drinkService = new DrinkService();
    /*
        Create(drinkName, ingredientList, productCost, markupPercent)
        Read() **returns repository list**
        Update(drinkObject, options)
        Delete(drinkObject)
        PrintRepository() **prints list to the console**
        GetDrinkByName(drinkName) **returns drink object**
    */
    // this.customerService = new customerService();
    /*
        addCustomer(customerName, email, lifetimeSpent)
        readCustomerRepository() **prints to console and returns list**
        readCustomerEmail() **returns 
        deleteCustomer(customerEmail)
        updateCustomerEmail(oldEmail, newEmail)
        updateCustomerName(oldEmail, newName)
        updateCustomerLifetimeSpent(oldEmail, newLifetimeSpent)
    */
    this.ingredientService = new ingredientService();
    /*
        addIngredient(ingredientName, purchasingCost, unitAmount, unitOfMeasure)
        getIngredient(ingredientName)
        updateIngredient(existingIngredient, newIngredient)
        deleteIngredient(ingredientName)
    */
    // this.bakedGoodsService = new BakedGoodsService();
    /*

    */
    // this.purchaseService = new purchaseService();
    /*
        createReceipt(dateTimeString, list, customer)
        printReceipt(receiptID)
        updateReceipt(oldReceipt, dt, list, customer)
        deleteReceipt(receiptIDToBeDeleted)
    */
    this.#loadTestData();
  }
  getCost(standardObj, measuredObj) {
    console.log(standardObj, measuredObj)
    const rate=this.getConversionRate(standardObj._unitOfMeasure, measuredObj.measurement)

    const prorated=standardObj._purchasingCost * rate
    console.log(prorated)
  }
  getConversionRate(measurementStandardType, measurementToType) {
    const conversionFactors={
      "tsp": 768,
      "Tbsp": 256,
      "oz": 128,
      "cup": 16,
      "pint": 8,
      "quart": 4,
      "gallon": 1
    }
    return conversionFactors[measurementStandardType]/conversionFactors[measurementToType]
  }
  #loadTestData() {
    this.#loadTestIngredients()

    const recipes=Recipes

    for (let i=0;i<recipes.length;i++) {
      const {name, ingredients, markup}=recipes[i]
      console.log(name)
      for (let j=0;j< ingredients.length;j++) {
        console.log(ingredients[j])
        const {name, amount, measurement}=ingredients[j]
        const ingObj=this.ingredientService.getIngredient(name)
        console.log(this.getCost(ingObj, ingredients[j]))

        console.log(name)
      }
    }

    //remove this eventually
    this.ingredientList=this.ingredientService.ingredientRepository.ingredientList



    console.log(this.ingredientList)

  }
  #loadTestIngredients() {
    const ingredients=Ingredients
    for (let i=0;i<ingredients.length;i++) {
      const {name, cost, measurement}=ingredients[i]
      this.ingredientService.addIngredient(name, cost, 1, measurement)
    }

    //remove this eventually
    this.ingredientList=this.ingredientService.ingredientRepository.ingredientList

  }

}

const e = new ExpressOService();
