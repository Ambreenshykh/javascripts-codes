


//first task: Program that accept two number from prompt and display the larger number on console.



let numOne = +prompt("Enter the first number : ");
let numTwo = +prompt("Enter the second number : ");
if(numOne>numTwo){
    console.log("The larger number is : "+numOne)
}else{
   console.log("The larger number is :  "+numTwo)
}



//task 2: javascrit conditional statement to find the sign of a number.Display an alert box 
//with the specific sign

let numThree = +prompt("Enter the number : ");
if(numThree>0){
    console.log("Number is positive "+numThree)
}else if(numThree<0){
    console.log("Number is negative " +numThree)
}



//task 3: program that accepts five prompt values and display the larger one in console.

let numberOne = +prompt("Enter the first Number");
let numberTwo = +prompt("Enter the second Number");
let numberThree = +prompt("Enter the third Number");
let numberFour = +prompt("Enter the fourth Number");
let numberFive = +prompt("Enter the fivth Number");

let largerNumber = Math.max(numberOne,numberTwo,numberThree,numberFour,numberFive);

console.log("larger number is : " +largerNumber)






// task 4: javascript program for loop that will iterate from 0 to 15.


for (let i =0 ; i <= 15 ; i++){    
    if(i%2===0){
        console.log("Even Number : "+i)
    }else{
        console.log("Odd Number : "+i)
    }
}


//task 5: program that compute the average marks of following students.then the avarage is used to determine
//the corresponding grades



  let studentName = prompt("Enter your Name : ");
  let marksEng = +prompt("Enter your Enlish Marks : ");
  let marksMaths = +prompt("Enter your Mathamatics marks");
  let marksScience = +prompt("Enter your science Marks")

  let total = (marksEng + marksMaths + marksScience);
  let average = ( total % 3);
  console.log("student Name :" +studentName);
  console.log("total marks : " +total);
  console.log("average :" +average) // tried my level best but cant find the problem here !!
  let grade;
    
    if (average === 100) {
      grade = "A+";
    } else if (average >= 90) {
      grade = "A";
    } else if (average >= 80) {
      grade = "B";
    } else if (average >= 70) {
      grade = "C";
    } else {
      grade = "F";
    }
    console.log("grade :" +grade);
  
  

  



//task6 : javascript program which iterates the integers from 1 to 100. but for multiple of three
// print frizz and multiples of 5 print buzz and both multiples print frizzbuzz.


for(let q=1; q<=100 ; q++){
    if(q % 3 === 0 && q % 5 === 0)
    console.log("frizzbuzz " +q);

else if(q%3 === 0 && q%5 != 0){
    console.log("frizz " +q);
}
else if(q%5 === 0 && q%3 != 0){
    console.log("buzz "+q);
}else{
    console.log( +q);
}
}

//task 7:write a JavaScript program to construct the * pattern ,using nested for loop

const rows = 5; 


for (let i = 1; i <= rows; i++) {
  let pattern = ""; 

  for (let j = 1; j <= i; j++) {
    pattern += "* "; 
  }
  console.log(pattern); 
}

// 