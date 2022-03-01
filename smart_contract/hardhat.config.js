//https://eth-ropsten.alchemyapi.io/v2/kU5T8fHWUK33_KaAyWZAjVNqn5ik3TBm

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/kU5T8fHWUK33_KaAyWZAjVNqn5ik3TBm',
      accounts: ['87b9cda7bbbbe0aefef2f33289fe1d0020642e9fda8386fe78f0a2b5d850433f']
    }
  }
}