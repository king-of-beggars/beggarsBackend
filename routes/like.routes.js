const express = require("express");
const router = express.Router();
const LikeController = require("../controllers/like.controller")
const likeController = new LikeController();

router.post("/:commentId",likeController.likeClick)

module.exports = {
    router
  };