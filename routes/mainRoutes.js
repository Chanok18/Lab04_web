const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const playersController = require("../controllers/playersController");

router.get("/", mainController.home);
router.get("/about", mainController.about);
router.get("/contact", mainController.contact);
router.post("/contact", mainController.saveContact);
router.get("/admin", mainController.admin);

router.get("/players", playersController.players_view);
router.post("/players", playersController.addPlayer);

module.exports = router;