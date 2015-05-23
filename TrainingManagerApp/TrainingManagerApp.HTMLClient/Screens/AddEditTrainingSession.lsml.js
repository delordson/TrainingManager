/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditTrainingSession.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditTrainingSessions"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};