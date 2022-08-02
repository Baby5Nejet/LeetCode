function InsertionSort(a, from, to) {
  for (var i = from + 1; i < to; i++) {
    var element = a[i];
    for (var j = i - 1; j >= from; j--) {
      var tmp = a[j];
      // var order = comparefn(tmp, element);
      var order = tmp > element ? 1 : -1
      if (order > 0) {
        a[j + 1] = tmp;
      } else {
        break;
      }
    }
    a[j + 1] = element;
  }
  return a
};
const arr = [3, 2, 3, 1, 2, 4, 5, 5, 6]
console.log(InsertionSort(arr, 0, 5))