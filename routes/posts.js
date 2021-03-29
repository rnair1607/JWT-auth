const router = require("express").Router();

const { tokenVerify } = require("../controllers/verifyToken");
const { getPosts } = require("../controllers/posts");

router.get("/", tokenVerify, getPosts);
module.exports = router;
