// ### Task-4  
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as 
// parameter and count how many 0’s are there in that string.

function count_zero(binary_number){
let count=0;
for (const zeros of binary_number){
    if(zeros==='0'){
        count++;
    }
}
console.log("String is:", binary_number);
console.log("Number of 0's in this string")
console.log(count);

}
count_zero('01010101010010');