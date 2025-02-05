// we know how we were writing function in java script but there is an another way of writing functions like using arrow functions

// function sum(a,b){ // this is the normal way of using function
//     return a + b;
// }

const sum = (a,b) => {
    return a + b;
}
//const ans = sum(2,3);
//console.log(ans);


// now understanding the map function 
// problem statement -> given ans array we have to multiply each value of array with 2 and give the updated array

const arr = [1,2,3,4,5,6];

const newArr = [];
// for(let i=0; i<arr.length; i++){// now this is the normal way of solving the above problem statement
//     newArr.push(arr[i] * 2);
// }

// now using map function we will transform the array
// function transform(i){
//     return i * 2;
// }
// const ans = arr.map(transform);

// const ans = arr.map(function(i){
//     return i*2;
// });

// now in the above input arr we have to return those elements from the array which are divisible by 2

for(let i=0; i<arr.length; i++){ // normalway of doing the above question
    if(arr[i] % 2 == 0){
        newArr.push(arr[i]);
    }
}

function filterLogic(n){
    if(n % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

// const ans = arr.filter(filterLogic);

// or we can write the above code like below as well

const ans = arr.filter(function(n){
    if(n%2 == 0){
        return true;
    }
    else{
        return false;
    }
})
console.log(ans);