async function main() {
  const Instance = await ethers.getContractFactory("JalebiRouter");
  const Router = await Instance.deploy(
    "0x56C5eBc6C57E21b3aacc177574037f0Be84e4812",
    "0x13f059927a683AD141958937eD2B82Eb303Dfb32"
  );

  console.log("Router Deployed at: ", Router.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
