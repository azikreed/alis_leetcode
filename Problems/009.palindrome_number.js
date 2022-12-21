var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let revertedNumber = 0;
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x == revertedNumber || x == Math.floor(revertedNumber / 10);
};

console.log(isPalindrome(12321)); //true

// class isPalindrome {
//   constructor(x) {
//     this.x = x;
//   }

//   solve() {
//     let x = this.x;
//     if (x < 0 || (x % 10 === 0 && x !== 0)) {
//       return false;
//     }

//     let revertedNumber = 0; //123
//     while (x > revertedNumber) {
//       revertedNumber = revertedNumber * 10 + (x % 10);
//       x = Math.floor(x / 10);
//     }

//     return x == revertedNumber || x == Math.floor(revertedNumber / 10);
//   }
// }

// console.log(new isPalindrome(12321).solve());