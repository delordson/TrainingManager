/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditEmployeeGroup.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditEmployeeGroups"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};