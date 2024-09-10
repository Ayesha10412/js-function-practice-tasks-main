// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the
//  average of those values.

function make_avg(numbers){
 let   size=numbers.length;
    let nums=[];
    let sum=0;
    for(const num of numbers){
nums.push(num);
sum=sum+num;
    }
    console.log(nums);
    console.log(sum);
    let avg=sum/size;
    console.log("Average:", Math.round(avg));
}
make_avg([3,5,2,6,3,7,4]);