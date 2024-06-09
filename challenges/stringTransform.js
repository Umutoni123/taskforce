function reverseString(str) {
  return str.replaceAll(" ", "").split("").reverse().join("");
}

function stringToAscii(str) {
  return str
    .split("")
    .map((char, i) => str.charCodeAt(i))
    .join(" ");
}

function stringTransform(str) {
  if (str.length % 15 === 0) return stringToAscii(reverseString(str));
  if (str.length % 3 === 0 ) return reverseString(str);
  if (str.length % 5 === 0) return stringToAscii(str);
}

console.log(stringTransform("Pizza"));
