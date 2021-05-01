// NOTE: NEOGCAMP YouTube Channel

var x = 100;
var y = 200;

console.log(x);
console.log(x + y);

console.log("Stallone Fernandes".length);
//String
if (x < y) {
  console.log("X Is Lesser Than Y ");
} else if (x > y) {
  console.log("Y Is Lesser Than X");
}

//Logical Operators
if (x < y && x == 100) {
  console.log("Hello");
}

//Loops
console.log("For Loop");
for (var i = 0; i < 10; i++) {
  console.log(i);
}

i = 0;
while (i < 5) {
  console.log("While Loop");
  i++;
}

do {
  console.log("Do While Loop");
  console.log(i);
  i++;
} while (i < 10);

//Functions
function printMe(x) {
  console.log("Hello " + x);
}

printMe("Stallone");

//Arrow Functions
