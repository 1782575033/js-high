var array = [1, 1, "1", "1"];

function unique(array) {
  let newarr = [];
  for (let i = 0, arrayLen = array.length; i < arrayLen; i++) {
    for (var j = 0, newarrLen = newarr.length; j < newarrLen; j++) {
      if (array[i] === newarr[j]) {
        break;
      }
    }
    if (j === newarrLen) newarr.push(array[i]);
  }
  return newarr;
}
console.log(unique(array));
