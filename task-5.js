// ### Task-5 
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd.
//  If even return `Even`. If odd return `Odd`
function odd_even(num){
    let number = parseInt(num);
    console.log(number);
    if(number%2==0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
odd_even(45.4);