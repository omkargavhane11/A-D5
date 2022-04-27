//✅ Write a function called “addFive”

let addFive = function (x) {
    return x + 5;
}

console.log(addFive(360));  // output is 365

//✅ Write a function called “getOpposite”. Given a number, return its opposite

let getOpposite = function (x) {
    if (x == Number(x)) {
        return -x;
    }
    else if (x !== Number(x)) {
        return -1;
    }
}

console.log(getOpposite(-5));

//✅ Fill in your code that takes an number minutes and converts it to seconds.

let show_in_seconds = function (x) {
    return x * 60;
}

console.log(show_in_seconds(3) + " seconds");   // output is 180 seconds

//✅ Create a function that takes a string and returns it as an integer.

let return_as_integer = function (x) {
    return parseInt(x);
}

console.log(return_as_integer("58"));  // output is 58

//✅ Create a function that takes a number as an argument, increments the number by +1 and returns the result.

let increment_by_1 = function (x) {
    return x + 1;
}

console.log(increment_by_1(5));  //output is 6 

//✅ Create a function that takes an array and returns the first element.

let return_first_element = function (array) {
    return array[0];
}

console.log("First element of array -> " + return_first_element([10, 2, 3, 4, 5]));

//✅ Write a function that converts hours into seconds.

let hour_into_seconds = function (x) {
    return (x * 3600 + " seconds");
}

console.log(hour_into_seconds(1));

//✅ Create a function that takes height and width and finds the perimeter of a rectangle.

let find_perimeter = function (a, b) {
    return (2 * (a + b));
}

console.log(find_perimeter(10, 20));

//✅ Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

let lessthan100 = function (a, b) {
    if (a + b) {
        return true;
    } else {
        return false;
    }
}

console.log(lessthan100(10, 20));

//✅ There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

let return_remainder = function (a, b) {
    return a % b
}

console.log(return_remainder(1, 3)); // output is 1 
console.log(return_remainder(3, 4));  // output is 3
console.log(return_remainder(-9, 45));  // output is -9


//✅ Old macdonald had a farm: MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// turkey = 2 legs
// horse = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

let count_legs = function (a, b, c) {
    return ((a * 2) + (b * 4) + (c * 4));
}

console.log(count_legs(2, 3, 5));  // output is 36
console.log(count_legs(1, 2, 3));  // output is 22
console.log(count_legs(5, 2, 8));  // output is 50 


//✅ Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

let fps_perMinute = function (a, b) {
    return a * b * 60;
}

console.log(fps_perMinute(1, 1));  // output is 60
console.log(fps_perMinute(10, 1));  // output is 600
console.log(fps_perMinute(10, 25));  // output is 15000


//✅ Check if an Integer is Divisible By Five. Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

let divisible_by_5 = function (x) {
    if (x % 5 == 0) return true;
    else return false;
}

console.log(divisible_by_5(6));

//✅ Write a function called “isEven”. Given a number, “isEven” returns whether it is even.

