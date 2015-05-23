/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseEmployeeGroups.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditEmployeeGroups"]) {
        screen.findContentItem("AddEmployeeGroup").isEnabled = true;
    }
    else {
        screen.findContentItem("AddEmployeeGroup").isEnabled = false;
    }
};