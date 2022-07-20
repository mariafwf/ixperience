let first = 0;
let second = 1;
let num = 0;

// loop 10 times
for (let n = 0; n < 10; n++) {
    console.log(first); // print out first term (0)
    num = first + second; // calculate next term
    first = second; // shift terms to next ones
    second = num;
}