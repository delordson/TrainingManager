/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditEmployeeCourseAssignment.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditEmployeeCourseAssignments"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};