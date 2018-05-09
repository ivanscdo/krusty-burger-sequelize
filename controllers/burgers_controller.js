const express = require("express"),
      router  = express.Router();

var db = require("../models");

router.get("/", function (req, res) {
    db.Burger.findAll({}).then(function(data) {
        console.log("-data-");
        console.log(data);

        var hbObject = {
            burgers: data
        }

        console.log("-hbObject-");
        console.log(hbObject);

        res.render("index", hbObject);
        
    });
});

router.post("/api/burgers", function(req, res) {
    db.Burger.create({
        burger_name: req.body.name,
        devoured: req.body.devoured
    }).then(function(data) {
        res.json(data);
    });
});

router.put("/api/burgers/:id", function(req, res) {

    console.log("-req.body-");
    console.log(req.body);
    console.log("-req.params.id-");
    console.log(req.params.id);

    db.Burger.update({
        devoured: req.body.devoured
    },{
        where:{
            id: req.params.id
        }
    }).then(function(data) {
        res.json(data);
    });
});

module.exports = router;