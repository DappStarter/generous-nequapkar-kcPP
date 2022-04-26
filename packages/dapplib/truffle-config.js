require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remember smile imitate prison foster strategy'; 
let testAccounts = [
"0x3a0fd0b3ff44e7ccea04522098317b1227f2e62fc3175684249db6669fee5296",
"0x74ad51cfd56171f7f439cbca467f41c81f9585c60044270085dad75ebec4bf71",
"0xd00237757a20257256685758c7ba481bb5f3585fdceaafea04178f79f72adb6a",
"0x442f412a67d56297ad752c02a8268791d082768a1b9c5dad1c2ef654340f6e88",
"0x147aa1b50da53a8cbb69d7365588d6d790ed2b483f8798109c816cff7c1d0b3a",
"0x8d2c89c4c65a4d2db8d7a4ef4950d03233cea90ea713391a0c1be3d27a038928",
"0xc75e449b0e62768bd34bd7a9e7bcda16c98b060282ca120968430c5cb18a5d03",
"0x8aeefab23d398d84e0ce3e986b08a1b2f79e68a36605d4784374b94868e5c790",
"0x9cd204e394b1caebcbb99b52959ffab2f5c05013532e1cbb19cf9e62eb08e052",
"0x0081da938081e868e1cf237f44ea2c7abb92b5a376172ccaa4de0cdb2461b9ea"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

