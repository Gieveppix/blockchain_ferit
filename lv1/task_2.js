const sha256 = require("sha256");

function SHA256(input) {
  return sha256(input);
}

module.exports = { SHA256 };
