$(document).on("pagecreate", function () {
    $(".hover-effect").on("mouseenter", function () {
        $(this).find("img").css("opacity", "0.8");

        $(this).append('<div class="message">Ver todo</div>');
    }).on("mouseleave", function () {

        $(this).find("img").css("opacity", "1");

        $(this).find(".message").remove();
    });
    
    $("#menu-btn").on("click", function () {
        $("#menu-popup").popup("open", {
            positionTo: "#menu-btn",
            transition: "pop"
        });
    });
});