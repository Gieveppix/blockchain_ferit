const BASE58 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var bs58 = require("base-x")(BASE58);

function convertBase58(str) {
  const buffer = Buffer.from(str, "utf8");
  const encodedStr = bs58.encode(buffer);
  return encodedStr;
}

function revertBase58(encodedStr) {
  const decodedBuffer = bs58.decode(encodedStr);
  const decodedStr = decodedBuffer.toString("utf8");
  return decodedStr;
}

module.exports = { convertBase58, revertBase58 };
