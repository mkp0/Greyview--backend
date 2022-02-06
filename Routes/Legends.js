const { Router } = require("express");
const {
    GET_LEGENDS,
    GET_LEGEND,
    POST_LEGENDS,
    DELETE_LEGENDS,
    UPDATE_LEGENDS,
} = require("../Controllers/LegendsController");

const auth = require("../Middlewares/Auth")

const router = Router();

router.get("/", (req, res) => {
    res.send("hello world");
})

router.post("/getLegends", GET_LEGENDS);
router.get("/getSingleLegends/:id", GET_LEGEND);
router.post("/postLegend", POST_LEGENDS);
router.put("/updateLegend/:id", UPDATE_LEGENDS);
router.delete("/deleteLegend/:id", DELETE_LEGENDS);

module.exports = router;