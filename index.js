const { complete } = require("./helpers/autocomplete");
const { exec } = require("child_process");

var prompt = require("prompt-sync")({
  history: require("prompt-sync-history")(),
  autocomplete: complete(["Lab1", "Lab2", "EXIT"]),
  sigint: false,
});

// This variable is used to determine if the app should continue prompting the user for input
let chooseLab = false;

while (!chooseLab) {
  // Get user input
  let guess = prompt(
    `Choose which lab you'd like to run: (hit tab for options) `
  );
  // Convert the string input to a number
  guess = String(guess);

  if (guess === "Lab1") {
    chooseLab = true;

    exec("npm run lab1", (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });
  } else if (guess === "Lab2") {
    chooseLab = true;

    exec("npm run lab2", (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });
  } else if (guess === "EXIT") {
    console.log("\nBye\n");
    chooseLab = true;
  } else {
    console.log("Invalid option :{ ");
  }
}
