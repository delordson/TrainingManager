/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseCourses.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditCourses"]) {
        screen.findContentItem("AddCourse").isEnabled = true;
    }
    else {
        screen.findContentItem("AddCourse").isEnabled = false;
    }
};