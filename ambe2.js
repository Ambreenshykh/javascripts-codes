

// //task1: Write a function that creates a closure and returns a function that can add
// //a specific number to any number passed to it.

alert("Assignment -02");



function addNumber(num) {
    return function(x) {
      return x + num;
    };
  }
  
var add5 = addNumber(5);
console.log(add5(20)); 





// //task2: rite a recursive function that searches an array for a specific value. The
// // function should return true if the value is found, and false if it is not. You
// // can assume that the array is not nested.

function searchArray(arr, value) {
    
    if (arr.length === 0) {
      return false;
    }
    
    // recursive case: check if the first element of the array is the value
    if (arr[0] === value) {
      return true;
    }
    
    // if the value is not found, call the function recursively with the rest of the array
    return searchArray(arr.slice(1), value);
  }
  
  const arr = [1, 2, 3, 4, 5];
const value = 3;
console.log(searchArray(arr, value)); // true

const value2 = 6;
console.log(searchArray(arr, value2)); // false




//task 3: Write a function that adds a new paragraph element to the bottom of an
//HTML document. The function should take a string argument that will be
//used as the text content of the new paragraph element.



let paraGraph =document.querySelector("P")

 paraGraph.innerHTML = "<h2> task 3 </h2>"

 console.log(paraGraph);

  

//task4: . Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.


function addNewListItem(text) {
  // Create a new list item element
  var listItem = document.createElement("li");
  
  // Set the text content of the new list item element
  var content = document.createTextNode(text);
  listItem.appendChild(content);
  
  // Find the unordered list element by its ID
  var list = document.getElementById("myList");
  
  // Append the new list item element to the unordered list element
  list.appendChild(listItem);
}


//task5:. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color

//note: i put this statement in html ..search this from google and w3school.


// {/* <p id="paragraph"></p>

// <button type="button" onclick="myFunction()">Set background color</button>

// <script>
// function myFunction() {
//   document.body.style.backgroundColor = "yellow";
// }
// </script> */}


















//task 6: Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.



var myObj = { name: "embo", age: 18 };
saveObjectToLocalStorage("myKey" , myObj);


function saveObjectToLocalStorage(key, obj) {
 
  var objStr = JSON.stringify(obj);
  
 
  localStorage.setItem(key, objStr);
}


// task7: Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.


function getObjectFromLocalStorage(key) {
  
  var objStr = localStorage.getItem(key);

  var obj = JSON.parse(objStr);

  return obj;
}

var myObj = getObjectFromLocalStorage('myKey');
console.log(myObj);


// task 8: Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.


function saveObjectPropertiesToLocalStorage(obj) {
 
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
     
      localStorage.setItem(prop, obj[prop]);
    }
  }
 
  var newObj = {};
 
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
    
      newObj[prop] = localStorage.getItem(prop);
    }
  }
 
  return newObj;
}

var myObj = { name: 'Popaye', age: 100 };
var newObj = saveObjectPropertiesToLocalStorage(myObj);
console.log(newObj);



