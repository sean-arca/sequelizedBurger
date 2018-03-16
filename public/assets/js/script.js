$(".devour").on("click", function() {
    var id = $(this).val();
    $.ajax(`/burgers/update/${id}`, {
      type: "PUT",
      data: { devoured: 1 }
    }).then(function() {
      location.reload();
    });
  console.log(id);
  });