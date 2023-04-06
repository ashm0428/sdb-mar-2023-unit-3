let mcDonaldsMenu = {
    hamburger: 0.99,
    fries: 1.0,
    drink: 1.0,
    shake: 2.5,
    "big mac": 1.99,
    "happy meal": 4.99,
  };
  //  hamburger + fries
  let order1 = mcDonaldsMenu.hamburger + mcDonaldsMenu.fries;
  console.log(order1);
  console.log(mcDonaldsMenu["beans"]);
  for (menuItemName in mcDonaldsMenu) {
    let value = mcDonaldsMenu[menuItemName];
  }
  
  // ? Create a function that will accept string with commas dividing the order up so that we can get total.
  
  // order = "hamburger, shake, big mac" ["hamburger", "shake", "big mac"]
  // Function should return the total
  
  function getTotalPrice(foodOrder) {
    if (typeof foodOrder !== "string") {
      return "function expected string and was supplied a " + typeof foodOrder;
    }
    // how can I get the food order that comes in into an array
    let orderSplit = foodOrder.split(", ");
    //   console.log(orderSplit);
    // Loop through the array and look up the item
    let total = 0;
    for (menuItemName of orderSplit) {
      if (mcDonaldsMenu[menuItemName] !== undefined) {
        let menuItemPrice = mcDonaldsMenu[menuItemName];
        total = total + menuItemPrice;
      }
    }
    return total;
    // Keep track of a total
  }
  let order2 = "hamburger, shake, big mac, fries, beans";
  let order2Total = getTotalPrice(order2);
  console.log(order2Total);
  
let order3 = 32
 let order3Total = getTotalPrice(order3);  
 console.log(order3Total)