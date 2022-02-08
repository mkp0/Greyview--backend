const { Router } = require("express");
const { LOGIN, SIGN_IN } = require("../controllers/AuthController");
const auth = require("../Middlewares/Auth");
const router = Router();

router.get("/", (req, res) => {
  res.send("Hello world");
});
router.post("/login", LOGIN);
router.get("/signin", auth, SIGN_IN);

module.exports = router;
