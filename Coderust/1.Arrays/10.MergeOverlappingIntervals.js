let find_busy_intervals = function(v1) {
  if (!v1 || v1.length === 0) {
    return;
  }

  let result = [v1[0]];
  for (let i = 1; i < v1.length; i++) {
    const lastElement = result[result.length - 1];
    if (lastElement.second >= v1[i].first) {
      result.pop();
      result.push({ first: lastElement.first, second: v1[i].second });
    } else {
      result.push(v1[i]);
    }
  }
  return result;
};

let arr1 = [
  {
    first: 4,
    second: 12
  },
  {
    first: 13,
    second: 16
  },
  {
    first: 19,
    second: 20
  },
  {
    first: 20,
    second: 24
  }
];

let arr2 = [
  {
    first: 2,
    second: 10
  },
  {
    first: 4,
    second: 12
  }
];

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Find Busy Intervals");
console.log("---------------------------------------");
console.log(find_busy_intervals(arr1));
console.log(find_busy_intervals(arr2));
