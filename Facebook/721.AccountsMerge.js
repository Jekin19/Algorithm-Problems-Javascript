// https://leetcode.com/problems/accounts-merge/

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  let dsu = new Dsu();
  let mapOfEmailToId = new Map();
  let mapOfEmailToName = new Map();
  let id = 0;
  accounts.forEach((account) => {
    let name = account[0];
    let emails = account.slice(1);
    emails.forEach((email) => {
      if (!mapOfEmailToName.has(email)) {
        mapOfEmailToName.set(email, name);
      }
      if (!mapOfEmailToId.has(email)) {
        mapOfEmailToId.set(email, id++);
      }
      dsu.union(mapOfEmailToId.get(account[1]), mapOfEmailToId.get(email));
    });
  });

  const ans = new Map();
  for (let email of mapOfEmailToName.keys()) {
    const index = dsu.find(mapOfEmailToId.get(email));
    if (ans.has(index)) {
      let temp = ans.get(index);
      temp.push(email);
      ans.set(index, temp);
    } else {
      ans.set(index, [email]);
    }
  }

  let result = [];
  for (let component of ans.values()) {
    let temp = Array.from(component);
    temp.sort();
    result.push([mapOfEmailToName.get(temp[0]), ...temp]);
  }
  return result;
};

function Dsu() {
  this.parent = [];

  function init(parent) {
    for (let i = 0; i < 10; i++) {
      parent.push(i);
    }
  }

  this.find = function (x) {
    if (this.parent[x] != x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  };

  this.union = function (x, y) {
    this.parent[this.find(x)] = this.find(y);
  };

  init(this.parent);
}

let input = [
  ["John", "johnsmith@mail.com", "john00@mail.com"],
  ["John", "johnnybravo@mail.com"],
  ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
  ["Mary", "mary@mail.com"],
];

console.log(JSON.stringify(accountsMerge(input)));
