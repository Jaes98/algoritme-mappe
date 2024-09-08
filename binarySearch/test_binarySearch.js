import { binarySearch } from "./binarySearch";

window.addEventListener("load", start);

const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

function start() {
  let index = binarySearch(34, values);
  console.log(`Found 27 at index ${index}`);

  index = binarySearch(100, values);
  console.log(`Found 100 at index ${index}`);
}
