/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditEmployeeGroupCourseAssignment.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditEmployeeGroupCourseAssignments"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};