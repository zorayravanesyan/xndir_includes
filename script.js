let arr = [1, 2, 3, 4, 5, 6, 5, 4, 2, 5, 7, 1];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])){
        newArr.push(arr[i]);
    }
}
console.log(newArr);