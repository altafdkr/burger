$("#addBurger").on("submit", function(event){
    event.preventDefault();

    var newBurger = {
        burger_name: $("#burgerInput").val().trim()
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function(){
            location.reload();
        }
    );
});


    $(".eatButton").on("click", function(event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function(){
                location.reload();
            }
        );
    });