/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseCourseStatuses.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditCourseStatuses"]) {
        screen.findContentItem("AddCourseStatus").isEnabled = true;
    }
    else {
        screen.findContentItem("AddCourseStatus").isEnabled = false;
    }
};