$(function() {
    $(".adda-burger").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burger-name").val().trim(),
            // devoured: 0
        };
        console.log("-newBurger-");
        console.log(newBurger);

        $.post("/api/burgers", newBurger).then(function(data) {
            console.log("-$.post data-");
            console.log(data);
            // res.json(data);
            location.reload();
        })
        

        // $.ajax("/api/burgers", {
        //     type: "POST", 
        //     data: newBurger
        // }).then(
        //     function() {
        //         console.log("created new burger");

        //         location.reload();
        //     }
        // );
    });

    $(".devour-burger").on("click", function(event) {
        var id = $(this).data("id");
        var devourData = $(this).data("devour"); 

        var burgerDevoured = {
            devoured: devourData
        }

        // console.log("-burgerDevoured-");        
        // console.log(burgerDevoured);
        // console.log("-id-");
        // console.log(id);
        

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