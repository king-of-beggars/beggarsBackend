const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/comment.controller")
const commentController = new CommentController();


router.post("/", commentController.commentPost)
router.put("/:commentId", commentController.commentUpdate)
router.delete("/:commentId", commentController.commentDelete)

module.exports = {
    router
  };