var express    = require("express"), 
      bodyParser = require("body-parser"),
      // exphbs     = require("express-handlebars");
      burger_controller = require("./controllers/burgers_controller");
      // connection = require("./config/connection");

var app = express();

var PORT = process.env.PORT || 3000; 

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");

// // // using express.Router in connection.js
app.use(burger_controller);
// // // using app.get in server.js
// app.get("/", function(req, res){
//       connection.query("SELECT * FROM burgers", function(err, data) {
//             if (err) {
//                   return res.status(500).end();
//             }
//             res.render("index", {burgers: data});
//       });
// });

app.listen(PORT, function() {
      console.log("server.js: Server listening on http://localhost:" + PORT);
});