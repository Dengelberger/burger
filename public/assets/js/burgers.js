// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    // DELETE
    $(".delBurgerBtn").on("click", function(event) {
      // event.preventDefault();
      const id = $(this).data("id");
  
      console.log(id);
  
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(function() {
        console.log("Burger " + id + "was deleted succesfully!");
  
        location.reload();
      });
    });
  
    // UPDATE
    $(".eatBurgerBtn").on("click", function(event) {
      event.preventDefault();
      var id = $(this).data("id");
      console.log(id);

      var newBurger = $(this).data("devoured");
      console.log("Current burger state: ", newBurger);

      var newBurgerState = {
        devoured: newBurger
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function() {
          console.log("changed devoured to", newBurgerState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    // POST
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      // event.preventDefault();
      console.log("just submitted new burger")
  
      var newBurger = {
        name: $("#bg").val().trim(),
        devoured: 0,
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        },
        document.querySelector("#bottom").scrollIntoView()
      );
    });
  });
  