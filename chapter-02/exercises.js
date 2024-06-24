
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
//if x is three, it should be space hashtag space, hashtag space hashtag, space hashtag space
function drawChessboard(x) {
  //create holding string for odd rows(space hash)
  let chess = ''
  //create holding string for even rows(hash space hash)
  let check = ''
  //create counting variable to start at 0
  let y = 0;
  //as long as y is less than half of x
  while (y <= Math.trunc(x / 2)) {
    //add one to y
    y++;
    //and add one to odd holding string
    chess += ` #`;
    //and add one to even holding string(?)
    check += `# # `;
    }//create mechanism for counting up to x
  for (let i = 0; i <= x; i++) {
    //do nothing if i is 0
    if (i !== 0) {
      //if it's the first row
      //if (i === 1) {
        //put in the odd string's current value and add a line break
      console.log(` ${chess}\n`);
      //on each other odd row
      } else if (i % 2) {
        //put in the odd string's current value and add a line break after
      console.log(` ${chess}\n`);
      } else {//on the evens,use the even string's value with a line break
      console.log(`${chess}\n`);
      }
    }
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