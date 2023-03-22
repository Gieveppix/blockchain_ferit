const BASE58 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var bs58 = require("base-x")(BASE58);

function task_1_to_base58(str) {
  console.log("Original string:", str);

  const buffer = Buffer.from(str, "utf8");
  const encodedStr = bs58.encode(buffer);
  console.log("Base58 encoded string:", encodedStr);

  return encodedStr;
}

function back_to_str(encodedStr) {
  const decodedBuffer = bs58.decode(encodedStr);
  const decodedStr = decodedBuffer.toString("utf8");
  console.log("Decoded string:", decodedBuffer);

  return decodedStr;
}

const one = task_1_to_base58("FERIT");
back_to_str(one);
