function del(arr = []) {
  
  for (i = 0; i < arr.length ; i++) {
    for (j = i + 1; j < arr.length ; j++) {
      if ((arr[j] == arr[i])) {
        for (k = j; k < arr.length ; k++) {
          arr[k] = arr[k + 1];
        }
        arr.length = arr.length - 1;
      } else j = j + 1;
    }
    for (i = 0; i < arr.length ; i++) {
      console.log(arr[i]);
    }
    return arr[i];
  }
}
var aa = [3, 4, 4, 6,5,7,7,7,7, 8, 8,9,10,10,10];
console.log ("new array :");
console.log(del(aa));
