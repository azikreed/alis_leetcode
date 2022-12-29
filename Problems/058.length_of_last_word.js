var lengthOfLastWord = function (s) {
  if (s.length == 0) return 0;

  let arr = s.trim().split(" ");
  let result = arr[arr.length - 1].length;
  return result;
};
