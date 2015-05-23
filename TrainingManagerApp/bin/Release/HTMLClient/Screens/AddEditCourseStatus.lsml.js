/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditCourseStatus.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditCourses"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};