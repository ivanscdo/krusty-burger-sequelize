const express = require("express"),
      router  = express.Router();

var db = require("../models");


// let burger = require("../models/burger");

// 4. Create the `router` for the app, and export the `router` at the end of your file.
router.get("/", function (req, res) {
    db.Burger.findAll({}).then(function(data) {
        // res.json(results);
        var hbObject = {
            burgers: data
        };
        res.render("index", hbObject);
    });
    // ORM
    // burger.all(
    //     function(data){
    //         var hbObject = {
    //             burgers: data
    //         };
    //         console.log(hbObject);
    //         res.render("index", hbObject);
    //     }
    // );
});

router.post("/api/burgers", function(req, res) {
    db.Todo.create({}).then(function() {
        
    })
    // ORM    
    // burger.insert(
    //     ["burger_name", "devoured"],
    //     [req.body.name, 0],
    //     function(result){
    //         res.json({id: result.insertId});
    //     }
    // );
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition:", condition);

    console.log("req.body:", req.body);

    // ORM
    // burger.update(
    //     {devoured: req.body.devoured},
    //     condition,
    //     function(result) {
    //         if (result.changedRows == 0) {
    //             return res.status(404).end();
    //         } else {
    //             res.status(200).end();
    //         }
    //     }
    // );

});





module.exports = router;

// // // TEST: 1, before 15.1 
// router.get("/", (req, res) => {
//     console.log("router.get('/'): homepage");

//     // res.json();
//     // res.send("homepage");
//     // res.send(burger.selectAll);
//     // console.log(data);
//     // res.json(burger.selectAll(req, res))
//     // res.render("index", {burgers: data})
    
//     // res.json(burger.selectAll())
//     // res.send(burger.selectAll)

//     // // // // TEST: initial, .selectAll() returnining before data fetched, need callbacks
//     // console.log("burger_controller.js: ", burger.selectAll() );
//     // res.render("index", {burgers: burger.selectAll()})

//     // // // TEST: callback
//     // console.log("burger_controller.js: ", burger.callbackTest(burger.selectAll) );
//     // console.log("burgers_controller.js: ", burger.callbackTest() );    
//     // res.render("index", {burgers: burger.callbackTest()})
    
    
// });

// // router.get("/test", (req, res) => {
// //     res.send("/test");
// // })
// // router.get("/test", burger.callbackTest() );
// // router.get("/test", function(req, res, next) {
// //     // next(burger.callbackTest());
// //     burger.callbackTest();
// //     next();
// // }, function(req, res) {
// //     res.send(data);
// // } );

// // router.get('/test2', function (req, res, next) {
// //     console.log('the response will be sent by the next function ...')
// //     burger.callbackTest();    
// //     next()
// //   }, function (req, res) {
// //     res.send('Hello from B!')
// //   })

// //   var cb0 = function (req, res, next) {
// //     console.log('CB0')
// //     next()
// //   }
  
// //   var cb1 = function (req, res, next) {
// //     console.log('CB1')
// //     next()
// //   }
  
// //   var cb2 = function (req, res) {
// //     res.send('Hello from C!')
// //   }
  
// //   router.get('/test3', [cb0, cb1, cb2])


