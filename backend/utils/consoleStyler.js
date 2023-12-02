const colors = require('colors');

const consoleStyler = {
  success: (message) => {
    console.log(colors.green.bold(`✔ ${message}`));
  },
  error: (message) => {
    console.log(colors.red.bold(`✖ ${message}`));
  },
  info: (message) => {
    console.log(colors.blue.bold(`i ${message}`));
  },
  warning: (message) => {
    console.log(colors.yellow.bold(`⚠ ${message}`));
  }
};

module.exports = consoleStyler;