I guessed that I should've used unicode for like using loop, but the popular answer was different.

the most short one is
```
const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;
```

it's really impressive! Oh I should've used replace and regex!