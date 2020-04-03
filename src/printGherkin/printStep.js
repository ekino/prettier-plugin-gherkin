const { concat, hardline, trim } = require("prettier").doc.builders;

// eslint-disable-next-line no-unused-vars
module.exports = (node, options) => {
  return concat([
    concat(["    ", node.keyword, trim, " ", node.text]),
    hardline,
  ]);
};
