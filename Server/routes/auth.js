const express = require("express");
const { authSignUp, authSignIn } = require("../controller/authUser");
const { middlewareSignUp, middlewareSignIn } = require("../middleware/auth");

const router = express.Router();

router.post("/signup", middlewareSignUp, authSignUp);

router.post("/signin", middlewareSignIn, authSignIn);

module.exports = router;
