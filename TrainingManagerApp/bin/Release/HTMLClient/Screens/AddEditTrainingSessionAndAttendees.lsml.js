/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditTrainingSessionAndAttendees.created = function (screen) {
    var reference;
    var title

    reference = screen.TrainingSession.Course.CourseReference;
    title = screen.TrainingSession.Course.CourseTitle;
    screen.details.displayName = "Session for: " + reference + " - " + title;


    if (myapp.permissions["LightSwitchApplication:CanEditTrainingSessions"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("TrainingSessionAttendeesTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("TrainingSessionAttendeesTab").isReadOnly = true;
    }
};
