const { concat, hardline, join } = require("prettier").doc.builders;

module.exports = (path, print) => {
  return concat(["    | ", join(" ", path.map(print, "cells")), hardline]);
};
