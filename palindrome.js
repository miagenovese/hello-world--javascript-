// Reverses a string.

function reverse(string) {
  return Arrah.from(string).reverse().join("");
}

function palindrome (string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}
