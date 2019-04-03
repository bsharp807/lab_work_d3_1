// Create the following functions and test them by logging out their return value.

// MVP

// Part 1

var myNumbers = [1,2,3,4,5,6,7,8]

// 1.a Total the numbers - Create a function that takes in an array of numbers as an argument and calculates the sum of the array's numbers.

var total = 0
function addArray(numArray) {
  for (var num of numArray) {
    total += num;
  }
}
addArray(myNumbers);
// console.log(total);

// 1.b Find the evens - Create a function that takes in an array of numbers as an argument and returns a new array containing just the even numbers.
var evens = []
function evenArray(numArrayTwo) {
  for (var num of numArrayTwo) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  console.log(evens);
}

// evenArray(myNumbers);

// Part 2

var myBill = [
  {
    meal: 'Green Curry',
    price: 10,
    customer: 'Sally'
  }, {
    meal: 'Sea Bass',
    price: 12,
    customer: 'Upul'
  }, {
    meal: 'Fish and Chips',
    price: 10,
    customer: 'Rita'
  }, {
    meal: 'Stick Toffee Pudding',
    price: 4,
    customer: 'Upul'
  }, {
    meal: 'Apple Pie',
    price: 5,
    customer: 'Sally'
  }
]

// 2.a. Total the bill - Create a function that takes in a bill as an argument and calculates the total cost of the bill.

total = 0
var totalBill = (billArray) => {
  for (var bill of billArray) {
    total += bill.price
  }
  return total;
}
// console.log(totalBill(myBill));

// 2.b. Find meals by customer name - Create a function that takes in a bill and a customer name as an argument and returns a new array containing all the items for that customer.
food = []
var findCustomer = (customerName, billArray) => {
  for (var bill of billArray) {
    if (customerName === bill.customer) {
      food.push(bill.meal)
    }
  }
  console.log(food);
}
// findCustomer("Sally", myBill)


// 2.c. Using the functions you wrote in part 4 and 5, find the total that Sally spent.

total = 0
var sallyBill = (billArray, customerName) => {
  for (var bill of billArray) {
    if (customerName === bill.customer) {
      total += bill.price
    }
  }
  return total;
}
// console.log(sallyBill(myBill, "Sally"));
// 2.d. Find average item price - Create a function that takes in bill as an argument and calculates the average price of all the items.


total = 0
var totalBill = (billArray) => {
  for (var bill of billArray) {
    total += bill.price
  }
  return total / billArray.length;
}
// console.log(totalBill(myBill));

// Extension

// Part 3
// Have a look at the following bodyBuilder object.

var bodyBuilder = {
  strength: 2,
  workOut: (mins) => {
   bodyBuilder.strength = bodyBuilder.strength * mins;
 },
  lazeAbout(hours) {
    bodyBuilder.strength = bodyBuilder.strength / hours;
  }
}

// 3.a. Log out the the bodyBuilder's strength - the value should be 2.
console.log(bodyBuilder.strength);

// 3.b. Use the workOut function to update the bodyBuilder's strenth.

bodyBuilder.workOut(120)
console.log(bodyBuilder.strength);

// 3.c. Create another function on the bodyBuilder called `lazeAbout`, that takes in a number of hours as an argument. Decrease the bodyBuilder's strength by dividing the strength by the number of hours.

bodyBuilder.lazeAbout(10);
console.log(bodyBuilder.strength);
