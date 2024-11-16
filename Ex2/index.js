let arr = [2, 3, 9, 7, 5]
let max = arr[0];
for (i = 1; i < arr.length; i++) {
    if (arr[i] >= max) {
        max = arr[i];
    }
}
console.log(max)