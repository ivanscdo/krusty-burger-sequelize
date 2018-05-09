var   express           = require("express"), 
      app               = express(),
      bodyParser        = require("body-parser"),
      exphbs            = require("express-handlebars"),      
      burger_controller = require("./controllers/burgers_controller"),
      PORT              = process.env.PORT || 3000,
      db                = require("./models");
      
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(burger_controller);

db.sequelize.sync().then(function() {
      app.listen(PORT, function() {
            console.log("Server listening on http://localhost:" + PORT);
      });
});