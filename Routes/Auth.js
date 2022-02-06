const { Router } = require("express");
const { LOGIN } = require("../controllers/AuthController");
const router = Router();

router.get('/', (req, res) => {
    res.send("Hello world")
})
router.post("/login", LOGIN);

module.exports = router;