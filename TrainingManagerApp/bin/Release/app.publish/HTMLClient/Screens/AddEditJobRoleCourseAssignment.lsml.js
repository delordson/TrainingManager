/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditJobRoleCourseAssignment.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditJobRoleCourseAssignments"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};