const express = require("express");
const router = express.Router();

//컨트롤러 직접 연결
const UserController = require("../controllers/user.controller")
const userController = new UserController(); 

// 라우터 구성
const cashbookRouter = require("./cashbook.routes")
const cashbookFrameRouter = require("./cashbookFrame.routes")
const boardRouter = require("./board.routes")
const commentRouter = require("./comment.routes")
const likeRouter = require("./like.routes")

//유저컨트롤
router.post("/login", userController.userLogin)
router.post("/signup", userController.userSignup)
router.delete("/logout", userController.userLogout)

//가계부
router.use("/cashbook", cashbookRouter.router);

//가계부 프레임
router.use("/cashbook/frame", cashbookFrameRouter.router);

//보드 프레임
router.use("/board", boardRouter.router)

//댓글 프레임
router.use("/board/:boardId/comment", commentRouter.router)

//좋아요
router.use("/like", likeRouter.router)

module.exports = router;
