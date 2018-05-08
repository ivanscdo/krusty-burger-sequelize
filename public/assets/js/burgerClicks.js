$(function() {
    $(".adda-burger").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burger-name").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST", 
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");

                location.reload();
            }
        );
    });

    $(".devour-burger").on("click", function(event) {
        var id = $(this).data("id");
        var devourData = $(this).data("devour"); 

        var burgerDevoured = {
            devoured: devourData
        }

        console.log(burgerDevoured);
        $.ajax("/api/burgers/" + id, {
            type:"PUT", 
            data: burgerDevoured
        }).then(
            function() {
                console.log("devoured burger!");

                location.reload();
            }
        );
    });

});