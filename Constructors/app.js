// Exercise 1: Create a constructor of Dog.
//  Make sure it has the attributes name, breed, color, gender.
//   There are no methods in this class. 
//   The main function below should work with the class you create.



function makeDoge(name,breed,color,gender){
  // Write your code here

     this.name = name;
     this.breed = breed;
     this.color = color;
     this.dogGender = gender;
  let newDog = new Dog('Fiddo', 'Lab', 'brown', 'male');

  // let Dog = {
  //   name: 'Fiddo',
  //   breed: 'Lab',
  //   color: 'brown',
  //   gender: 'male',
  // }
  alert(newDog.name); 
  alert(newDog.breed);
  alert(newDog.color);
  alert(newDog.gender);

 
}

makeDoge();





// exercise 2: Create a ToDo constructor.
//  Create the attributes: name, dueDate, list (this should be an array). 
//  There should not be a method in this constructor. 
//  The makeTodo function below should work with the constructor you create.

function makeTodo(name, dueDate, list){

  // write code here
  this.personName = name;
  this.dueDate = dueDate;
  this.list = list;
  
  let newToDoList = new ToDo('Kenn', 'Next Week', ['Do the dishes', 'Wash your clothes']);
  print(newToDoList.list);
}

makeTodo();





//exercise 3: Create a Person construtor.
// Create the name and species
// create a method, 'speak' that when called, alerts the user of the following 'Hello, my name is person.name!'
function makePerson(name, species){
// wirte code here

this.personName = name;
this.species = species;

  let Person1 = new Person('Diego', 'Homo Sapiens');

  alert(Person1.name);
  alert(Person1.species);
  alert(Person1.speak('Hello, my name is person.name!'));
} 
  
makePerson();


