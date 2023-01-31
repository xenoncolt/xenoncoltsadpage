$(document).ready(function() {
    $.ajax({
      url: "https://api.github.com/users/xenoncolt/repos",
      success: function(response) {
        for (var projectIndex = 0; projectIndex < response.length; projectIndex++) {
          var project = response[projectIndex];
          var projectCard = $("#project-card").clone();
          projectCard.find("#project-title").text(project.name);
          projectCard.find("#project-description").text(project.description);
          projectCard.find("#project-language").text("Primary Language: " + project.language);
          projectCard.find("#project-url").attr("href", project.html_url);
          projectCard.appendTo(".gitcard-container");
        }
        $("#project-card").remove();
      },
      error: function(response) {
        console.log("Github Response Failure!");
        console.log(response);
      }
    });
  });
  