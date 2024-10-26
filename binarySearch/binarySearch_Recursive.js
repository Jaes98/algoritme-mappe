export function binarySearchRecursive(
  search,
  values,
  start,
  end,
  iterations = 0,
  comperator
) 
{
  iterations++;
  console.group(
    `Call ${iterationCount}: Searching between indexes ${start} and ${end}`
  );

  const mid = Math.floor((start + end) / 2);
  let comparison = null;


  if (comperator) {
    comparison = comperator(values[mid], search);
  } else {
    comparison = defaultComparison(values[mid], search);
  }

  if (comparison > 0) {
    end = mid - 1;
  } else if (comparison < 0) {
    start = mid + 1;
  } else if (comparison == 0) {
    console.log(`Total iterations: ${iterationCount}`);
    console.groupEnd();
    return { middle: mid, iterations };
  }

  if (comparison == undefined || start > end) {
    console.log(`Total iterations: ${iterationCount}`);
    console.groupEnd();
    return { middle: -1, iterations };
  }

  return binarySearchRecursive(
    search,
    values,
    start,
    end,
    iterations,
    comperator
  );
}

function defaultComparison(arrayValue, search) {
  if (typeof search == "string") {
    return arrayValue.localeCompare(search);
  } else if (typeof search == "number") {
    if (arrayValue < search) return -1;
    else if (arrayValue > search) return 1;
    else if (arrayValue == search) return 0;
  } else {
    console.log("It was neither string or number");
  }
}
