const express = require("express");
const router = express.Router();
const CashbookController = require("../controllers/cashbook.controller")
const cashbookController = new CashbookController();

router.get("/", cashbookController.cashbookList)
router.get("/:cashbookId", cashbookController.cashbookDetail)
router.get("/list", cashbookController.cashbookdaysList)
router.put("/:cashbookId", cashbookController.cashbookUpdate)

module.exports = {
    router
  };