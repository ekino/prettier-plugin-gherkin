const { concat } = require("prettier").doc.builders;

module.exports = node => {
  const spacing = " ".repeat(
    node.maxLength - (node.value ? node.value.length : 0),
  );
  return concat([node.value, spacing, "|"]);
};
