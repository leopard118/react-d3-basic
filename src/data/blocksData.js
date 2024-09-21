const blocksData = [];

for (let i = 0; i < 9000; i++) {
  blocksData.push({
    id: i,
    x: (i % 100) * 10, // Adjust spacing between blocks
    y: Math.floor(i / 100) * 10, // Adjust spacing between blocks
    status: Math.random() > 0.8 ? "solid" : "available", // Rnadomly mark some blocks as solid
    ownerInfo: {
      nickname: "Owner " + i,
      walletAddress: "0x" + Math.random().toString(16).substr(2, 40),
    },
    isSelected: false,
  });
}

export default blocksData;
