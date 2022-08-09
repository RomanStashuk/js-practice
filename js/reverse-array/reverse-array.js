const reverseArray = (arr) => {
    for (let i = 0; i < arr.length / 2; i++) {
        let swap = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = swap;
    }
    return arr;
}

const names = ['john', 'smith', 'karl'];

reverseArray(names);
console.log(names); // => ['karl', 'smith', 'john']

reverseArray(names);
console.log(names); // => ['john', 'smith', 'karl']
