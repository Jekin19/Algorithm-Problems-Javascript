let checkEndian = function() {
  let a = new ArrayBuffer(4);
  let b = new Uint8Array(a);
  b[0] = 0xa1;
  b[1] = 0xb2;
  b[2] = 0xc3;
  b[3] = 0xd4;
  let c = new Uint32Array(a);
  if (c[0] === 0xd4c3b2a1) return "little endian";
  if (c[0] === 0xa1b2c3d4) return "big endian";
  else throw new Error("Something crazy just happened");
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Host by order");
console.log("---------------------------------------");
console.log(checkEndian());
console.log("++++++ Test Done Successfully ++++++");
