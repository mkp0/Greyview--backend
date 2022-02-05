const { Router } = require("express");
const {
    GET_LEGENDS,
    POST_LEGENDS,
    DELETE_LEGENDS,
    UPDATE_LEGENDS,
} = require("../Controllers/LegendsController");
// const auth = require("../Middleware/Auth");
const router = Router();
router.get("/", (req, res) => {
    res.send("hello world");
})
router.get("/getLegends", GET_LEGENDS);
router.post("/postLegend", POST_LEGENDS);
router.put("/updateLegend/:id", DELETE_LEGENDS);
router.delete("/deleteLegend/:id", UPDATE_LEGENDS);

module.exports = router;