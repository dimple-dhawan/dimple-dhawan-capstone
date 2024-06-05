const express = require("express");
const router = express.Router();
const fs = require("fs");

function readData() { 
    const hypnoData = fs.readFileSync("./data/hypnosis-facts.json");
    const parsedData = JSON.parse(hypnoData);
    return parsedData;
}

router.get("/", (_req, res) => {
    const hypnosisFacts = readData();
    res.json(hypnosisFacts);
});

router.get("/facts", (req, res) => {
  const hypnoFacts = readData();
  const hypnoFact = hypnoFacts.filter((hypnoFacts) => hypnoFacts.type === "fact");
  res.json(hypnoFact);
});

router.get("/did-you-know", (req, res) => {
  const hypnoFacts = readData();
  const hypnoFact = hypnoFacts.filter((hypnoFacts) => hypnoFacts.type === "did-you-know");
  res.json(hypnoFact);
});

router.get("/myths", (req, res) => {
  const hypnoFacts = readData();
  const hypnoFact = hypnoFacts.filter((hypnoFacts) => hypnoFacts.type === "myth");
  res.json(hypnoFact);
});


module.exports = router;