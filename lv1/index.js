const { convertBase58, revertBase58 } = require("./task_1");
const { SHA256 } = require("./task_2");
const { generateKeyPair, encryptMessage, decryptMessage } = require("./task_3");

const FERIT = "FERIT";

// TASK 1
let str = FERIT;
console.log("Original string:", str);

str = convertBase58(str);
console.log("Base58 encoded string:", str);

str = revertBase58(str);
console.log("Decoded string:", str);
// TASK 1

// TASK 2
console.log(SHA256(FERIT));
// TASK 2

// TASK 3
const { publicKey, privateKey } = generateKeyPair();
console.log("Public key: ", publicKey);
console.log("Private key: ", privateKey);

const message = "FERIT";
const encryptedMessage = encryptMessage(publicKey, message);
console.log("Encrypted message: ", encryptedMessage);

const decryptedMessage = decryptMessage(privateKey, encryptedMessage);
console.log("Decoded message: ", decryptedMessage);
// TASK 3
