export function objectInArray(arr, obj) {
  for (let i = 0; i < arr.length; i++) {
    if (JSON.stringify(arr[i]) === JSON.stringify(obj)) {
      console.log(arr[i]);
      console.log(obj);
      return true;
    }
  }
  return false;
}
