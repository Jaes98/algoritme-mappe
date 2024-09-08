import binarySearch from "./binarySearch.js";

const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

export default function testBinarySearch() {    
    
    console.log("Javascript burde køre nu!");
  console.log("Starting binary search tests...");

  let index = binarySearch(34, values);
  console.log(`Found 34 at index ${index}`);

  index = binarySearch(100, values);
  console.log(`Found 100 at index ${index}`);

  index = binarySearch(23, values);
  console.log(`Found 23 at index ${index}`);
}
