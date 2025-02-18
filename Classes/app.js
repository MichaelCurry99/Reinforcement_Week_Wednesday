
// do ALL work inside main function. Please read instructions,
// and use comments to help you write out the process before coding.



const main = () => {


  // Problem 1:
  // Create a class Product that represents a product sold online.
  //  A product has a price, quantity and name.
  //   The class should have a method that prints a product's information in the following format:
  //    Banana, price 1.1, amount 13.
  //     Create two instances of the class and call the method created to print the product's details.

class Product {
constructor(price,quantity,name){
  this.productPrice = price;
  this.productQuantity = quantity;
  this.productName = name;
}
}

let newProduct = new Product('2.00','4',"Ramen");

  // Problem 2:
  // Create a GitHubRepository class with properties: userName, fileName, descriptionOfRepository, and code. 
  // Create a function that prints all properties.
  // Create an instance of the class and use the function.


  //   Problem 3:
  //   - Define a class called Pet with three properties: type, breed and age.
  //   - Create a method called formatProperties that prints all object properties using string templating.
  //   - Create a method called changeAge that takes a number and updates the age property of an object. 
  //   - Create a method called dogYears that checks if the pet type of the object is dog, if so return the age in dog years (age times 7), otherwise return the message "[PET TYPE] is not a dog!". 
  //   - Create an instance of the Pet Class called pet1. 
  //   - Print all property values of the object using the class method.
  //   - Create another instance of the Pet Class with diffrent property values called pet2.
  //   - Print all property values of the object using the class method. 
  //   - Change the age grade of pet1. 
  //   - Print the age of pet1 in dog years using the class method. 
  //   - Print the age of pet2 in dog years using the class method



  // Problem 4:

  // Create a People class with three properties: name, weight, and height.
  //  Create a method that can calculate the BMI of a person using the formula below. 
  //  Create an instance of the class and use the function.

  // EXAMPLE OUTPUT: BMI is (weight / (height * height)) x 703. Weight is in pounds and height is in inches.


  // CHALLENGE 1:

  // Create a Person Class with the properties Name (first, last), Age, Interests, Bio ('NAME is AGE years old. They like INTERESTS')

  // Create a class called Student that extends Person and adds the property Cohort to student.

  // Create a class called Teacher that extends Person and adds the properties subject, and students (students should be an array of Student objects) Create a method called addStudent that takes an instance of Student and adds a student object to the students array.

  // Create a method called listAllStudents that prints every student name and student cohort associated with a teacher.

  // Create an instance of the Teacher class called teacher1 with an empty student array.

  //  Create another instance of this class called teacher2 with an empty student array.

  //   Add two students to teacher1 using the class method.

  //   Add two students to teacher2 using the class method.

  //   List all students associated with teacher1 using the class method.

  //   List all studnets associated with teacher2 using the class method.


};

main();



