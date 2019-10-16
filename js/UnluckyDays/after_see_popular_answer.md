I realized that I don't have to create Date instance from day 1, I just had to create instance of the day 13!

```
function unluckyDays(year){
  let unlucky = 0;
  for (var i = 0; i < 12; i++) {
    if(new Date(year, i, 13).getDay() === 5){
      unlucky++;
    }
  }
  return unlucky;
}
```