const mongoose = require("mongoose");
const Legends = mongoose.model("Legends");

module.exports.GET_LEGENDS = async (req, res) => {

    const { batch, branch, type, time } = req.body;
    console.log(req.body)

    const queries = {}

    if (batch != "" && batch != undefined) {
        queries.batch = batch;
    }
    if (branch != "" && branch != undefined) {
        queries.branch = branch;
    }
    if (type != "" && type != undefined) {
        queries.Type = type;
    }
    if (time != "" && time != undefined) {
        queries.Type = type;
    }

    console.log(queries)

    Legends.find(queries)
        .sort({ register_date: -1 })
        .then((items) => {
            res.json(items)
        })
        .catch((err) => res.send(err));

    return;

};

module.exports.GET_LEGEND = async (req, res) => {
    console.log(req.params)

    Legends.findById(req.params.id, function (err, legend) {
        if (err) {
            return res.json({
                err
            })
        }
        else {
            return res.json(legend)
        }
    });

};

module.exports.POST_LEGENDS = (req, res) => {
    console.log(req.body)
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


module.exports.UPDATE_LEGENDS = (req, res) => {

    if (id == undefined) {
        return res.status(400).send({ err: "error" })
    }

    Legends.findOneAndUpdate({ _id: req.params.id }, { "$set": req.body }).exec(function (err, Legend) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.status(200).send(Legend);
        }
    });

};


module.exports.DELETE_LEGENDS = (req, res) => {
    Legends.findByIdAndDelete({ _id: req.params.id }).then(function (item) {
        res.json({ success: true });
    });
};