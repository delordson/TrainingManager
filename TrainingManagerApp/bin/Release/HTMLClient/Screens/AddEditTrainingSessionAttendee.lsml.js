/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditTrainingSessionAttendee.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditTrainingSessionAttendees"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};