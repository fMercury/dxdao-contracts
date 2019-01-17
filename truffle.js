require("babel-polyfill");
require("babel-register")({
  "presets": ["es2015"],
  "plugins": ["syntax-async-functions","transform-regenerator"]
});

var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "account mnemonic ...";
var provideUrl = "https://kovan.infura.io/v3/....";


module.exports = {
  networks: {
    live: {
      network_id: 1,
      host: "localhost",
      port: 8546,
      gas: 4543760
    },
    ropsten: {
      network_id: 3,
      host: "localhost",
      port: 8545,
      gas: 4543760
    },
    rinkeby: {
      network_id: 4,
      host: "localhost",
      port: 8545,
      gas: 4543760
    },
    kovan: {
      network_id: 42,
      provider: () =>
        new HDWalletProvider(mnemonic, provideUrl),
      gas: 8000000,
      gasPrice : 20000000000,
    },
    development: {
      network_id: "*",
      host: "localhost",
      port: 8545,
      gas: 4543760
    },
    coverage: {
      host: 'localhost',
      network_id: '*', // eslint-disable-line camelcase
      port: 8555,
      gas: 0xfffffffffff,
      gasPrice: 0x01,
    }
  },
  rpc: {
    host: "localhost",
    port: 8545
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  compilers: {
    solc: {
         version: "0.5.2",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      optimizer: {
        enabled: true,
        runs: 200
      }
      }
  }
};
