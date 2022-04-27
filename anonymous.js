// a) Print odd numbers in an array 

let returnOddNumber = function (array) {

    //inititalizing the variable to store the resultant array off odd numbers
    let oddNumbers = [];

    //looping through each item of input array and pushing it to initialized "oddNumbers" array
    for (let n of array) {
        if (n % 2 !== 0) {
            oddNumbers.push(n);
        }
    }
    return oddNumbers;

}

console.log(returnOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Solving the above problem by using forEach loop

// let oddNumbers = [];

// array.forEach(number => {
//     if (number % 2 !== 0) {
//         oddNumbers.push(number);
//     }
// });

// return oddNumbers;
// console.log(oddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// b) Convert all the strings to title caps in a string array

let toTitleCase = function (str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

console.log(toTitleCase("titlecase done"));


// c) Sum of all numbers in an array

let sumOfArray = function (arr) {
    // initialize sum  
    let sum = 0;

    // Iterate through all elements and add them to sum  
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];

    return sum;
}

console.log(sumOfArray([1, 2, 3, 4]));


// d) Return all the prime numbers in an array

let checkPrime = function (number) {
    if (number <= 1) {
        return false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}

let returnPrimeArray = function (arr1) {
    let primeNumbers = [];

    arr1.forEach(function (element) {
        const isPrime = checkPrime(element);
        if (isPrime) {
            primeNumbers.push(element);
        }
    });
    return primeNumbers;
}

console.log(returnPrimeArray([3, 12, 50, 23, 0]));


// e) Return all the palindromes in an array

// case 1
function checkPal(str) {
    let revStr = str.split("").reverse().join("").toLowerCase();
    let strLowerCase = str.toLowerCase();
    // console.log(revStr);
    return revStr === strLowerCase;
}

// console.log(checkPal("omkar"));


let returnPalinArray = function (arr2) {
    let palinArray = [];

    arr2.forEach(function (element) {
        const isPalin = checkPal(element);
        if (isPalin) {
            palinArray.push(element);
        }
    });
    return palinArray;
}

console.log(returnPalinArray(["omkar", "madam"]));


//case 2 -- custom code to check palin or not 

// let isPal2 = function (str){
//     let newStr = str.toLowerCase();

//     let left = 0;
//     let right = str.length-1;

//     while(left < right){
//         if (str[left] !== str[right]){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPal2("omkar"));


// f) Return median of two sorted arrays of the same size

// finding median for even num array
let median_of_EvenArray = function (arr) {
    let result = (arr[(arr.length / 2)] + arr[((arr.length / 2) - 1)]) / 2;
    console.log("median_of_EvenArray " + result);
}

//find median of two arrays
let median_arr = function (arr1, arr2) {

    // finding median for odd num array
    let median_of_OddArray = function (arr) {
        let result = Math.floor(arr.length / 2);
        return ("Array is ODD and its median is " + arr[result]);
    }

    // finding median for even num array
    let median_of_EvenArray = function (arr) {
        let result = (arr[(arr.length / 2)] + arr[((arr.length / 2) - 1)]) / 2;
        return ("Array is EVEN and its median is " + result);
    }

    // joining two arrays and sorting them
    let concat_with_sort = arr1.concat(arr2).sort();

    if (concat_with_sort.length % 2 !== 0) {
        let odd_result = median_of_OddArray(concat_with_sort);
        console.log(odd_result);
    } else {
        let even_result = median_of_EvenArray(concat_with_sort);
        console.log(even_result);
    }
}

median_arr([2, 4], [6, 7, 8]);


// g) Remove duplicates from an array

let findUnique = function (chars) {
    let uniqueChars = [];

    // console.log(chars.forEach(i));
    for (let i = 0; i < chars.length; i++) {

        if (!uniqueChars.includes(chars[i])) {
            uniqueChars.push(chars[i]);
        };
    }
    return uniqueChars;
}
console.log(findUnique(['A', 'B', 'A', 'C', 'B']));

// h) Rotate an array by k times

let rotateArray = function (array, k) {
    let pushedOut = [];
    let m = k % array.length;
    let rotatedArray = array.slice(m);

    
    for (let i = 0; i < array.length; i++) {
        if (i < m) {
            pushedOut.push(array[i]);
        }
    }
    // use of spread operator
    return [...rotatedArray.concat(pushedOut)];
};

console.log(rotateArray([1, 2, 3, 4, 5, 6],9));



