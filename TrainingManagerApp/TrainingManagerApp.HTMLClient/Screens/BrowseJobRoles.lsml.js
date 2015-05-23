/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseJobRoles.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditJobRoles"]) {
        screen.findContentItem("AddJobRole").isEnabled = true;
    }
    else {
        screen.findContentItem("AddJobRole").isEnabled = false;
    }
};