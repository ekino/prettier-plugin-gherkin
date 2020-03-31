const { Binary } = require("binary-install");
const os = require("os");

const getPlatform = () => {
  const type = os.type();
  const arch = os.arch();

  if (type === "Windows_NT") {
    return `windows-${arch}`;
  }
  if (type === "Linux") {
    return `linux-${arch}`;
  }
  if (type === "Darwin") {
    return `darwin-amd64`;
  }

  throw new Error(`Unsupported platform: ${type} ${arch}`);
};

const getBinary = async () => {
  const platform = getPlatform();
  console.log("Platform : ", platform);
  const url = `https://github.com/ekino/prettier-plugin-gherkin/releases/download/0.0.1/cucumber-${platform}.tar.gz`;
  const name = "gherkingo";
  const binary = new Binary(url, { name, installDirectory: "postinstall" });
  return binary.install();
};

try {
  getBinary();
} catch (e) {
  console.error("Something went wrong : ", e);
}
