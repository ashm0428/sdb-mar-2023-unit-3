/* 
Classes are a template for creating objects.
Classes encapsulate data with code in order to work on that data

Classes have methods NOT functions
Keyword "this" used in a class when referencing properties of the Class. 

Classes comes with a constructor method and that method is called first when we create a new Class Object.

Clas names are usually PascalCased: CollegeStudent UniversityTeacher

To declare a class you must use the keyword "class"

*/


class Pizza {

    constructor(diameter, type) {
        this.diameter = diameter;
        this.type = type;
    }
    // Method Examples
    bake() {
        return `Your ${this.diameter} inch pizza will be ready in 20 minutes.`;
    }
}

// ! To create an instance of the class we have to use the word "new ClassName"

let myPepperoniPizza = new Pizza(14, "pepperoni");

// ? How do I access properties on a class

console.log(myPepperoniPizza.diameter);
console.log(myPepperoniPizza.type);

// ? How do I change the value of the diameter to 25?
myPepperoniPizza.diameter = 25;

console.log(myPepperoniPizza.diameter);

// ? How do I call a method created in a class
console.log(myPepperoniPizza.bake());




// ! Rectangle Example
/* 
Create a rectangle class that will accept 2 parameters when creating the new Rectangle (height, width)
*/

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    isSquare() {
        return this.height === this.width;
    }

    area() {
        return this.height * this.width;
    }
}

let rect1 = new Rectangle(10,5);

console.log(rect1.isSquare());
console.log(rect1.area());


// ! Inventory Example
class Pantry {
    constructor(intialPantryItems) {
        this.inventory = intialPantryItems
    }

    displayInventory() {
        console.log("The current items you have in your pantry are: " + this.inventory);
    }

    addInventory(itemToBeAdded){
        this.inventory.push(itemToBeAdded);
    }
    removeInventory(itemToBeRemoved){
        let snapshotInventorySize = this.inventory.length;
        this.inventory = this.inventory.filter((item) => item !== itemToBeRemoved);
        return snapshotInventorySize === this.inventory.length ? "No items were removed." : "Item was removed.";
    }
}

let kitchenPantry = new Pantry(["beans", "noodles", "peanut butter"]);

kitchenPantry.addInventory("cereal");
console.log(kitchenPantry.removeInventory("beans"));
kitchenPantry.displayInventory();


