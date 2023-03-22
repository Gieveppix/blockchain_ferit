const sha256 = require("sha256");

const task_2_to_sha256 = (input) => {
  console.log(`String ${input} to SHA256: ${sha256(input)}`);
};

console.log(task_2_to_sha256("FERIT"));
