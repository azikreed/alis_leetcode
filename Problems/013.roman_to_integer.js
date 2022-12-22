var romanToInt = function (s) {
  const r = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let res = 0;

  for(let i = 0; i < s.length; i++) {
    if(r[s[i]] < r[s[i + 1]]) {
        res = res - r[s[i]]
    } else {
        res += r[s[i]];
    }
  }

  return res;
};