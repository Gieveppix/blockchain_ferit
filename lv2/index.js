const { Transaction, Wallet, Blockchain } = require("./new-chainz");

const professor = new Wallet();
const student = new Wallet();
const cryptowhale = new Wallet();

const myCoin = new Blockchain();
myCoin.addBlock([
  new Transaction(professor.publicKey, student.publicKey, 1),
  new Transaction(student.publicKey, cryptowhale.publicKey, 5),
  new Transaction(cryptowhale.publicKey, professor.publicKey, 50),
]);

console.log("Blockchain:", JSON.stringify(myCoin.chain, null, 2));
console.log("Blockchain is valid:", myCoin.isValid());
