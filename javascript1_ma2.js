//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

  var one = {
	a: 2,
	b: function() {
	return this.a+3;
	}
};

console.log(one.b());

var c = Object.create(one);

c.a = 1;

console.log(c.b());



//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

myArray = [1,2,3,4,5,6,7,8,9,10];

var numbers = myArray.slice(4,5);

console.log(numbers); 


//3. Delete the last number in the array that you created above.

myArray.pop();

console.log(myArray); 

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
	
function strawberrySentence() {
	
		function myFunction() {
			var str = document.getElementById("sentence").innerHTML;
			var res = str.replace("Strawberries", "Bananas");
			document.getElementById("sentence").innerHTML = res;
		};
		
		function mySecondFunction() {
			var str = document.getElementById("sentence").innerHTML;
			var res = str.replace("strawberries", "bananas");
			document.getElementById("sentence").innerHTML = res;
		}
		
		function myThirdFunction() {
			var str = document.getElementById("sentence").innerHTML;
			var res = str.replace("strawberry", "banana");
			document.getElementById("sentence").innerHTML = res;
		} 
		
		myFunction();
		mySecondFunction();
		myThirdFunction();
};

strawberrySentence();



//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

myFootballClubs = ["Manchester United", "Sheffield United", "Leeds", "Birmingham"];


function myFootball() {
	myFootballClubs.splice(0,4,"Audi","BMW","Toyota","Ford");
}

console.log(myFootballClubs);


//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var threePeople = [
	{'name' : 'Lisa', 'haircolor' : 'Brown', 'houseowner' : true},
	{'name' : 'Andrew', 'haircolor' : 'Black', 'houseowner' : true},
	{'name' : 'Monica', 'haircolor' : 'Blond', 'houseowner' : false}
	];

var useFilter = threePeople.filter(function (person) {
	return (person.name === "Lisa");
})

console.log(useFilter);

//7. Create a simple function that logs the date.

const now = new Date();

now;

console.log(now);