let isEven = function (x) {
    if (x % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven("12"));

//✅ Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

let areBothOdd = function (a, b) {
    if (a % 2 !== 0 && b % 2 !== 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log("Both are odd numbers : " + areBothOdd(1, 3));

//✅ Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

let returnFullName = function (a, b) {
    return a + " " + b;
}

console.log(returnFullName("Virat", "Kohli"));

//✅ Write a function called “getLengthOfWord”. Given a word, “getLengthOfWord” returns the length of the given word.

let getLengthOfWord = function (x) {
    if (typeof (x) == "string" && (x != Number(x))) {
        return x.length;
    } else if (isNaN(x)) {
        return "-1";
    } else {
        return "-1";
    }
}

console.log(getLengthOfWord("9"));

//✅ Given two words, “isSameLength” returns whether the given words have the same length.

let isSameLength = function (a, b) {
    if (a.length != b.length) {
        return false;
    } else {
        return true;
    }
}

console.log(isSameLength("abc", "bcd"));

//✅ Create a function to calculate the distance between two points defined by their x, y coordinates

let getDistance = function (x1, y1, x2, y2) {
    let result = ((x2 - x1) ^ 2) + ((y2 - y1) ^ 2);
    return Math.sqrt(result);
}
console.log(getDistance(100, 100, 400, 300));

//✅ Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.

let getNthElement = function (array, n) {
    if (array.length === 0) {
        return undefined;
    } else {
        return array[n];
    }
}

console.log(getNthElement([1, 3, 5], 1));

//✅ Write a function called “getLastElement”. Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.

let getLastElement = function (array) {
    if (array.length === 0) {
        return "-1";
    }
    else {
        return array[array.length - 1];
    }
}

console.log(getLastElement([1, 2, 10, 15]));

// ✅ Write a function called “getProperty”. Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.

let obj = {
    mykey: "value"
};

let getProperty = function (x, y) {
    return x[y];
}

console.log(getProperty(obj, "mykey"));


// ✅ Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

let countPositivesSumNegatives = function (array) {
    let sum_positives = 0;
    let sum_negatives = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum_positives += array[i];
        } else {
            sum_negatives += array[i];
        }
    }

    let join = [sum_positives, sum_negatives]
    return ("joined => " + join);
}

console.log(countPositivesSumNegatives([1, 2, -5, -6]));

// ✅ Create a function that receives an array of numbers and returns an array containing only the positive numbers

let return_Positives = function (array) {
    let array1 = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            array1.push(array[i]);
        }
    }
    return array1;
}

console.log(return_Positives([-5, 4, 8]));


// ✅ Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).

let powersOfTwo = function (num) {

    let array = [];

    for (let i = 0; i <= num; i++) {
        array.push(Math.pow(2, i));
    }
    return array;
}

console.log(powersOfTwo(2));

// ✅ Find the maximum number in an array of numbers

let find_max = function (array) {
    let max_value = array[0];
    // console.log(max_value);

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max_value)
            max_value = array[i];

    }

    return max_value;
}

console.log("Max num is " + find_max([8, 58, 9, 15]));


// ✅ Print the first 100 prime numbers


// first check whetehr the num is prime or not 
let isPrime = function (n) {
    if (n == 1 || n == 0) {
        return false
    } else {

        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
    }
    return true;
}

// console.log(isPrime(13));

let first_100_prime = function (n) {
    let count = 0;
    // let first_100_prime_numbers = [];
    for (let i = 0; i < 99999; i++) {
        if (isPrime(i) && (count < n)) {
            console.log(i + " is prime number");
            // first_100_prime_numbers.push([i]);
            console.log(count + 1);
            count++;
        }
    }
    // return first_100_prime_numbers;
}

first_100_prime(100);


// ✅ Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”

let isPrime1 = function (n) {
    if (n == 1 || n == 0) {
        return false
    } else {

        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
    }
    return true;
}
let return_primeNum = function (array, min_num, n_times) {
    let required_Array = [];
    let count = 0;
    // for (let i = 0; i < n_times; i++) {
    for (let j = 0; j < array.length; j++) {
        if ((array[j] > min_num) && (count < n_times)) {
            required_Array.push(array[j])
            count++;
        }
    }
    // }

    return required_Array;
}

console.log("Required array " + return_primeNum([1, 2, 3, 5, 7, 9, 11, 13, 17, 19, 23, 29], 7, 3))

// ✅ Reverse a string

let reverse = function (n) {
    return n.split("").reverse().join("");
}

console.log(reverse("omkk"));

// ✅Create a function that will merge two arrays and return the result as a new array

let join_array = function (a, b) {
    let a1 = a;
    let b1 = b;
    return [...a1, ...b1];
}

console.log(join_array([1, 2], [3, 4]));


// ✅Calculate the sum of numbers received in a comma delimited string

let sum_ofString = function (arr3) {
    let str_into_number = arr3.split(",");
    let sum = 0;

    for (let i = 0; i < str_into_number.length; i++) {
        sum += Number(str_into_number[i]);
    }

    console.log(sum);
}

sum_ofString("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9");
