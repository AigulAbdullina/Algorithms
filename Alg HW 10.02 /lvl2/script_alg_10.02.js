// Level 2
// 2.1 Напишите рекурсивный метод, который выводит на экран числа Фибоначчи до N-ого элемента.
// формула F n = F n − 1 + F n − 2
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711.......

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
console.log(fib(12));



// 2.2 Напишите рекурсивный метод, который проверяет, является ли строка палиндромом.

let ourStr = prompt("Введите строку: ");

if (palindrome(ourStr) == true) 
alert("Данная строка палиндром!");

else alert("Данная строка не палиндром!");

function palindrome(str){
    if (str[0] === str[str.length - 1] && str.length > 1) {
        palindrome(str.substring(1, str.length -1)) 
        return true
      } else return false
    }