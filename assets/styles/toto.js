var arr = [1, 2, 3];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (var el of arr) {
  console.log(el);
}

arr.forEach(console.log);
