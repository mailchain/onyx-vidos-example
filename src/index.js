const { KeyDIDMethod } = require("@jpmorganchase/onyx-ssi-sdk");

async function main() {
  const keyDidMethod = new KeyDIDMethod();
  console.log("Creating a new DID...");
  const did = await keyDidMethod.create();
  console.log("Created did: ", did.did);
}

main();
