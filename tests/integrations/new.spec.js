const { format } = require("./helper");
const fs = require("fs");
const path = require("path");

describe("prettier-plugin-gherkin", () => {
  it("format `basic.feature` file", () => {
    const fixtureFeatureFile = fs.readFileSync(
      path.join(__dirname, "__fixtures__/basic_margin_errors.feature"),
      { encoding: "utf-8" },
    );

    expect(format(fixtureFeatureFile)).toMatchSnapshot();
  });
});
