export default  function binarySearch(search, values, comparefunc = null) {
  let min = 0;
  let max = values.length - 1;
  let middle;
  let iterations = 0;

  if (comparefunc === null) {
    comparefunc = (a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };
  }

  while (min <= max) {
    iterations++; 
    middle = Math.floor((min + max) / 2);
    let comparison = comparefunc(values[middle], search);

    if (comparison === 0) {
      return middle;
    } else if (comparison < 0) {

      min = middle + 1;
    } else {
 
      max = middle - 1;
    }
  }


  console.log(`Antal iterationer: ${iterations}`);
  return -1;
}
