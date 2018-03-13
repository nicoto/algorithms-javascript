const longest = (s1, s2) => (s1 + s2).split('').sort().reduce((a, v) => a += a.indexOf(v) === -1 ? v : '', '');
const result = longest('aretheyhere', 'yestheyarehere');
console.log(result);