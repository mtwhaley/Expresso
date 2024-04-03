//import { DrinkService } from "./DrinkService";

class ExpressOService {
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
    // this.ingredientService = new ingredientService();
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
  #loadTestData() {
    fetch("./TestData/Food.json")
      .then((response) => {
        response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }
}

const e = new ExpressOService();
