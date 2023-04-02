const NodeRSA = require("node-rsa");

function generateKeyPair() {
  const key = new NodeRSA({ b: 512 });
  const publicKey = key.exportKey("public");
  const privateKey = key.exportKey("private");

  return { publicKey, privateKey };
}

function encryptMessage(publicKey, message) {
  const key = new NodeRSA(publicKey);
  const encrypted = key.encrypt(message, "base64");
  return encrypted;
}

function decryptMessage(privateKey, encryptedMessage) {
  const key = new NodeRSA(privateKey);
  const decrypted = key.decrypt(encryptedMessage, "utf8");
  return decrypted;
}

module.exports = {
  generateKeyPair,
  encryptMessage,
  decryptMessage,
};
