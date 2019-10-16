my solution was
  1, if the array was empty then return empty array
  2, store the index of the array which value has even number
  3, store the odd numbers
  4, sort the odd numbers array
  5, if the index of new array is in the array which has even numbers, then put the value of the even numbers array
  6, if the index of new array is in the array which has odd numbers, then shift the value of the array
  7, return new array

but the popular solution is
1, store odd numbers in the array using filter function
2, sort it
3, if the value of the array is even then shift the value of odd numbers array to new array
4, if the value of the array is odd number then just remain the odd number

```
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}
```
