function mergeSort(arr) {
    // base case
    if (arr.length < 2) {
        return arr;
    }

    // split arr in the middle
    const middleIndex = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middleIndex);
    const rightHalf = arr.slice(middleIndex);

    //recursive call
    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(leftHalf, rightHalf) {
    // tempArr holds sorted nums from left and right half temporarily
    const tempArr = [];

    //sort untill either half is empty
    while ((leftHalf.length !== 0) && (rightHalf.length !== 0)) {
        if (leftHalf[0] <= rightHalf[0]) {
            tempArr.push(leftHalf.shift());
        } else {
            tempArr.push(rightHalf.shift());
        }
    }

    //return contents of tempArr, leftHalf, rightHalf
    return [...tempArr, ...leftHalf, ...rightHalf];
}

const unsortedArr = [9, 1, 8, 2, 7, 3, 6, 4, 5, 0];
const newSortedArr = mergeSort(unsortedArr);
console.log(newSortedArr);