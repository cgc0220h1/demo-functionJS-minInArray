let array1 = [3, 5, 1, 8, -3, 7, 8];

let array2 = [7, 12, 6, 9, 20, 56, 89];

let array3 = [];

let array4 = [0, 0, 0, 0, 0, 0];

document.getElementById('display1').innerHTML = array1.join(", ");
document.getElementById('display2').innerHTML = array2.join(", ");
document.getElementById('display3').innerHTML = array3.join(", ");
document.getElementById('display4').innerHTML = array4.join(", ");

function findMinArray(arr) {
    if (arr.length === 0) {
        return -1;
    }
    let min = arr[0];
    for (let index = 0; index < arr.length; index++) {
        if (min > arr[index]) {
            min = arr[index];
        }
    }
    return arr.indexOf(min);
}




