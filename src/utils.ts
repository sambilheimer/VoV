export function getRandom(array: string[]) {
  return array[Math.floor(Math.random() * array.length)];
}
