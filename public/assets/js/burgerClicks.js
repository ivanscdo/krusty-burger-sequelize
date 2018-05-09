$(function() {
    $(".adda-burger").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burger-name").val().trim(),
        };
        console.log("-newBurger-");
        console.log(newBurger);

        $.post("/api/burgers", newBurger).then(function(data) {
            console.log("-$.post data-");
            console.log(data);
            location.reload();
        })
    });

    $(".devour-burger").on("click", function(event) {
        var id = $(this).data("id");
        var devourData = $(this).data("devour"); 

        var burgerDevoured = {
            devoured: devourData
        }
     
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