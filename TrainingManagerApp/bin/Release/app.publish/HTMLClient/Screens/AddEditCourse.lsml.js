/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditCourse.created = function (screen) {
    // Write code here.
    var reference;
    var title;

    if (screen.Course.CourseReference !== undefined) {
        reference = screen.Course.CourseReference;
        title = screen.Course.CourseTitle;
        screen.details.displayName = "Edit Course: " + reference + " - " + title;
    }
    else {
        screen.details.displayName = "Add New Course";
    }

    if (myapp.permissions["LightSwitchApplication:CanEditCourses"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("EmployeeCourseAssignmentsTab").isReadOnly = false;
        screen.findContentItem("JobRoleCourseAssignmentsTab").isReadOnly = false;
        screen.findContentItem("EmployeeGroupCoursesAssigmentsTab").isReadOnly = false;
        screen.findContentItem("TrainingSessionsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("EmployeeCourseAssignmentsTab").isReadOnly = true;
        screen.findContentItem("JobRoleCourseAssignmentsTab").isReadOnly = true;
        screen.findContentItem("EmployeeGroupCoursesAssigmentsTab").isReadOnly = true;
        screen.findContentItem("TrainingSessionsTab").isReadOnly = true;
    }
};