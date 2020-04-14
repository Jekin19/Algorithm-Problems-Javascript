let MARKER = Number.MAX_data;
let serialize = function (node, stream) {
  if (!node) {
    stream.push(MARKER);
    return;
  }
  stream.push(node.data);
  serialize(node.left, stream);
  serialize(node.right, stream);
};

let deserialize = function (stream) {
  try {
    let data = stream.shift();
    if (data === MARKER) {
      return null;
    }

    let node = { data: data };
    node.left = deserialize(stream);
    if (node.left === null) {
      delete node.left;
    }
    node.right = deserialize(stream);
    if (node.right === null) {
      delete node.right;
    }
    return node;
  } catch (err) {
    return null;
  }
};

let root = {
  data: 8,
  left: { data: 3, right: { data: 6, left: { data: 4 }, right: { data: 7 } }, left: { data: 1 } },
  right: { data: 10, right: { data: 14, left: { data: 13 } } },
};

let p = [];
console.log(JSON.stringify(root));
serialize(root, p);
let root_deserialized = deserialize(p);
console.log(JSON.stringify(root_deserialized));
