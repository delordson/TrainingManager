/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditEmployeeTrainingRecord.created = function (screen) {
    var lastname;
    var firstname

    if (screen.EmployeeTrainingRecord.Employee !== undefined) {
        if (screen.EmployeeTrainingRecord.Employee.LastName !== undefined) {
            lastname = screen.EmployeeTrainingRecord.Employee.LastName;
            firstname = screen.EmployeeTrainingRecord.Employee.FirstName;
            screen.details.displayName = firstname + " " + lastname + " Training Record";
        }
        else {
            screen.details.displayName = "Add Edit Employee Training Record";
        }
    }

    if (myapp.permissions["LightSwitchApplication:CanEditEmployeeTrainingRecords"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};