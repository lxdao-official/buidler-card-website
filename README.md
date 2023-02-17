# Buidler Card

Buidler Card is an open-source project that has been ported from LXDAO DAO Tools for building the Network State.

In the Network State, each member must create and maintain an ID Card that includes their personal information. The ID Card is not transferable and cannot be sold, which is why the Buidler Card is designed to be a SBT.

The system includes a website, a backend and database, and a smart contract. The backend and contract repository can be found at <https://github.com/lxdao-official/buidler-card-backend>.

## Features

New members can join the State through the website's Onboarding feature. This involves minting an SBT, which acts as an official ID Card and signifies membership in the State.

The website offers a member list page, where all members can be viewed, as well as a member details page for more information. To ensure consistency, all member information is stored on IPFS and the corresponding CID is saved on the smart contract.

The system also includes a backend and database to enhance the user experience by providing a cache layer. However, even without the backend, all member information can still be accessed directly from the blockchain and IPFS.

## What's Next?

Due to limited time and resources, the following features have not yet been completed, but may be added in the future

- Integrate with RSS3, ensuring all information and activities comply with the RSS3 protocol for compatibility with other apps.
- Integrate with .bit, allowing members to display their associated .bit address.
- Rewrite and Deploy the Smart Contract to StarkNet, resulting in improved user experience and reduced gas fees for updating information on the blockchain.

## How to start the application?

### Start the Website

Create `.env` file based on the `.env.sample` file, and you can use the following contract we deployed on the testnet.

```
NEXT_PUBLIC_LXDAO_BACKEND_API=http://localhost:3000
NEXT_PUBLIC_CHAIN_ID=5
NEXT_PUBLIC_CONTRACT_ADDRESS=0x58B5800d8c891073b782d5a9ca81b1b34cdcf2D8
# go to https://www.infura.io/ to get one
NEXT_PUBLIC_INFURA_ID=
```

Then run the following commands to start the Website:

```
yarn install
npm run dev
```

Then, if you want to start the whole application, you need to start the Backend service, please refer: <https://github.com/lxdao-official/buidler-card-backend>.

## What is LXDAO?

This is a project build in LXDAO. More links: [LXDAO](https://lxdao.io/) | [LXDAO Forum](https://forum.lxdao.io/) | [LXDAO Discord](https://discord.lxdao.io) | [LXDAO Twitter](https://twitter.com/LXDAO_Official).

LXDAO is an R&D-focused DAO in Web3. Our mission is: To bring together buidlers to buidl and maintain valuable projects for Web3, in a sustainable manner.
