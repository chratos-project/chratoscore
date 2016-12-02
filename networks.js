var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('f76bc3a9'),
  addressVersion: 28,
  privKeyVersion: 156,
  P2SHVersion: 34,
  hkeyPublicVersion: 0x8af0b29c,
  hkeyPrivateVersion: 0x4fac8b7c,
  genesisBlock: {
    hash: hex('81bf1a6fb4f7402b0d7028110bd9b106c840082e4b4bd2a7dfc6a03c0c18f2dd'),
    merkle_root: hex('9159747c576498a7eeece2c0f44861ed35637db8385870a641c271bf0215fb23'),
    height: 0,
    nonce: 5984747,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1478659500,
    bits: 504365040
  },
  dnsSeeds: [
    '95.85.55.168',
    '95.85.59.95',
    '192.81.220.229'
  ],
  defaultClientPort: 46891,
  lastPoWBlock: 2000
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('f7b24ca9'),
  addressVersion: 88,
  privKeyVersion: 216,
  P2SHVersion: 132,
  hkeyPublicVersion: 0x8aacb27c,
  hkeyPrivateVersion: 0x4ff08b9c,
  genesisBlock: {
    hash: ('29A804115A7F632BFE96434CD29D1CE9770D560B329862C13BEF6A90C46498D4'),
    merkle_root: ('9159747C576498A7EEECE2C0F44861ED35637DB8385870A641C271BF0215FB23'),
    height: 0,
    nonce: 9033146,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1478304000,
    bits: 504365040
  },
  dnsSeeds: [
    'testnet-seed.chratos.com'
  ],
  defaultClientPort: 46890,
  lastPoWBlock: 200
};
