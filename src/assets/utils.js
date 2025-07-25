export function insertRandomly(arr, item) {
  const index = Math.floor(Math.random() * (arr.length + 1));
  const newArr = [...arr.slice(0, index), item, ...arr.slice(index)];
  return newArr;
}
