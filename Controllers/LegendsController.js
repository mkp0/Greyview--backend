const mongoose = require("mongoose");
const Legends = mongoose.model("Legends");


module.exports.GET_LEGENDS = async (req, res) => {

    const { batch, branch, type } = req.body;

    const queries = {}

    if (batch != undefined) {
        queries.batch = batch;
    }
    if (branch != undefined) {
        queries.branch = branch;
    }
    if (type != undefined) {
        queries.Type = type;
    }

    console.log(queries)

    Legends.find(queries)
        .sort({ register_date: -1 })
        .then((items) => res.json(items))
        .catch((err) => res.send(err));

    return;

};

module.exports.POST_LEGENDS = (req, res) => {
    const { name, package, priceing, batch, branch, type } = req.body;
    if (!name || !package || !priceing || !batch || !branch || !type) {
        return res.send({ error: "Fill the form" });
    }

    const data = {
        "name": name,
        "package": parseInt(package),
        "priceing": priceing,
        "batch": batch,
        "branch": branch,
        "Type": type
    }

    console.log(data);

    const newLegends = new Legends(data);
    newLegends
        .save()
        .then((response) => {
            return res.send({ success: response });
        })
        .catch((err) => {
            return res.send({ error: err });
        });
};
module.exports.UPDATE_LEGENDS = (req, res) => { };
module.exports.DELETE_LEGENDS = (req, res) => { };