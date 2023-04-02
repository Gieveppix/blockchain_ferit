const { timestamp } = require("../helpers/date-format");
const { SHA256 } = require("../lv1/task_2");
const { generateKeyPair } = require("../lv1/task_3");

class Transaction {
  constructor(sender, receiver, amount) {
    this.sender = sender;
    this.receiver = receiver;
    this.amount = amount;
  }
}

class Wallet {
  constructor() {
    const keypair = generateKeyPair();

    this.publicKey = keypair.publicKey;
    this.privateKey = keypair.privateKey;
  }
}

class Block {
  constructor(timestamp, transactions, previousHash = "") {
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    const data =
      this.timestamp + JSON.stringify(this.transactions) + this.previousHash;
    return SHA256(data);
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(timestamp(), [new Transaction(null, null, 0)]);
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(transactions) {
    const previousHash = this.getLastBlock().hash;
    const newBlock = new Block(timestamp(), transactions, previousHash);
    this.chain.push(newBlock);
  }

  isValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }

    return true;
  }
}

module.exports = {
  Transaction,
  Wallet,
  Block,
  Blockchain,
};
