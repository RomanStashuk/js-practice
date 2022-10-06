// Bubble sort fot arrays

const bubbleSort = (arr) => {
    let iterationCounter = arr.length -1;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < iterationCounter; i++) {
            if (arr[i] > arr[i + 1]) {
                const swap = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = swap;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
};

console.log(bubbleSort([3, 1, 199, -90, 5, 2, 10, -2, 0]))
