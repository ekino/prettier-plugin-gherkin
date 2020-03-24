const { Binary } = require('binary-install')
const os = require('os')

const getPlatform = () => {
  const type = os.type();
  const arch = os.arch();

  if (type === 'Windows_NT' && arch === 'x64') return 'win64';
  if (type === 'Windows_NT') return 'win32';
  if (type === 'Linux' && arch === 'x64') return 'linux';
  if (type === 'Darwin' && arch === 'x64') return 'macos';

  throw new Error(`Unsupported platform: ${type} ${arch}`);
}

exports.getBinary = () => {
  const platform = getPlatform();
  const version = require('../package.json').version;
  const url = `https://github.com/ekino/prettier-plugin-gherkin/releases/download/v${ version }/gherkingo-${platform}.tar.gz`;
  const name = 'gherkingo';
  return new Binary(url, { name });
}

