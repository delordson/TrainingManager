/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditCourse.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditCourse
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.AddEditCourse,
            value: lightSwitchApplication.AddEditCourse
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.AddEditCourse,
            value: lightSwitchApplication.Course
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.Course,
            value: lightSwitchApplication.Course
        },
        CourseReference: {
            _$class: msls.ContentItem,
            _$name: "CourseReference",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.Course,
            value: String
        },
        CourseTitle: {
            _$class: msls.ContentItem,
            _$name: "CourseTitle",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.Course,
            value: String
        },
        CourseStatus: {
            _$class: msls.ContentItem,
            _$name: "CourseStatus",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.Course,
            value: lightSwitchApplication.CourseStatus
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "CourseStatus",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.CourseStatus,
            value: lightSwitchApplication.CourseStatus
        },
        CourseVersion: {
            _$class: msls.ContentItem,
            _$name: "CourseVersion",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.Course,
            value: Number
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.Course,
            value: lightSwitchApplication.Course
        },
        CourseDescription: {
            _$class: msls.ContentItem,
            _$name: "CourseDescription",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.Course,
            value: String
        },
        EmployeeCourseAssignmentsTab: {
            _$class: msls.ContentItem,
            _$name: "EmployeeCourseAssignmentsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.AddEditCourse,
            value: lightSwitchApplication.AddEditCourse
        },
        EmployeeCourseAssignments: {
            _$class: msls.ContentItem,
            _$name: "EmployeeCourseAssignments",
            _$parentName: "EmployeeCourseAssignmentsTab",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.AddEditCourse,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditCourse,
                _$entry: {
                    elementType: lightSwitchApplication.EmployeeCourseAssignment
                }
            }
        },
        EmployeeCourseAssignmentsTemplate: {
            _$class: msls.ContentItem,
            _$name: "EmployeeCourseAssignmentsTemplate",
            _$parentName: "EmployeeCourseAssignments",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.EmployeeCourseAssignment,
            value: lightSwitchApplication.EmployeeCourseAssignment
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "EmployeeCourseAssignmentsTemplate",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.EmployeeCourseAssignment,
            value: lightSwitchApplication.Employee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "Employee",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "Employee",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "Employee",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.Employee,
            value: String
        },
        DateAssigned: {
            _$class: msls.ContentItem,
            _$name: "DateAssigned",
            _$parentName: "EmployeeCourseAssignmentsTemplate",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.EmployeeCourseAssignment,
            value: Date
        },
        TargetCompletionDate: {
            _$class: msls.ContentItem,
            _$name: "TargetCompletionDate",
            _$parentName: "EmployeeCourseAssignmentsTemplate",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.EmployeeCourseAssignment,
            value: Date
        },
        JobRoleCourseAssignmentsTab: {
            _$class: msls.ContentItem,
            _$name: "JobRoleCourseAssignmentsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.AddEditCourse,
            value: lightSwitchApplication.AddEditCourse
        },
        JobRoleCourseAssignments: {
            _$class: msls.ContentItem,
            _$name: "JobRoleCourseAssignments",
            _$parentName: "JobRoleCourseAssignmentsTab",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.AddEditCourse,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditCourse,
                _$entry: {
                    elementType: lightSwitchApplication.JobRoleCourseAssignment
                }
            }
        },
        JobRoleCourseAssignmentsTemplate: {
            _$class: msls.ContentItem,
            _$name: "JobRoleCourseAssignmentsTemplate",
            _$parentName: "JobRoleCourseAssignments",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.JobRoleCourseAssignment,
            value: lightSwitchApplication.JobRoleCourseAssignment
        },
        JobRole: {
            _$class: msls.ContentItem,
            _$name: "JobRole",
            _$parentName: "JobRoleCourseAssignmentsTemplate",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.JobRoleCourseAssignment,
            value: lightSwitchApplication.JobRole
        },
        DateAssigned1: {
            _$class: msls.ContentItem,
            _$name: "DateAssigned1",
            _$parentName: "JobRoleCourseAssignmentsTemplate",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.JobRoleCourseAssignment,
            value: Date
        },
        TargetCompletionDate1: {
            _$class: msls.ContentItem,
            _$name: "TargetCompletionDate1",
            _$parentName: "JobRoleCourseAssignmentsTemplate",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.JobRoleCourseAssignment,
            value: Date
        },
        EmployeeGroupCoursesAssigmentsTab: {
            _$class: msls.ContentItem,
            _$name: "EmployeeGroupCoursesAssigmentsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.AddEditCourse,
            value: lightSwitchApplication.AddEditCourse
        },
        EmployeeGroupCourseAssignments: {
            _$class: msls.ContentItem,
            _$name: "EmployeeGroupCourseAssignments",
            _$parentName: "EmployeeGroupCoursesAssigmentsTab",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.AddEditCourse,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditCourse,
                _$entry: {
                    elementType: lightSwitchApplication.EmployeeGroupCourseAssignment
                }
            }
        },
        EmployeeGroupCourseAssignmentsTemplate: {
            _$class: msls.ContentItem,
            _$name: "EmployeeGroupCourseAssignmentsTemplate",
            _$parentName: "EmployeeGroupCourseAssignments",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.EmployeeGroupCourseAssignment,
            value: lightSwitchApplication.EmployeeGroupCourseAssignment
        },
        EmployeeGroup: {
            _$class: msls.ContentItem,
            _$name: "EmployeeGroup",
            _$parentName: "EmployeeGroupCourseAssignmentsTemplate",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.EmployeeGroupCourseAssignment,
            value: lightSwitchApplication.EmployeeGroup
        },
        DateAssigned2: {
            _$class: msls.ContentItem,
            _$name: "DateAssigned2",
            _$parentName: "EmployeeGroupCourseAssignmentsTemplate",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.EmployeeGroupCourseAssignment,
            value: Date
        },
        TargetCompletionDate2: {
            _$class: msls.ContentItem,
            _$name: "TargetCompletionDate2",
            _$parentName: "EmployeeGroupCourseAssignmentsTemplate",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.EmployeeGroupCourseAssignment,
            value: Date
        },
        TrainingSessionsTab: {
            _$class: msls.ContentItem,
            _$name: "TrainingSessionsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.AddEditCourse,
            value: lightSwitchApplication.AddEditCourse
        },
        TrainingSessions1: {
            _$class: msls.ContentItem,
            _$name: "TrainingSessions1",
            _$parentName: "TrainingSessionsTab",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.AddEditCourse,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditCourse,
                _$entry: {
                    elementType: lightSwitchApplication.TrainingSession
                }
            }
        },
        TrainingSessions1Template: {
            _$class: msls.ContentItem,
            _$name: "TrainingSessions1Template",
            _$parentName: "TrainingSessions1",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.TrainingSession,
            value: lightSwitchApplication.TrainingSession
        },
        Trainer: {
            _$class: msls.ContentItem,
            _$name: "Trainer",
            _$parentName: "TrainingSessions1Template",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.TrainingSession,
            value: lightSwitchApplication.Employee
        },
        LastName1: {
            _$class: msls.ContentItem,
            _$name: "LastName1",
            _$parentName: "Trainer",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName1: {
            _$class: msls.ContentItem,
            _$name: "FirstName1",
            _$parentName: "Trainer",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.Employee,
            value: String
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "TrainingSessions1Template",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.TrainingSession,
            value: Date
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "TrainingSessions1Template",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.TrainingSession,
            value: Date
        },
        MaximumAttendees: {
            _$class: msls.ContentItem,
            _$name: "MaximumAttendees",
            _$parentName: "TrainingSessions1Template",
            screen: lightSwitchApplication.AddEditCourse,
            data: lightSwitchApplication.TrainingSession,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditCourse
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditCourse, {
        /// <field>
        /// Called when a new AddEditCourse screen is created.
        /// <br/>created(msls.application.AddEditCourse screen)
        /// </field>
        created: [lightSwitchApplication.AddEditCourse],
        /// <field>
        /// Called before changes on an active AddEditCourse screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditCourse screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditCourse],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("left"); }],
        /// <field>
        /// Called after the CourseReference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CourseReference_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("CourseReference"); }],
        /// <field>
        /// Called after the CourseTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CourseTitle_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("CourseTitle"); }],
        /// <field>
        /// Called after the CourseStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CourseStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("CourseStatus"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the CourseVersion content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CourseVersion_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("CourseVersion"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("right"); }],
        /// <field>
        /// Called after the CourseDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CourseDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("CourseDescription"); }],
        /// <field>
        /// Called after the EmployeeCourseAssignmentsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeCourseAssignmentsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("EmployeeCourseAssignmentsTab"); }],
        /// <field>
        /// Called after the EmployeeCourseAssignments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeCourseAssignments_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("EmployeeCourseAssignments"); }],
        /// <field>
        /// Called after the EmployeeCourseAssignmentsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeCourseAssignmentsTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("EmployeeCourseAssignmentsTemplate"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("Employee"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("UserName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the DateAssigned content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateAssigned_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("DateAssigned"); }],
        /// <field>
        /// Called after the TargetCompletionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetCompletionDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("TargetCompletionDate"); }],
        /// <field>
        /// Called after the JobRoleCourseAssignmentsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        JobRoleCourseAssignmentsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("JobRoleCourseAssignmentsTab"); }],
        /// <field>
        /// Called after the JobRoleCourseAssignments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        JobRoleCourseAssignments_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("JobRoleCourseAssignments"); }],
        /// <field>
        /// Called after the JobRoleCourseAssignmentsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        JobRoleCourseAssignmentsTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("JobRoleCourseAssignmentsTemplate"); }],
        /// <field>
        /// Called after the JobRole content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        JobRole_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("JobRole"); }],
        /// <field>
        /// Called after the DateAssigned1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateAssigned1_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("DateAssigned1"); }],
        /// <field>
        /// Called after the TargetCompletionDate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetCompletionDate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("TargetCompletionDate1"); }],
        /// <field>
        /// Called after the EmployeeGroupCoursesAssigmentsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeGroupCoursesAssigmentsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("EmployeeGroupCoursesAssigmentsTab"); }],
        /// <field>
        /// Called after the EmployeeGroupCourseAssignments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeGroupCourseAssignments_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("EmployeeGroupCourseAssignments"); }],
        /// <field>
        /// Called after the EmployeeGroupCourseAssignmentsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeGroupCourseAssignmentsTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("EmployeeGroupCourseAssignmentsTemplate"); }],
        /// <field>
        /// Called after the EmployeeGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeGroup_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("EmployeeGroup"); }],
        /// <field>
        /// Called after the DateAssigned2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateAssigned2_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("DateAssigned2"); }],
        /// <field>
        /// Called after the TargetCompletionDate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetCompletionDate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("TargetCompletionDate2"); }],
        /// <field>
        /// Called after the TrainingSessionsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TrainingSessionsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("TrainingSessionsTab"); }],
        /// <field>
        /// Called after the TrainingSessions1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TrainingSessions1_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("TrainingSessions1"); }],
        /// <field>
        /// Called after the TrainingSessions1Template content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TrainingSessions1Template_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("TrainingSessions1Template"); }],
        /// <field>
        /// Called after the Trainer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Trainer_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("Trainer"); }],
        /// <field>
        /// Called after the LastName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("LastName1"); }],
        /// <field>
        /// Called after the FirstName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("FirstName1"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("EndDate"); }],
        /// <field>
        /// Called after the MaximumAttendees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MaximumAttendees_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourse().findContentItem("MaximumAttendees"); }]
    });

    lightSwitchApplication.AddEditCourseStatus.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditCourseStatus
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditCourseStatus,
            data: lightSwitchApplication.AddEditCourseStatus,
            value: lightSwitchApplication.AddEditCourseStatus
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditCourseStatus,
            data: lightSwitchApplication.AddEditCourseStatus,
            value: lightSwitchApplication.CourseStatus
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditCourseStatus,
            data: lightSwitchApplication.CourseStatus,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditCourseStatus
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditCourseStatus, {
        /// <field>
        /// Called when a new AddEditCourseStatus screen is created.
        /// <br/>created(msls.application.AddEditCourseStatus screen)
        /// </field>
        created: [lightSwitchApplication.AddEditCourseStatus],
        /// <field>
        /// Called before changes on an active AddEditCourseStatus screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditCourseStatus screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditCourseStatus],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourseStatus().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourseStatus().findContentItem("columns"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.AddEditCourseStatus().findContentItem("Status"); }]
    });

    lightSwitchApplication.AddEditEmployee.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployee
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: lightSwitchApplication.AddEditEmployee
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: lightSwitchApplication.Employee
        },
        top: {
            _$class: msls.ContentItem,
            _$name: "top",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "top",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "top",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "top",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        middle: {
            _$class: msls.ContentItem,
            _$name: "middle",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "middle",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Current: {
            _$class: msls.ContentItem,
            _$name: "Current",
            _$parentName: "middle",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: Boolean
        },
        bottom: {
            _$class: msls.ContentItem,
            _$name: "bottom",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        EmployeeGroup: {
            _$class: msls.ContentItem,
            _$name: "EmployeeGroup",
            _$parentName: "bottom",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.EmployeeGroup
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "EmployeeGroup",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.EmployeeGroup,
            value: lightSwitchApplication.EmployeeGroup
        },
        JobRolesGroupTab: {
            _$class: msls.ContentItem,
            _$name: "JobRolesGroupTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: lightSwitchApplication.AddEditEmployee
        },
        EmployeeJobRoles: {
            _$class: msls.ContentItem,
            _$name: "EmployeeJobRoles",
            _$parentName: "JobRolesGroupTab",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditEmployee,
                _$entry: {
                    elementType: lightSwitchApplication.EmployeeJobRole
                }
            }
        },
        EmployeeJobRolesTemplate: {
            _$class: msls.ContentItem,
            _$name: "EmployeeJobRolesTemplate",
            _$parentName: "EmployeeJobRoles",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.EmployeeJobRole,
            value: lightSwitchApplication.EmployeeJobRole
        },
        JobRole: {
            _$class: msls.ContentItem,
            _$name: "JobRole",
            _$parentName: "EmployeeJobRolesTemplate",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.EmployeeJobRole,
            value: lightSwitchApplication.JobRole
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployee
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditEmployee, {
        /// <field>
        /// Called when a new AddEditEmployee screen is created.
        /// <br/>created(msls.application.AddEditEmployee screen)
        /// </field>
        created: [lightSwitchApplication.AddEditEmployee],
        /// <field>
        /// Called before changes on an active AddEditEmployee screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditEmployee screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditEmployee],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("columns"); }],
        /// <field>
        /// Called after the top content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        top_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("top"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("UserName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the middle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        middle_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("middle"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Email"); }],
        /// <field>
        /// Called after the Current content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Current_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Current"); }],
        /// <field>
        /// Called after the bottom content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        bottom_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("bottom"); }],
        /// <field>
        /// Called after the EmployeeGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeGroup_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("EmployeeGroup"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the JobRolesGroupTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        JobRolesGroupTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("JobRolesGroupTab"); }],
        /// <field>
        /// Called after the EmployeeJobRoles content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeJobRoles_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("EmployeeJobRoles"); }],
        /// <field>
        /// Called after the EmployeeJobRolesTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeJobRolesTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("EmployeeJobRolesTemplate"); }],
        /// <field>
        /// Called after the JobRole content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        JobRole_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("JobRole"); }]
    });

    lightSwitchApplication.AddEditEmployeeCourseAssignment.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployeeCourseAssignment
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployeeCourseAssignment,
            data: lightSwitchApplication.AddEditEmployeeCourseAssignment,
            value: lightSwitchApplication.AddEditEmployeeCourseAssignment
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditEmployeeCourseAssignment,
            data: lightSwitchApplication.AddEditEmployeeCourseAssignment,
            value: lightSwitchApplication.EmployeeCourseAssignment
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployeeCourseAssignment,
            data: lightSwitchApplication.EmployeeCourseAssignment,
            value: lightSwitchApplication.Employee
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Employee",
            screen: lightSwitchApplication.AddEditEmployeeCourseAssignment,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditEmployeeCourseAssignment,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditEmployeeCourseAssignment,
            data: lightSwitchApplication.Employee,
            value: String
        },
        DateAssigned: {
            _$class: msls.ContentItem,
            _$name: "DateAssigned",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployeeCourseAssignment,
            data: lightSwitchApplication.EmployeeCourseAssignment,
            value: Date
        },
        TargetCompletionDate: {
            _$class: msls.ContentItem,
            _$name: "TargetCompletionDate",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployeeCourseAssignment,
            data: lightSwitchApplication.EmployeeCourseAssignment,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployeeCourseAssignment
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditEmployeeCourseAssignment, {
        /// <field>
        /// Called when a new AddEditEmployeeCourseAssignment screen is created.
        /// <br/>created(msls.application.AddEditEmployeeCourseAssignment screen)
        /// </field>
        created: [lightSwitchApplication.AddEditEmployeeCourseAssignment],
        /// <field>
        /// Called before changes on an active AddEditEmployeeCourseAssignment screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditEmployeeCourseAssignment screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditEmployeeCourseAssignment],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeCourseAssignment().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeCourseAssignment().findContentItem("columns"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeCourseAssignment().findContentItem("Employee"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeCourseAssignment().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeCourseAssignment().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeCourseAssignment().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the DateAssigned content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateAssigned_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeCourseAssignment().findContentItem("DateAssigned"); }],
        /// <field>
        /// Called after the TargetCompletionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetCompletionDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeCourseAssignment().findContentItem("TargetCompletionDate"); }]
    });

    lightSwitchApplication.AddEditEmployeeGroup.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployeeGroup
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployeeGroup,
            data: lightSwitchApplication.AddEditEmployeeGroup,
            value: lightSwitchApplication.AddEditEmployeeGroup
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditEmployeeGroup,
            data: lightSwitchApplication.AddEditEmployeeGroup,
            value: lightSwitchApplication.EmployeeGroup
        },
        EmployeeGroupName: {
            _$class: msls.ContentItem,
            _$name: "EmployeeGroupName",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployeeGroup,
            data: lightSwitchApplication.EmployeeGroup,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployeeGroup
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditEmployeeGroup, {
        /// <field>
        /// Called when a new AddEditEmployeeGroup screen is created.
        /// <br/>created(msls.application.AddEditEmployeeGroup screen)
        /// </field>
        created: [lightSwitchApplication.AddEditEmployeeGroup],
        /// <field>
        /// Called before changes on an active AddEditEmployeeGroup screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditEmployeeGroup screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditEmployeeGroup],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeGroup().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeGroup().findContentItem("columns"); }],
        /// <field>
        /// Called after the EmployeeGroupName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeGroupName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeGroup().findContentItem("EmployeeGroupName"); }]
    });

    lightSwitchApplication.AddEditEmployeeGroupCourseAssignment.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployeeGroupCourseAssignment
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployeeGroupCourseAssignment,
            data: lightSwitchApplication.AddEditEmployeeGroupCourseAssignment,
            value: lightSwitchApplication.AddEditEmployeeGroupCourseAssignment
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditEmployeeGroupCourseAssignment,
            data: lightSwitchApplication.AddEditEmployeeGroupCourseAssignment,
            value: lightSwitchApplication.EmployeeGroupCourseAssignment
        },
        EmployeeGroup: {
            _$class: msls.ContentItem,
            _$name: "EmployeeGroup",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployeeGroupCourseAssignment,
            data: lightSwitchApplication.EmployeeGroupCourseAssignment,
            value: lightSwitchApplication.EmployeeGroup
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "EmployeeGroup",
            screen: lightSwitchApplication.AddEditEmployeeGroupCourseAssignment,
            data: lightSwitchApplication.EmployeeGroup,
            value: lightSwitchApplication.EmployeeGroup
        },
        DateAssigned: {
            _$class: msls.ContentItem,
            _$name: "DateAssigned",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployeeGroupCourseAssignment,
            data: lightSwitchApplication.EmployeeGroupCourseAssignment,
            value: Date
        },
        TargetCompletionDate: {
            _$class: msls.ContentItem,
            _$name: "TargetCompletionDate",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployeeGroupCourseAssignment,
            data: lightSwitchApplication.EmployeeGroupCourseAssignment,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployeeGroupCourseAssignment
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditEmployeeGroupCourseAssignment, {
        /// <field>
        /// Called when a new AddEditEmployeeGroupCourseAssignment screen is created.
        /// <br/>created(msls.application.AddEditEmployeeGroupCourseAssignment screen)
        /// </field>
        created: [lightSwitchApplication.AddEditEmployeeGroupCourseAssignment],
        /// <field>
        /// Called before changes on an active AddEditEmployeeGroupCourseAssignment screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditEmployeeGroupCourseAssignment screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditEmployeeGroupCourseAssignment],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeGroupCourseAssignment().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeGroupCourseAssignment().findContentItem("columns"); }],
        /// <field>
        /// Called after the EmployeeGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeGroup_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeGroupCourseAssignment().findContentItem("EmployeeGroup"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeGroupCourseAssignment().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the DateAssigned content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateAssigned_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeGroupCourseAssignment().findContentItem("DateAssigned"); }],
        /// <field>
        /// Called after the TargetCompletionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetCompletionDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeGroupCourseAssignment().findContentItem("TargetCompletionDate"); }]
    });

    lightSwitchApplication.AddEditEmployeeJobRole.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployeeJobRole
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployeeJobRole,
            data: lightSwitchApplication.AddEditEmployeeJobRole,
            value: lightSwitchApplication.AddEditEmployeeJobRole
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditEmployeeJobRole,
            data: lightSwitchApplication.AddEditEmployeeJobRole,
            value: lightSwitchApplication.EmployeeJobRole
        },
        JobRole: {
            _$class: msls.ContentItem,
            _$name: "JobRole",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployeeJobRole,
            data: lightSwitchApplication.EmployeeJobRole,
            value: lightSwitchApplication.JobRole
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "JobRole",
            screen: lightSwitchApplication.AddEditEmployeeJobRole,
            data: lightSwitchApplication.JobRole,
            value: lightSwitchApplication.JobRole
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployeeJobRole
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditEmployeeJobRole, {
        /// <field>
        /// Called when a new AddEditEmployeeJobRole screen is created.
        /// <br/>created(msls.application.AddEditEmployeeJobRole screen)
        /// </field>
        created: [lightSwitchApplication.AddEditEmployeeJobRole],
        /// <field>
        /// Called before changes on an active AddEditEmployeeJobRole screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditEmployeeJobRole screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditEmployeeJobRole],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeJobRole().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeJobRole().findContentItem("columns"); }],
        /// <field>
        /// Called after the JobRole content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        JobRole_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeJobRole().findContentItem("JobRole"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeJobRole().findContentItem("RowTemplate1"); }]
    });

    lightSwitchApplication.AddEditEmployeeTrainingRecord.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployeeTrainingRecord
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployeeTrainingRecord,
            data: lightSwitchApplication.AddEditEmployeeTrainingRecord,
            value: lightSwitchApplication.AddEditEmployeeTrainingRecord
        },
        EmployeeTrainingRecord_Course: {
            _$class: msls.ContentItem,
            _$name: "EmployeeTrainingRecord_Course",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditEmployeeTrainingRecord,
            data: lightSwitchApplication.AddEditEmployeeTrainingRecord,
            value: lightSwitchApplication.Course
        },
        CourseReference: {
            _$class: msls.ContentItem,
            _$name: "CourseReference",
            _$parentName: "EmployeeTrainingRecord_Course",
            screen: lightSwitchApplication.AddEditEmployeeTrainingRecord,
            data: lightSwitchApplication.Course,
            value: String
        },
        CourseTitle: {
            _$class: msls.ContentItem,
            _$name: "CourseTitle",
            _$parentName: "EmployeeTrainingRecord_Course",
            screen: lightSwitchApplication.AddEditEmployeeTrainingRecord,
            data: lightSwitchApplication.Course,
            value: String
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditEmployeeTrainingRecord,
            data: lightSwitchApplication.AddEditEmployeeTrainingRecord,
            value: lightSwitchApplication.EmployeeTrainingRecord
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployeeTrainingRecord,
            data: lightSwitchApplication.EmployeeTrainingRecord,
            value: lightSwitchApplication.EmployeeTrainingRecord
        },
        DateAssigned: {
            _$class: msls.ContentItem,
            _$name: "DateAssigned",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployeeTrainingRecord,
            data: lightSwitchApplication.EmployeeTrainingRecord,
            value: Date
        },
        TargetCompletionDate: {
            _$class: msls.ContentItem,
            _$name: "TargetCompletionDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployeeTrainingRecord,
            data: lightSwitchApplication.EmployeeTrainingRecord,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployeeTrainingRecord,
            data: lightSwitchApplication.EmployeeTrainingRecord,
            value: lightSwitchApplication.EmployeeTrainingRecord
        },
        DateTrainingCommenced: {
            _$class: msls.ContentItem,
            _$name: "DateTrainingCommenced",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEmployeeTrainingRecord,
            data: lightSwitchApplication.EmployeeTrainingRecord,
            value: Date
        },
        DateTrainingCompleted: {
            _$class: msls.ContentItem,
            _$name: "DateTrainingCompleted",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEmployeeTrainingRecord,
            data: lightSwitchApplication.EmployeeTrainingRecord,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployeeTrainingRecord
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditEmployeeTrainingRecord, {
        /// <field>
        /// Called when a new AddEditEmployeeTrainingRecord screen is created.
        /// <br/>created(msls.application.AddEditEmployeeTrainingRecord screen)
        /// </field>
        created: [lightSwitchApplication.AddEditEmployeeTrainingRecord],
        /// <field>
        /// Called before changes on an active AddEditEmployeeTrainingRecord screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditEmployeeTrainingRecord screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditEmployeeTrainingRecord],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeTrainingRecord().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the EmployeeTrainingRecord_Course content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeTrainingRecord_Course_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeTrainingRecord().findContentItem("EmployeeTrainingRecord_Course"); }],
        /// <field>
        /// Called after the CourseReference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CourseReference_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeTrainingRecord().findContentItem("CourseReference"); }],
        /// <field>
        /// Called after the CourseTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CourseTitle_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeTrainingRecord().findContentItem("CourseTitle"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeTrainingRecord().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeTrainingRecord().findContentItem("left"); }],
        /// <field>
        /// Called after the DateAssigned content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateAssigned_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeTrainingRecord().findContentItem("DateAssigned"); }],
        /// <field>
        /// Called after the TargetCompletionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetCompletionDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeTrainingRecord().findContentItem("TargetCompletionDate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeTrainingRecord().findContentItem("right"); }],
        /// <field>
        /// Called after the DateTrainingCommenced content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateTrainingCommenced_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeTrainingRecord().findContentItem("DateTrainingCommenced"); }],
        /// <field>
        /// Called after the DateTrainingCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateTrainingCompleted_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeTrainingRecord().findContentItem("DateTrainingCompleted"); }]
    });

    lightSwitchApplication.AddEditJobRole.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditJobRole
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditJobRole,
            data: lightSwitchApplication.AddEditJobRole,
            value: lightSwitchApplication.AddEditJobRole
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditJobRole,
            data: lightSwitchApplication.AddEditJobRole,
            value: lightSwitchApplication.JobRole
        },
        JobRoleDescription: {
            _$class: msls.ContentItem,
            _$name: "JobRoleDescription",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditJobRole,
            data: lightSwitchApplication.JobRole,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditJobRole
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditJobRole, {
        /// <field>
        /// Called when a new AddEditJobRole screen is created.
        /// <br/>created(msls.application.AddEditJobRole screen)
        /// </field>
        created: [lightSwitchApplication.AddEditJobRole],
        /// <field>
        /// Called before changes on an active AddEditJobRole screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditJobRole screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditJobRole],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditJobRole().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditJobRole().findContentItem("columns"); }],
        /// <field>
        /// Called after the JobRoleDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        JobRoleDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditJobRole().findContentItem("JobRoleDescription"); }]
    });

    lightSwitchApplication.AddEditJobRoleCourseAssignment.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditJobRoleCourseAssignment
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditJobRoleCourseAssignment,
            data: lightSwitchApplication.AddEditJobRoleCourseAssignment,
            value: lightSwitchApplication.AddEditJobRoleCourseAssignment
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditJobRoleCourseAssignment,
            data: lightSwitchApplication.AddEditJobRoleCourseAssignment,
            value: lightSwitchApplication.JobRoleCourseAssignment
        },
        JobRole: {
            _$class: msls.ContentItem,
            _$name: "JobRole",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditJobRoleCourseAssignment,
            data: lightSwitchApplication.JobRoleCourseAssignment,
            value: lightSwitchApplication.JobRole
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "JobRole",
            screen: lightSwitchApplication.AddEditJobRoleCourseAssignment,
            data: lightSwitchApplication.JobRole,
            value: lightSwitchApplication.JobRole
        },
        DateAssigned: {
            _$class: msls.ContentItem,
            _$name: "DateAssigned",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditJobRoleCourseAssignment,
            data: lightSwitchApplication.JobRoleCourseAssignment,
            value: Date
        },
        TargetCompletionDate: {
            _$class: msls.ContentItem,
            _$name: "TargetCompletionDate",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditJobRoleCourseAssignment,
            data: lightSwitchApplication.JobRoleCourseAssignment,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditJobRoleCourseAssignment
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditJobRoleCourseAssignment, {
        /// <field>
        /// Called when a new AddEditJobRoleCourseAssignment screen is created.
        /// <br/>created(msls.application.AddEditJobRoleCourseAssignment screen)
        /// </field>
        created: [lightSwitchApplication.AddEditJobRoleCourseAssignment],
        /// <field>
        /// Called before changes on an active AddEditJobRoleCourseAssignment screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditJobRoleCourseAssignment screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditJobRoleCourseAssignment],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditJobRoleCourseAssignment().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditJobRoleCourseAssignment().findContentItem("columns"); }],
        /// <field>
        /// Called after the JobRole content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        JobRole_postRender: [$element, function () { return new lightSwitchApplication.AddEditJobRoleCourseAssignment().findContentItem("JobRole"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditJobRoleCourseAssignment().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the DateAssigned content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateAssigned_postRender: [$element, function () { return new lightSwitchApplication.AddEditJobRoleCourseAssignment().findContentItem("DateAssigned"); }],
        /// <field>
        /// Called after the TargetCompletionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetCompletionDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditJobRoleCourseAssignment().findContentItem("TargetCompletionDate"); }]
    });

    lightSwitchApplication.AddEditTrainingSession.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTrainingSession
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditTrainingSession,
            data: lightSwitchApplication.AddEditTrainingSession,
            value: lightSwitchApplication.AddEditTrainingSession
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditTrainingSession,
            data: lightSwitchApplication.AddEditTrainingSession,
            value: lightSwitchApplication.TrainingSession
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTrainingSession,
            data: lightSwitchApplication.TrainingSession,
            value: lightSwitchApplication.Employee
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Employee",
            screen: lightSwitchApplication.AddEditTrainingSession,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditTrainingSession,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditTrainingSession,
            data: lightSwitchApplication.Employee,
            value: String
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTrainingSession,
            data: lightSwitchApplication.TrainingSession,
            value: Date
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTrainingSession,
            data: lightSwitchApplication.TrainingSession,
            value: Date
        },
        MaximumAttendees: {
            _$class: msls.ContentItem,
            _$name: "MaximumAttendees",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTrainingSession,
            data: lightSwitchApplication.TrainingSession,
            value: Number
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTrainingSession,
            data: lightSwitchApplication.TrainingSession,
            value: lightSwitchApplication.TrainingSession
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTrainingSession
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditTrainingSession, {
        /// <field>
        /// Called when a new AddEditTrainingSession screen is created.
        /// <br/>created(msls.application.AddEditTrainingSession screen)
        /// </field>
        created: [lightSwitchApplication.AddEditTrainingSession],
        /// <field>
        /// Called before changes on an active AddEditTrainingSession screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditTrainingSession screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditTrainingSession],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSession().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSession().findContentItem("columns"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSession().findContentItem("Employee"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSession().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSession().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSession().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSession().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSession().findContentItem("EndDate"); }],
        /// <field>
        /// Called after the MaximumAttendees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MaximumAttendees_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSession().findContentItem("MaximumAttendees"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSession().findContentItem("left"); }]
    });

    lightSwitchApplication.AddEditTrainingSessionAndAttendees.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTrainingSessionAndAttendees
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditTrainingSessionAndAttendees,
            data: lightSwitchApplication.AddEditTrainingSessionAndAttendees,
            value: lightSwitchApplication.AddEditTrainingSessionAndAttendees
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditTrainingSessionAndAttendees,
            data: lightSwitchApplication.AddEditTrainingSessionAndAttendees,
            value: lightSwitchApplication.TrainingSession
        },
        Trainer: {
            _$class: msls.ContentItem,
            _$name: "Trainer",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTrainingSessionAndAttendees,
            data: lightSwitchApplication.TrainingSession,
            value: lightSwitchApplication.Employee
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Trainer",
            screen: lightSwitchApplication.AddEditTrainingSessionAndAttendees,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditTrainingSessionAndAttendees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditTrainingSessionAndAttendees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        DatesGroup: {
            _$class: msls.ContentItem,
            _$name: "DatesGroup",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTrainingSessionAndAttendees,
            data: lightSwitchApplication.TrainingSession,
            value: lightSwitchApplication.TrainingSession
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "DatesGroup",
            screen: lightSwitchApplication.AddEditTrainingSessionAndAttendees,
            data: lightSwitchApplication.TrainingSession,
            value: Date
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "DatesGroup",
            screen: lightSwitchApplication.AddEditTrainingSessionAndAttendees,
            data: lightSwitchApplication.TrainingSession,
            value: Date
        },
        MaximumAttendees: {
            _$class: msls.ContentItem,
            _$name: "MaximumAttendees",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTrainingSessionAndAttendees,
            data: lightSwitchApplication.TrainingSession,
            value: Number
        },
        TrainingSessionAttendeesTab: {
            _$class: msls.ContentItem,
            _$name: "TrainingSessionAttendeesTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditTrainingSessionAndAttendees,
            data: lightSwitchApplication.AddEditTrainingSessionAndAttendees,
            value: lightSwitchApplication.AddEditTrainingSessionAndAttendees
        },
        TrainingSessionAttendees1: {
            _$class: msls.ContentItem,
            _$name: "TrainingSessionAttendees1",
            _$parentName: "TrainingSessionAttendeesTab",
            screen: lightSwitchApplication.AddEditTrainingSessionAndAttendees,
            data: lightSwitchApplication.AddEditTrainingSessionAndAttendees,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditTrainingSessionAndAttendees,
                _$entry: {
                    elementType: lightSwitchApplication.TrainingSessionAttendee
                }
            }
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "TrainingSessionAttendees1",
            screen: lightSwitchApplication.AddEditTrainingSessionAndAttendees,
            data: lightSwitchApplication.TrainingSessionAttendee,
            value: lightSwitchApplication.TrainingSessionAttendee
        },
        Employee_LastName: {
            _$class: msls.ContentItem,
            _$name: "Employee_LastName",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditTrainingSessionAndAttendees,
            data: lightSwitchApplication.TrainingSessionAttendee,
            value: String
        },
        Employee_FirstName: {
            _$class: msls.ContentItem,
            _$name: "Employee_FirstName",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditTrainingSessionAndAttendees,
            data: lightSwitchApplication.TrainingSessionAttendee,
            value: String
        },
        Employee_Email: {
            _$class: msls.ContentItem,
            _$name: "Employee_Email",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditTrainingSessionAndAttendees,
            data: lightSwitchApplication.TrainingSessionAttendee,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTrainingSessionAndAttendees
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditTrainingSessionAndAttendees, {
        /// <field>
        /// Called when a new AddEditTrainingSessionAndAttendees screen is created.
        /// <br/>created(msls.application.AddEditTrainingSessionAndAttendees screen)
        /// </field>
        created: [lightSwitchApplication.AddEditTrainingSessionAndAttendees],
        /// <field>
        /// Called before changes on an active AddEditTrainingSessionAndAttendees screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditTrainingSessionAndAttendees screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditTrainingSessionAndAttendees],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSessionAndAttendees().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSessionAndAttendees().findContentItem("columns"); }],
        /// <field>
        /// Called after the Trainer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Trainer_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSessionAndAttendees().findContentItem("Trainer"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSessionAndAttendees().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSessionAndAttendees().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSessionAndAttendees().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the DatesGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DatesGroup_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSessionAndAttendees().findContentItem("DatesGroup"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSessionAndAttendees().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSessionAndAttendees().findContentItem("EndDate"); }],
        /// <field>
        /// Called after the MaximumAttendees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MaximumAttendees_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSessionAndAttendees().findContentItem("MaximumAttendees"); }],
        /// <field>
        /// Called after the TrainingSessionAttendeesTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TrainingSessionAttendeesTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSessionAndAttendees().findContentItem("TrainingSessionAttendeesTab"); }],
        /// <field>
        /// Called after the TrainingSessionAttendees1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TrainingSessionAttendees1_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSessionAndAttendees().findContentItem("TrainingSessionAttendees1"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSessionAndAttendees().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the Employee_LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSessionAndAttendees().findContentItem("Employee_LastName"); }],
        /// <field>
        /// Called after the Employee_FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSessionAndAttendees().findContentItem("Employee_FirstName"); }],
        /// <field>
        /// Called after the Employee_Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSessionAndAttendees().findContentItem("Employee_Email"); }]
    });

    lightSwitchApplication.AddEditTrainingSessionAttendee.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTrainingSessionAttendee
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditTrainingSessionAttendee,
            data: lightSwitchApplication.AddEditTrainingSessionAttendee,
            value: lightSwitchApplication.AddEditTrainingSessionAttendee
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditTrainingSessionAttendee,
            data: lightSwitchApplication.AddEditTrainingSessionAttendee,
            value: lightSwitchApplication.TrainingSessionAttendee
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTrainingSessionAttendee,
            data: lightSwitchApplication.TrainingSessionAttendee,
            value: lightSwitchApplication.Employee
        },
        EmployeeTemplate: {
            _$class: msls.ContentItem,
            _$name: "EmployeeTemplate",
            _$parentName: "Employee",
            screen: lightSwitchApplication.AddEditTrainingSessionAttendee,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "EmployeeTemplate",
            screen: lightSwitchApplication.AddEditTrainingSessionAttendee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "EmployeeTemplate",
            screen: lightSwitchApplication.AddEditTrainingSessionAttendee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTrainingSessionAttendee
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditTrainingSessionAttendee, {
        /// <field>
        /// Called when a new AddEditTrainingSessionAttendee screen is created.
        /// <br/>created(msls.application.AddEditTrainingSessionAttendee screen)
        /// </field>
        created: [lightSwitchApplication.AddEditTrainingSessionAttendee],
        /// <field>
        /// Called before changes on an active AddEditTrainingSessionAttendee screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditTrainingSessionAttendee screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditTrainingSessionAttendee],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSessionAttendee().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSessionAttendee().findContentItem("columns"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSessionAttendee().findContentItem("Employee"); }],
        /// <field>
        /// Called after the EmployeeTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSessionAttendee().findContentItem("EmployeeTemplate"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSessionAttendee().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditTrainingSessionAttendee().findContentItem("FirstName"); }]
    });

    lightSwitchApplication.BrowseCourses.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseCourses
        },
        CourseList: {
            _$class: msls.ContentItem,
            _$name: "CourseList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseCourses,
            data: lightSwitchApplication.BrowseCourses,
            value: lightSwitchApplication.BrowseCourses
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "CourseList",
            screen: lightSwitchApplication.BrowseCourses,
            data: lightSwitchApplication.BrowseCourses,
            value: String
        },
        Course: {
            _$class: msls.ContentItem,
            _$name: "Course",
            _$parentName: "CourseList",
            screen: lightSwitchApplication.BrowseCourses,
            data: lightSwitchApplication.BrowseCourses,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseCourses,
                _$entry: {
                    elementType: lightSwitchApplication.Course
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Course",
            screen: lightSwitchApplication.BrowseCourses,
            data: lightSwitchApplication.Course,
            value: lightSwitchApplication.Course
        },
        CourseReference: {
            _$class: msls.ContentItem,
            _$name: "CourseReference",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseCourses,
            data: lightSwitchApplication.Course,
            value: String
        },
        CourseTitle: {
            _$class: msls.ContentItem,
            _$name: "CourseTitle",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseCourses,
            data: lightSwitchApplication.Course,
            value: String
        },
        CourseVersion: {
            _$class: msls.ContentItem,
            _$name: "CourseVersion",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseCourses,
            data: lightSwitchApplication.Course,
            value: Number
        },
        CourseStatus: {
            _$class: msls.ContentItem,
            _$name: "CourseStatus",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseCourses,
            data: lightSwitchApplication.Course,
            value: lightSwitchApplication.CourseStatus
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseCourses
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseCourses, {
        /// <field>
        /// Called when a new BrowseCourses screen is created.
        /// <br/>created(msls.application.BrowseCourses screen)
        /// </field>
        created: [lightSwitchApplication.BrowseCourses],
        /// <field>
        /// Called before changes on an active BrowseCourses screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseCourses screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseCourses],
        /// <field>
        /// Called after the CourseList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CourseList_postRender: [$element, function () { return new lightSwitchApplication.BrowseCourses().findContentItem("CourseList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseCourses().findContentItem("Search"); }],
        /// <field>
        /// Called after the Course content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Course_postRender: [$element, function () { return new lightSwitchApplication.BrowseCourses().findContentItem("Course"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseCourses().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the CourseReference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CourseReference_postRender: [$element, function () { return new lightSwitchApplication.BrowseCourses().findContentItem("CourseReference"); }],
        /// <field>
        /// Called after the CourseTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CourseTitle_postRender: [$element, function () { return new lightSwitchApplication.BrowseCourses().findContentItem("CourseTitle"); }],
        /// <field>
        /// Called after the CourseVersion content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CourseVersion_postRender: [$element, function () { return new lightSwitchApplication.BrowseCourses().findContentItem("CourseVersion"); }],
        /// <field>
        /// Called after the CourseStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CourseStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseCourses().findContentItem("CourseStatus"); }]
    });

    lightSwitchApplication.BrowseCourseStatuses.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseCourseStatuses
        },
        CourseStatusList: {
            _$class: msls.ContentItem,
            _$name: "CourseStatusList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseCourseStatuses,
            data: lightSwitchApplication.BrowseCourseStatuses,
            value: lightSwitchApplication.BrowseCourseStatuses
        },
        CourseStatus: {
            _$class: msls.ContentItem,
            _$name: "CourseStatus",
            _$parentName: "CourseStatusList",
            screen: lightSwitchApplication.BrowseCourseStatuses,
            data: lightSwitchApplication.BrowseCourseStatuses,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseCourseStatuses,
                _$entry: {
                    elementType: lightSwitchApplication.CourseStatus
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "CourseStatus",
            screen: lightSwitchApplication.BrowseCourseStatuses,
            data: lightSwitchApplication.CourseStatus,
            value: lightSwitchApplication.CourseStatus
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseCourseStatuses,
            data: lightSwitchApplication.CourseStatus,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseCourseStatuses
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseCourseStatuses, {
        /// <field>
        /// Called when a new BrowseCourseStatuses screen is created.
        /// <br/>created(msls.application.BrowseCourseStatuses screen)
        /// </field>
        created: [lightSwitchApplication.BrowseCourseStatuses],
        /// <field>
        /// Called before changes on an active BrowseCourseStatuses screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseCourseStatuses screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseCourseStatuses],
        /// <field>
        /// Called after the CourseStatusList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CourseStatusList_postRender: [$element, function () { return new lightSwitchApplication.BrowseCourseStatuses().findContentItem("CourseStatusList"); }],
        /// <field>
        /// Called after the CourseStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CourseStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseCourseStatuses().findContentItem("CourseStatus"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseCourseStatuses().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.BrowseCourseStatuses().findContentItem("Status"); }]
    });

    lightSwitchApplication.BrowseEmployeeGroups.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployeeGroups
        },
        EmployeeGroupList: {
            _$class: msls.ContentItem,
            _$name: "EmployeeGroupList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseEmployeeGroups,
            data: lightSwitchApplication.BrowseEmployeeGroups,
            value: lightSwitchApplication.BrowseEmployeeGroups
        },
        EmployeeGroup: {
            _$class: msls.ContentItem,
            _$name: "EmployeeGroup",
            _$parentName: "EmployeeGroupList",
            screen: lightSwitchApplication.BrowseEmployeeGroups,
            data: lightSwitchApplication.BrowseEmployeeGroups,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseEmployeeGroups,
                _$entry: {
                    elementType: lightSwitchApplication.EmployeeGroup
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "EmployeeGroup",
            screen: lightSwitchApplication.BrowseEmployeeGroups,
            data: lightSwitchApplication.EmployeeGroup,
            value: lightSwitchApplication.EmployeeGroup
        },
        EmployeeGroupName: {
            _$class: msls.ContentItem,
            _$name: "EmployeeGroupName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployeeGroups,
            data: lightSwitchApplication.EmployeeGroup,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployeeGroups
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseEmployeeGroups, {
        /// <field>
        /// Called when a new BrowseEmployeeGroups screen is created.
        /// <br/>created(msls.application.BrowseEmployeeGroups screen)
        /// </field>
        created: [lightSwitchApplication.BrowseEmployeeGroups],
        /// <field>
        /// Called before changes on an active BrowseEmployeeGroups screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseEmployeeGroups screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseEmployeeGroups],
        /// <field>
        /// Called after the EmployeeGroupList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeGroupList_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeGroups().findContentItem("EmployeeGroupList"); }],
        /// <field>
        /// Called after the EmployeeGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeGroup_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeGroups().findContentItem("EmployeeGroup"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeGroups().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the EmployeeGroupName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeGroupName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeGroups().findContentItem("EmployeeGroupName"); }]
    });

    lightSwitchApplication.BrowseEmployees.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployees
        },
        EmployeeList: {
            _$class: msls.ContentItem,
            _$name: "EmployeeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: lightSwitchApplication.BrowseEmployees
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "EmployeeList",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: String
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "EmployeeList",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseEmployees,
                _$entry: {
                    elementType: lightSwitchApplication.Employee
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Employee",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Current: {
            _$class: msls.ContentItem,
            _$name: "Current",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: Boolean
        },
        EmployeeGroup: {
            _$class: msls.ContentItem,
            _$name: "EmployeeGroup",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.EmployeeGroup
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployees
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseEmployees, {
        /// <field>
        /// Called when a new BrowseEmployees screen is created.
        /// <br/>created(msls.application.BrowseEmployees screen)
        /// </field>
        created: [lightSwitchApplication.BrowseEmployees],
        /// <field>
        /// Called before changes on an active BrowseEmployees screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseEmployees screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseEmployees],
        /// <field>
        /// Called after the EmployeeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeList_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("EmployeeList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Search"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Employee"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("UserName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Email"); }],
        /// <field>
        /// Called after the Current content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Current_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Current"); }],
        /// <field>
        /// Called after the EmployeeGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeGroup_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("EmployeeGroup"); }]
    });

    lightSwitchApplication.BrowseEmployeeTrainingRecords.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployeeTrainingRecords
        },
        EmployeeTrainingRecordList: {
            _$class: msls.ContentItem,
            _$name: "EmployeeTrainingRecordList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseEmployeeTrainingRecords,
            data: lightSwitchApplication.BrowseEmployeeTrainingRecords,
            value: lightSwitchApplication.BrowseEmployeeTrainingRecords
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "EmployeeTrainingRecordList",
            screen: lightSwitchApplication.BrowseEmployeeTrainingRecords,
            data: lightSwitchApplication.BrowseEmployeeTrainingRecords,
            value: String
        },
        EmployeeTrainingRecord: {
            _$class: msls.ContentItem,
            _$name: "EmployeeTrainingRecord",
            _$parentName: "EmployeeTrainingRecordList",
            screen: lightSwitchApplication.BrowseEmployeeTrainingRecords,
            data: lightSwitchApplication.BrowseEmployeeTrainingRecords,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseEmployeeTrainingRecords,
                _$entry: {
                    elementType: lightSwitchApplication.EmployeeTrainingRecord
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "EmployeeTrainingRecord",
            screen: lightSwitchApplication.BrowseEmployeeTrainingRecords,
            data: lightSwitchApplication.EmployeeTrainingRecord,
            value: lightSwitchApplication.EmployeeTrainingRecord
        },
        Course_CourseReference: {
            _$class: msls.ContentItem,
            _$name: "Course_CourseReference",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployeeTrainingRecords,
            data: lightSwitchApplication.EmployeeTrainingRecord,
            value: String
        },
        Course_CourseTitle: {
            _$class: msls.ContentItem,
            _$name: "Course_CourseTitle",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployeeTrainingRecords,
            data: lightSwitchApplication.EmployeeTrainingRecord,
            value: String
        },
        Employee_LastName: {
            _$class: msls.ContentItem,
            _$name: "Employee_LastName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployeeTrainingRecords,
            data: lightSwitchApplication.EmployeeTrainingRecord,
            value: String
        },
        Employee_FirstName: {
            _$class: msls.ContentItem,
            _$name: "Employee_FirstName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployeeTrainingRecords,
            data: lightSwitchApplication.EmployeeTrainingRecord,
            value: String
        },
        DateAssigned: {
            _$class: msls.ContentItem,
            _$name: "DateAssigned",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployeeTrainingRecords,
            data: lightSwitchApplication.EmployeeTrainingRecord,
            value: Date
        },
        TargetCompletionDate: {
            _$class: msls.ContentItem,
            _$name: "TargetCompletionDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployeeTrainingRecords,
            data: lightSwitchApplication.EmployeeTrainingRecord,
            value: Date
        },
        DateTrainingCommenced: {
            _$class: msls.ContentItem,
            _$name: "DateTrainingCommenced",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployeeTrainingRecords,
            data: lightSwitchApplication.EmployeeTrainingRecord,
            value: Date
        },
        DateTrainingCompleted: {
            _$class: msls.ContentItem,
            _$name: "DateTrainingCompleted",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployeeTrainingRecords,
            data: lightSwitchApplication.EmployeeTrainingRecord,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployeeTrainingRecords
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseEmployeeTrainingRecords, {
        /// <field>
        /// Called when a new BrowseEmployeeTrainingRecords screen is created.
        /// <br/>created(msls.application.BrowseEmployeeTrainingRecords screen)
        /// </field>
        created: [lightSwitchApplication.BrowseEmployeeTrainingRecords],
        /// <field>
        /// Called before changes on an active BrowseEmployeeTrainingRecords screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseEmployeeTrainingRecords screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseEmployeeTrainingRecords],
        /// <field>
        /// Called after the EmployeeTrainingRecordList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeTrainingRecordList_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeTrainingRecords().findContentItem("EmployeeTrainingRecordList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeTrainingRecords().findContentItem("Search"); }],
        /// <field>
        /// Called after the EmployeeTrainingRecord content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeTrainingRecord_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeTrainingRecords().findContentItem("EmployeeTrainingRecord"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeTrainingRecords().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Course_CourseReference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Course_CourseReference_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeTrainingRecords().findContentItem("Course_CourseReference"); }],
        /// <field>
        /// Called after the Course_CourseTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Course_CourseTitle_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeTrainingRecords().findContentItem("Course_CourseTitle"); }],
        /// <field>
        /// Called after the Employee_LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_LastName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeTrainingRecords().findContentItem("Employee_LastName"); }],
        /// <field>
        /// Called after the Employee_FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_FirstName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeTrainingRecords().findContentItem("Employee_FirstName"); }],
        /// <field>
        /// Called after the DateAssigned content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateAssigned_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeTrainingRecords().findContentItem("DateAssigned"); }],
        /// <field>
        /// Called after the TargetCompletionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetCompletionDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeTrainingRecords().findContentItem("TargetCompletionDate"); }],
        /// <field>
        /// Called after the DateTrainingCommenced content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateTrainingCommenced_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeTrainingRecords().findContentItem("DateTrainingCommenced"); }],
        /// <field>
        /// Called after the DateTrainingCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateTrainingCompleted_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeTrainingRecords().findContentItem("DateTrainingCompleted"); }]
    });

    lightSwitchApplication.BrowseJobRoles.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseJobRoles
        },
        JobRoleList: {
            _$class: msls.ContentItem,
            _$name: "JobRoleList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseJobRoles,
            data: lightSwitchApplication.BrowseJobRoles,
            value: lightSwitchApplication.BrowseJobRoles
        },
        JobRole: {
            _$class: msls.ContentItem,
            _$name: "JobRole",
            _$parentName: "JobRoleList",
            screen: lightSwitchApplication.BrowseJobRoles,
            data: lightSwitchApplication.BrowseJobRoles,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseJobRoles,
                _$entry: {
                    elementType: lightSwitchApplication.JobRole
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "JobRole",
            screen: lightSwitchApplication.BrowseJobRoles,
            data: lightSwitchApplication.JobRole,
            value: lightSwitchApplication.JobRole
        },
        JobRoleDescription: {
            _$class: msls.ContentItem,
            _$name: "JobRoleDescription",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseJobRoles,
            data: lightSwitchApplication.JobRole,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseJobRoles
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseJobRoles, {
        /// <field>
        /// Called when a new BrowseJobRoles screen is created.
        /// <br/>created(msls.application.BrowseJobRoles screen)
        /// </field>
        created: [lightSwitchApplication.BrowseJobRoles],
        /// <field>
        /// Called before changes on an active BrowseJobRoles screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseJobRoles screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseJobRoles],
        /// <field>
        /// Called after the JobRoleList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        JobRoleList_postRender: [$element, function () { return new lightSwitchApplication.BrowseJobRoles().findContentItem("JobRoleList"); }],
        /// <field>
        /// Called after the JobRole content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        JobRole_postRender: [$element, function () { return new lightSwitchApplication.BrowseJobRoles().findContentItem("JobRole"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseJobRoles().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the JobRoleDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        JobRoleDescription_postRender: [$element, function () { return new lightSwitchApplication.BrowseJobRoles().findContentItem("JobRoleDescription"); }]
    });

    lightSwitchApplication.BrowseMyCourses.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyCourses
        },
        CourseList: {
            _$class: msls.ContentItem,
            _$name: "CourseList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMyCourses,
            data: lightSwitchApplication.BrowseMyCourses,
            value: lightSwitchApplication.BrowseMyCourses
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "CourseList",
            screen: lightSwitchApplication.BrowseMyCourses,
            data: lightSwitchApplication.BrowseMyCourses,
            value: String
        },
        Course: {
            _$class: msls.ContentItem,
            _$name: "Course",
            _$parentName: "CourseList",
            screen: lightSwitchApplication.BrowseMyCourses,
            data: lightSwitchApplication.BrowseMyCourses,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMyCourses,
                _$entry: {
                    elementType: lightSwitchApplication.Course
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Course",
            screen: lightSwitchApplication.BrowseMyCourses,
            data: lightSwitchApplication.Course,
            value: lightSwitchApplication.Course
        },
        CourseReference: {
            _$class: msls.ContentItem,
            _$name: "CourseReference",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyCourses,
            data: lightSwitchApplication.Course,
            value: String
        },
        CourseTitle: {
            _$class: msls.ContentItem,
            _$name: "CourseTitle",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyCourses,
            data: lightSwitchApplication.Course,
            value: String
        },
        CourseVersion: {
            _$class: msls.ContentItem,
            _$name: "CourseVersion",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyCourses,
            data: lightSwitchApplication.Course,
            value: Number
        },
        CourseStatus: {
            _$class: msls.ContentItem,
            _$name: "CourseStatus",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyCourses,
            data: lightSwitchApplication.Course,
            value: lightSwitchApplication.CourseStatus
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyCourses
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMyCourses, {
        /// <field>
        /// Called when a new BrowseMyCourses screen is created.
        /// <br/>created(msls.application.BrowseMyCourses screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMyCourses],
        /// <field>
        /// Called before changes on an active BrowseMyCourses screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMyCourses screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMyCourses],
        /// <field>
        /// Called after the CourseList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CourseList_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyCourses().findContentItem("CourseList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyCourses().findContentItem("Search"); }],
        /// <field>
        /// Called after the Course content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Course_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyCourses().findContentItem("Course"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyCourses().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the CourseReference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CourseReference_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyCourses().findContentItem("CourseReference"); }],
        /// <field>
        /// Called after the CourseTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CourseTitle_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyCourses().findContentItem("CourseTitle"); }],
        /// <field>
        /// Called after the CourseVersion content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CourseVersion_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyCourses().findContentItem("CourseVersion"); }],
        /// <field>
        /// Called after the CourseStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CourseStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyCourses().findContentItem("CourseStatus"); }]
    });

    lightSwitchApplication.BrowseMyTrainingRecords.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyTrainingRecords
        },
        EmployeeTrainingRecordList: {
            _$class: msls.ContentItem,
            _$name: "EmployeeTrainingRecordList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMyTrainingRecords,
            data: lightSwitchApplication.BrowseMyTrainingRecords,
            value: lightSwitchApplication.BrowseMyTrainingRecords
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "EmployeeTrainingRecordList",
            screen: lightSwitchApplication.BrowseMyTrainingRecords,
            data: lightSwitchApplication.BrowseMyTrainingRecords,
            value: String
        },
        EmployeeTrainingRecord: {
            _$class: msls.ContentItem,
            _$name: "EmployeeTrainingRecord",
            _$parentName: "EmployeeTrainingRecordList",
            screen: lightSwitchApplication.BrowseMyTrainingRecords,
            data: lightSwitchApplication.BrowseMyTrainingRecords,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMyTrainingRecords,
                _$entry: {
                    elementType: lightSwitchApplication.EmployeeTrainingRecord
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "EmployeeTrainingRecord",
            screen: lightSwitchApplication.BrowseMyTrainingRecords,
            data: lightSwitchApplication.EmployeeTrainingRecord,
            value: lightSwitchApplication.EmployeeTrainingRecord
        },
        Course_CourseReference: {
            _$class: msls.ContentItem,
            _$name: "Course_CourseReference",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyTrainingRecords,
            data: lightSwitchApplication.EmployeeTrainingRecord,
            value: String
        },
        Course_CourseTitle: {
            _$class: msls.ContentItem,
            _$name: "Course_CourseTitle",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyTrainingRecords,
            data: lightSwitchApplication.EmployeeTrainingRecord,
            value: String
        },
        DateAssigned: {
            _$class: msls.ContentItem,
            _$name: "DateAssigned",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyTrainingRecords,
            data: lightSwitchApplication.EmployeeTrainingRecord,
            value: Date
        },
        TargetCompletionDate: {
            _$class: msls.ContentItem,
            _$name: "TargetCompletionDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyTrainingRecords,
            data: lightSwitchApplication.EmployeeTrainingRecord,
            value: Date
        },
        DateTrainingCommenced: {
            _$class: msls.ContentItem,
            _$name: "DateTrainingCommenced",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyTrainingRecords,
            data: lightSwitchApplication.EmployeeTrainingRecord,
            value: Date
        },
        DateTrainingCompleted: {
            _$class: msls.ContentItem,
            _$name: "DateTrainingCompleted",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyTrainingRecords,
            data: lightSwitchApplication.EmployeeTrainingRecord,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyTrainingRecords
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMyTrainingRecords, {
        /// <field>
        /// Called when a new BrowseMyTrainingRecords screen is created.
        /// <br/>created(msls.application.BrowseMyTrainingRecords screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMyTrainingRecords],
        /// <field>
        /// Called before changes on an active BrowseMyTrainingRecords screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMyTrainingRecords screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMyTrainingRecords],
        /// <field>
        /// Called after the EmployeeTrainingRecordList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeTrainingRecordList_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyTrainingRecords().findContentItem("EmployeeTrainingRecordList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyTrainingRecords().findContentItem("Search"); }],
        /// <field>
        /// Called after the EmployeeTrainingRecord content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeTrainingRecord_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyTrainingRecords().findContentItem("EmployeeTrainingRecord"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyTrainingRecords().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Course_CourseReference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Course_CourseReference_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyTrainingRecords().findContentItem("Course_CourseReference"); }],
        /// <field>
        /// Called after the Course_CourseTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Course_CourseTitle_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyTrainingRecords().findContentItem("Course_CourseTitle"); }],
        /// <field>
        /// Called after the DateAssigned content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateAssigned_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyTrainingRecords().findContentItem("DateAssigned"); }],
        /// <field>
        /// Called after the TargetCompletionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetCompletionDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyTrainingRecords().findContentItem("TargetCompletionDate"); }],
        /// <field>
        /// Called after the DateTrainingCommenced content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateTrainingCommenced_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyTrainingRecords().findContentItem("DateTrainingCommenced"); }],
        /// <field>
        /// Called after the DateTrainingCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateTrainingCompleted_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyTrainingRecords().findContentItem("DateTrainingCompleted"); }]
    });

    lightSwitchApplication.BrowseTrainingSessions.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTrainingSessions
        },
        TrainingSessionList: {
            _$class: msls.ContentItem,
            _$name: "TrainingSessionList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseTrainingSessions,
            data: lightSwitchApplication.BrowseTrainingSessions,
            value: lightSwitchApplication.BrowseTrainingSessions
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "TrainingSessionList",
            screen: lightSwitchApplication.BrowseTrainingSessions,
            data: lightSwitchApplication.BrowseTrainingSessions,
            value: String
        },
        TrainingSession: {
            _$class: msls.ContentItem,
            _$name: "TrainingSession",
            _$parentName: "TrainingSessionList",
            screen: lightSwitchApplication.BrowseTrainingSessions,
            data: lightSwitchApplication.BrowseTrainingSessions,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseTrainingSessions,
                _$entry: {
                    elementType: lightSwitchApplication.TrainingSession
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "TrainingSession",
            screen: lightSwitchApplication.BrowseTrainingSessions,
            data: lightSwitchApplication.TrainingSession,
            value: lightSwitchApplication.TrainingSession
        },
        Course: {
            _$class: msls.ContentItem,
            _$name: "Course",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseTrainingSessions,
            data: lightSwitchApplication.TrainingSession,
            value: lightSwitchApplication.Course
        },
        CourseReference: {
            _$class: msls.ContentItem,
            _$name: "CourseReference",
            _$parentName: "Course",
            screen: lightSwitchApplication.BrowseTrainingSessions,
            data: lightSwitchApplication.Course,
            value: String
        },
        CourseTitle: {
            _$class: msls.ContentItem,
            _$name: "CourseTitle",
            _$parentName: "Course",
            screen: lightSwitchApplication.BrowseTrainingSessions,
            data: lightSwitchApplication.Course,
            value: String
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseTrainingSessions,
            data: lightSwitchApplication.TrainingSession,
            value: lightSwitchApplication.Employee
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "Employee",
            screen: lightSwitchApplication.BrowseTrainingSessions,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "Employee",
            screen: lightSwitchApplication.BrowseTrainingSessions,
            data: lightSwitchApplication.Employee,
            value: String
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseTrainingSessions,
            data: lightSwitchApplication.TrainingSession,
            value: Date
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseTrainingSessions,
            data: lightSwitchApplication.TrainingSession,
            value: Date
        },
        MaximumAttendees: {
            _$class: msls.ContentItem,
            _$name: "MaximumAttendees",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseTrainingSessions,
            data: lightSwitchApplication.TrainingSession,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTrainingSessions
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseTrainingSessions, {
        /// <field>
        /// Called when a new BrowseTrainingSessions screen is created.
        /// <br/>created(msls.application.BrowseTrainingSessions screen)
        /// </field>
        created: [lightSwitchApplication.BrowseTrainingSessions],
        /// <field>
        /// Called before changes on an active BrowseTrainingSessions screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseTrainingSessions screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseTrainingSessions],
        /// <field>
        /// Called after the TrainingSessionList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TrainingSessionList_postRender: [$element, function () { return new lightSwitchApplication.BrowseTrainingSessions().findContentItem("TrainingSessionList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseTrainingSessions().findContentItem("Search"); }],
        /// <field>
        /// Called after the TrainingSession content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TrainingSession_postRender: [$element, function () { return new lightSwitchApplication.BrowseTrainingSessions().findContentItem("TrainingSession"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseTrainingSessions().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Course content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Course_postRender: [$element, function () { return new lightSwitchApplication.BrowseTrainingSessions().findContentItem("Course"); }],
        /// <field>
        /// Called after the CourseReference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CourseReference_postRender: [$element, function () { return new lightSwitchApplication.BrowseTrainingSessions().findContentItem("CourseReference"); }],
        /// <field>
        /// Called after the CourseTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CourseTitle_postRender: [$element, function () { return new lightSwitchApplication.BrowseTrainingSessions().findContentItem("CourseTitle"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.BrowseTrainingSessions().findContentItem("Employee"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.BrowseTrainingSessions().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.BrowseTrainingSessions().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseTrainingSessions().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseTrainingSessions().findContentItem("EndDate"); }],
        /// <field>
        /// Called after the MaximumAttendees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MaximumAttendees_postRender: [$element, function () { return new lightSwitchApplication.BrowseTrainingSessions().findContentItem("MaximumAttendees"); }]
    });

    lightSwitchApplication.Home.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        },
        MenuTab: {
            _$class: msls.ContentItem,
            _$name: "MenuTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        ManageCourses: {
            _$class: msls.ContentItem,
            _$name: "ManageCourses",
            _$parentName: "MenuTab",
            screen: lightSwitchApplication.Home
        },
        MyCourses: {
            _$class: msls.ContentItem,
            _$name: "MyCourses",
            _$parentName: "MenuTab",
            screen: lightSwitchApplication.Home
        },
        AllTrainingRecords: {
            _$class: msls.ContentItem,
            _$name: "AllTrainingRecords",
            _$parentName: "MenuTab",
            screen: lightSwitchApplication.Home
        },
        MyTrainingRecord: {
            _$class: msls.ContentItem,
            _$name: "MyTrainingRecord",
            _$parentName: "MenuTab",
            screen: lightSwitchApplication.Home
        },
        TrainingSessions: {
            _$class: msls.ContentItem,
            _$name: "TrainingSessions",
            _$parentName: "MenuTab",
            screen: lightSwitchApplication.Home
        },
        SettingsTab: {
            _$class: msls.ContentItem,
            _$name: "SettingsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        CourseStatuses: {
            _$class: msls.ContentItem,
            _$name: "CourseStatuses",
            _$parentName: "SettingsTab",
            screen: lightSwitchApplication.Home
        },
        EmployeeGroups: {
            _$class: msls.ContentItem,
            _$name: "EmployeeGroups",
            _$parentName: "SettingsTab",
            screen: lightSwitchApplication.Home
        },
        Employees: {
            _$class: msls.ContentItem,
            _$name: "Employees",
            _$parentName: "SettingsTab",
            screen: lightSwitchApplication.Home
        },
        JobRoles: {
            _$class: msls.ContentItem,
            _$name: "JobRoles",
            _$parentName: "SettingsTab",
            screen: lightSwitchApplication.Home
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Home, {
        /// <field>
        /// Called when a new Home screen is created.
        /// <br/>created(msls.application.Home screen)
        /// </field>
        created: [lightSwitchApplication.Home],
        /// <field>
        /// Called before changes on an active Home screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Home screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Home],
        /// <field>
        /// Called after the MenuTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MenuTab_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("MenuTab"); }],
        /// <field>
        /// Called after the ManageCourses content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageCourses_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageCourses"); }],
        /// <field>
        /// Called after the MyCourses content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MyCourses_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("MyCourses"); }],
        /// <field>
        /// Called after the AllTrainingRecords content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AllTrainingRecords_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("AllTrainingRecords"); }],
        /// <field>
        /// Called after the MyTrainingRecord content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MyTrainingRecord_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("MyTrainingRecord"); }],
        /// <field>
        /// Called after the TrainingSessions content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TrainingSessions_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("TrainingSessions"); }],
        /// <field>
        /// Called after the SettingsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SettingsTab_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("SettingsTab"); }],
        /// <field>
        /// Called after the CourseStatuses content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CourseStatuses_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("CourseStatuses"); }],
        /// <field>
        /// Called after the EmployeeGroups content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeGroups_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("EmployeeGroups"); }],
        /// <field>
        /// Called after the Employees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employees_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Employees"); }],
        /// <field>
        /// Called after the JobRoles content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        JobRoles_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("JobRoles"); }]
    });

    lightSwitchApplication.MobileHome.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileHome
        },
        Menu: {
            _$class: msls.ContentItem,
            _$name: "Menu",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: lightSwitchApplication.MobileHome
        },
        AllCourses: {
            _$class: msls.ContentItem,
            _$name: "AllCourses",
            _$parentName: "Menu",
            screen: lightSwitchApplication.MobileHome
        },
        MyCourses: {
            _$class: msls.ContentItem,
            _$name: "MyCourses",
            _$parentName: "Menu",
            screen: lightSwitchApplication.MobileHome
        },
        AllRecords: {
            _$class: msls.ContentItem,
            _$name: "AllRecords",
            _$parentName: "Menu",
            screen: lightSwitchApplication.MobileHome
        },
        MyRecords: {
            _$class: msls.ContentItem,
            _$name: "MyRecords",
            _$parentName: "Menu",
            screen: lightSwitchApplication.MobileHome
        },
        Sessions: {
            _$class: msls.ContentItem,
            _$name: "Sessions",
            _$parentName: "Menu",
            screen: lightSwitchApplication.MobileHome
        },
        Settings: {
            _$class: msls.ContentItem,
            _$name: "Settings",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: lightSwitchApplication.MobileHome
        },
        Statuses: {
            _$class: msls.ContentItem,
            _$name: "Statuses",
            _$parentName: "Settings",
            screen: lightSwitchApplication.MobileHome
        },
        Groups: {
            _$class: msls.ContentItem,
            _$name: "Groups",
            _$parentName: "Settings",
            screen: lightSwitchApplication.MobileHome
        },
        Employees: {
            _$class: msls.ContentItem,
            _$name: "Employees",
            _$parentName: "Settings",
            screen: lightSwitchApplication.MobileHome
        },
        JobRoles: {
            _$class: msls.ContentItem,
            _$name: "JobRoles",
            _$parentName: "Settings",
            screen: lightSwitchApplication.MobileHome
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileHome
        }
    };

    msls._addEntryPoints(lightSwitchApplication.MobileHome, {
        /// <field>
        /// Called when a new MobileHome screen is created.
        /// <br/>created(msls.application.MobileHome screen)
        /// </field>
        created: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called before changes on an active MobileHome screen are applied.
        /// <br/>beforeApplyChanges(msls.application.MobileHome screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called after the Menu content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Menu_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Menu"); }],
        /// <field>
        /// Called after the AllCourses content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AllCourses_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("AllCourses"); }],
        /// <field>
        /// Called after the MyCourses content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MyCourses_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("MyCourses"); }],
        /// <field>
        /// Called after the AllRecords content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AllRecords_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("AllRecords"); }],
        /// <field>
        /// Called after the MyRecords content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MyRecords_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("MyRecords"); }],
        /// <field>
        /// Called after the Sessions content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Sessions_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Sessions"); }],
        /// <field>
        /// Called after the Settings content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Settings_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Settings"); }],
        /// <field>
        /// Called after the Statuses content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Statuses_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Statuses"); }],
        /// <field>
        /// Called after the Groups content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Groups_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Groups"); }],
        /// <field>
        /// Called after the Employees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employees_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Employees"); }],
        /// <field>
        /// Called after the JobRoles content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        JobRoles_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("JobRoles"); }]
    });

    lightSwitchApplication.Settings.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Settings
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Settings,
            data: lightSwitchApplication.Settings,
            value: lightSwitchApplication.Settings
        },
        CourseStatuses: {
            _$class: msls.ContentItem,
            _$name: "CourseStatuses",
            _$parentName: "Group",
            screen: lightSwitchApplication.Settings
        },
        EmployeeGroups: {
            _$class: msls.ContentItem,
            _$name: "EmployeeGroups",
            _$parentName: "Group",
            screen: lightSwitchApplication.Settings
        },
        Employees: {
            _$class: msls.ContentItem,
            _$name: "Employees",
            _$parentName: "Group",
            screen: lightSwitchApplication.Settings
        },
        JobRoles: {
            _$class: msls.ContentItem,
            _$name: "JobRoles",
            _$parentName: "Group",
            screen: lightSwitchApplication.Settings
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Settings
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Settings, {
        /// <field>
        /// Called when a new Settings screen is created.
        /// <br/>created(msls.application.Settings screen)
        /// </field>
        created: [lightSwitchApplication.Settings],
        /// <field>
        /// Called before changes on an active Settings screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Settings screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Settings],
        /// <field>
        /// Called to determine if the Blank method can be executed.
        /// <br/>canExecute(msls.application.Settings screen)
        /// </field>
        Blank_canExecute: [lightSwitchApplication.Settings],
        /// <field>
        /// Called to execute the Blank method.
        /// <br/>execute(msls.application.Settings screen)
        /// </field>
        Blank_execute: [lightSwitchApplication.Settings],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Settings().findContentItem("Group"); }],
        /// <field>
        /// Called after the CourseStatuses content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CourseStatuses_postRender: [$element, function () { return new lightSwitchApplication.Settings().findContentItem("CourseStatuses"); }],
        /// <field>
        /// Called after the EmployeeGroups content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeGroups_postRender: [$element, function () { return new lightSwitchApplication.Settings().findContentItem("EmployeeGroups"); }],
        /// <field>
        /// Called after the Employees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employees_postRender: [$element, function () { return new lightSwitchApplication.Settings().findContentItem("Employees"); }],
        /// <field>
        /// Called after the JobRoles content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        JobRoles_postRender: [$element, function () { return new lightSwitchApplication.Settings().findContentItem("JobRoles"); }]
    });

}(msls.application));