const printComment = require("./printComment");
const printFeature = require("./printFeature");
const printScenario = require("./printScenario");
const printStep = require("./printStep");
const printTableRow = require("./printTableRow");
const printTableCell = require("./printTableCell");
const { concat } = require("prettier").doc.builders;

module.exports = function printGherkin(path, options, print) {
  const node = path.getValue();
  if (Array.isArray(node)) {
    return concat(path.map(onePath => print(onePath)));
  }
  switch (node.type) {
    case "comment":
      return printComment(node, options);
    case "feature":
      return printFeature(node, options);
    case "scenario":
      return printScenario(node, options);
    case "step":
      return printStep(node, options);
    case "dataTable":
      return concat(path.map(print, "rows"));
    case "row":
      return printTableRow(path, print);
    case "cell":
      return printTableCell(node);
    default:
      // FIXME: Waiting to implements the other type of node
      return "";
  }
};
