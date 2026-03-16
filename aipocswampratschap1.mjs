Hooks.on("initializeDynamicTokenRingConfig", ringConfig => {
  const AIpocRings = new foundry.canvas.tokens.DynamicRingData({
    label: "A.I.pocalypse Rings",
    spritesheet: "modules/aipocalypse-swamp-rats-chap-1/assets/spritesheet-ring/circuit.json"
  });
  ringConfig.addConfig("AIpocRings", AIpocRings);
});
