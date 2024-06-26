
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/

function triangles(n) {
  let hash = '';
for (let i = 1; i <= n; i++) {
  hash += '#';
  console.log(hash);
  }
  
}


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/

function fizzBuzz(start, end) {
  for (i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
      } else if (i % 3 === 0) {
      console.log('fizz');
      } else if (i % 5 === 0) {
      console.log('buzz'); 
      } else {
      console.log(i);
      }
        }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this " # \n# #\n # \n# #"

example: drawChessboard(4);
LOGS =>

 # # #
# # #
 # # #
# # #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #

*/
//if x is three, it should be space hashtag, hashtag space hashtag space, space hashtag space
//if x is 4, it should be sp ha, ha sp ha sp ha sp, sp ha
function drawChessboard(x) {
  //if x is 1, return null
  if(x <= 1){return null};
  //create holding variable for the result, as well as some for odd rowe and even rows and a counter
  let output = '';
  let odds = '';
  let evens = '';
  let count = 0;
  //use for loop to count up to x.
  for (i = 1; i <= x; i++) {
    //when i is odd
    if (i % 2) {
      //add a space to the odds and a # to the evens
      odds += ' ';
      evens += '#';
    } else {//when i is even
      //add a # to the odds and a space to the evens
      evens += ' ';
      odds += '#';
    }//add 1 to the count
    count++;
  }//when the loop is done, start one counting up to the accumlulated count
  for (let a = 1; a <= count; a++) {
    //at each odd iteration, add an odd row with a line break
    if (a % 2) {
    output += `${odds}\n`;
  } else{//on the even iterations, an even row
    output += `${evens}\n`;
  }
  }//when this loop ends, return or log the output string
  console.log(output);
    
 
}



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}