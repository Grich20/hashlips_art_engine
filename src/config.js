"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
  "Loot the Solana space for randomly generated items and abilities.";
const baseUri = "";

//Added metadata for solana
const collectionName = "Name Of Collection";
const symbol = "Symbol Of Collection";
//Define how much % you want from second market sales 1000 = 10%
const seller_fee_basis_points = 1000;
const external_url = "https://yourwebsite.com";

const layerConfigurations = [
  {
    growEditionSizeTo: 9999,
    layersOrder: [
      { name: "layer1" },
      { name: "layer2" },
      { name: "layer3" },
      { name: "layer4" },
      { name: "layer5" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1000,
  height: 1000,
};

const background = {
  generate: false,
  brightness: "80%",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

//Added metadata for solana
//Leave uri and type at the current way because they are placeholders for arweave
const properties = {
  files: [
      {
        "uri": "image.png",
        "type": "image/png"
      },
    ],
  category: "image",
  creators: [
    {
      "address": "Your Solana Address",
      "share": 100
    }
  ]
};

module.exports = {
  format,
  baseUri,
  description,

  //Added metadata for solana
  collectionName,
  symbol,
  seller_fee_basis_points,
  external_url,
  properties, 

  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
};
