// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    // DELETE
    $(".remove-burger").on("click", function() {
      const burgerId = $(this).attr("data-id");
  
      console.log(burgerId);
  
      $.ajax("/api/burgers/" + burgerId, {
        method: "DELETE"
      }).then(function() {
        console.log("Burger was deleted succesfully!");
  
        window.location = "/";
      });
    });
  
    // UPDATE
    $(".eatBurgerBtn").on("click", function(event) {
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
      event.preventDefault();
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
  