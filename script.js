function binarySearch(list, item) {
  let lowIndex = 0;
  let highIndex = list.length - 1;

  while (lowIndex <= highIndex) {
    let middleIndex = Math.floor((lowIndex + highIndex) / 2);

    let guessItem = list[middleIndex];


    if (guessItem === item) return middleIndex;
    else if (guessItem > item) highIndex = middleIndex - 1;
    else lowIndex = middleIndex + 1;
  };
  return null;
}

const myList = [1, 3, 5, 7, 9];

binarySearch(myList, 3); // 1