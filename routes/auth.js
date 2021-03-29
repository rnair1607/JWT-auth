const router = require("express").Router();

const { registerAuth, loginAuth } = require("../controllers/auth");

router.post("/register", registerAuth);

router.post("/login", loginAuth);

module.exports = router;
