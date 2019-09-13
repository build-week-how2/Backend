const express = require("express");

const db = require("../database/dbConfig.js");
const HowTos = require("./user-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  const howTos = HowTos.find()
    .then(howTos => {
      res.json(howTos);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get users" });
    });
});

// router.get('/:id', (req, res) => {
//     const [id] = req.params
//     const howTo = HowTos.findById(id);

//     .then(howTo => {
//         const howTo = howTos[0];

//         if(howTo) {
//             res.json(howTo)
//         } else {
//             res.status(404).json({message: 'Could not find How To guide with that id'})
//         }
//     })
//     .catch(err => {
//         res.status(500).json({message: 'failed to get How To guide'})
//     })
// })

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [howTo] = await HowTos.findById(id);

    if (howTo) {
      res.json(howTo);
    } else {
      res
        .status(404)
        .json({ message: "Could not find the How To guide with the given id" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to get that How To guide" });
  }
});

router.get("/:id/methods", async (req, res) => {
  const { id } = req.params;

  try {
    const methods = await HowTos.findMethods(id);
    res.json(methods);
  } catch (err) {
    res.status(500).json({ message: "Failed to get methods" });
  }
});

router.post("/", async (req, res) => {
  const howtoData = req.body;

  try {
    const newHowTo = await HowTos.add(howtoData);

    res.status(201).json(newHowTo); //newline
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to create new How To", error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  const change = await HowTos.update(req.params.id, req.body);
  if (change) {
    res.status(200).json(change);
  } else {
    res.status(500).json({ message: "Could not change that How To guide" });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const count = HowTos.remove(id)
    .then(count => {
      if (count) {
        res.json({ removed: count });
      } else {
        res.status(404).json({ message: "Could not find How To with that id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete this How To" });
    });
});

module.exports = router;
