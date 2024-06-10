const { KeyDIDMethod } = require("@jpmorganchase/onyx-ssi-sdk");
const VidosResolver = require("./VidosResolver");

async function main() {
  const keyDidMethod = new KeyDIDMethod();
  console.log("Creating a new DID...");
  const did = await keyDidMethod.create();
  console.log("Created did: ", did.did);

  console.log("Creating a new VidosResolver instance...");
  if (!process.env.VIDOS_RESOLVER_URL || !process.env.VIDOS_API_KEY) {
    throw new Error(
      "Vidos resolver URL and API key must be set in the environment.",
    );
  }
  const resolver = new VidosResolver(
    process.env.VIDOS_RESOLVER_URL,
    process.env.VIDOS_API_KEY,
  );

  console.log("Resolving the DID using the VidosResolver instance...");
  const resolutionResponse = await resolver.resolve(did.did);
  console.log(
    "Resolution response: ",
    JSON.stringify(resolutionResponse, null, 2),
  );
}

main();
