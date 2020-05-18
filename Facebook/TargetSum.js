// "55"
function targetSum(input, target) {
  let result = [];
  targetSum_rec(input, target, [], result);
  return result;
}
let count = 0;
function targetSum_rec(input, target, current, result) {
  if (input.length === 0 && target === 0) {
    result.push(current);
  }
  if (input.length > 0) {
    for (let i = 1; i <= input.length; i++) {
      const newInput = input.slice(0, i);
      const secondInput = input.slice(i);

      let x = Number(newInput);
      targetSum_rec(secondInput, target - x, current.concat([x]), result);

      let y = -x;
      targetSum_rec(secondInput, target - y, current.concat([y]), result);
    }
  }
}

console.log(JSON.stringify(targetSum("25125", 100)));
