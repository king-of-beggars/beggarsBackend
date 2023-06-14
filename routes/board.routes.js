const express = require("express");
const router = express.Router();
const BoardController = require("../controllers/board.controller")
const boardController = new BoardController();


router.get("/", boardController.boardList)
router.get("/:boardId", boardController.boardDetail)
router.post("/", boardController.boardPost)
router.delete("/:boardId", boardController.boardDelete)
module.exports = {
    router
  };
