// Implement an difference function, which subtracts one list from another.
// It should remove all values from list a, which are present in list b.
// array_diff([1,2],[1]) == [2]
function array_diff(a, b) {
  return a.filter(n => b.indexOf(n) === -1);
}
array_diff([1, 2], [1]);
