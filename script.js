$(function () {
    $(".d-none").slice(0, 2).removeClass("d-none");
    $("#loadMore").on('click', function (e) {
        $(".d-none").slice(0, 2).removeClass("d-none");
        if($(".d-none").slice(0, 2).length==0) {
            $("#loadMore").addClass("d-none");
        }
    });

    $(".rating span").on('click', function(e) {
        console.log($(e.target).data('value'));
    })
});



