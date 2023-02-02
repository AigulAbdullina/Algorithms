// Найти индекс заданного числа в массиве: {3, 6, 4, 7, 2, 1, 9}
// Алгоритм на вход должен получать любой массив и одну цифру, 
// индекс которой требуется найти.

function findIndex(array, elem){
    for (let i = 0; i < array.length; i++) {
    if (array[i] === elem) {
        console.log(`Element ${elem} is found at index ${i} in the array`);}
    }
}

findIndex([3, 6, 4, 7, 2, 1, 9], 7);



// Реализовать алгоритм, который будет находить сумму квадратов всех элементов массива!  {3, 6, 4, 7, 2, 1, 9}

function sumOfArr(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i] * array[i] ;
    }
    console.log(sum);
}
sumOfArr([3, 6, 4, 7, 2, 1, 9])

