const express = require("express");
const router = express.Router();
const CashbookFrameController = require("../controllers/cashbookFrame.controller")
const cashbookFrameController = new CashbookFrameController();


router.post("/", cashbookFrameController.frameCreate)
router.put("/:cashlistId", cashbookFrameController.frameUpdate)
router.delete("/:cashlistId", cashbookFrameController.frameDelete)

module.exports = {
    router
  };

