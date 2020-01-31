const input = [[1, 2, [3]], 4];

function flattenArray(input) {
  if (!Array.isArray(input)) {
    return input;
  }
  let result = [];
  input.map((item, index) => {
    result = result.concat(flattenArray(item));
  });
  return result;
}

const result = flattenArray(input);
console.log(result);
