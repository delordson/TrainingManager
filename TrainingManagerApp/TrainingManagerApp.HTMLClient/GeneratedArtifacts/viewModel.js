/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditCourse(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditCourse screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Course" type="msls.application.Course">
        /// Gets or sets the course for this screen.
        /// </field>
        /// <field name="EmployeeGroupCourseAssignments" type="msls.VisualCollection" elementType="msls.application.EmployeeGroupCourseAssignment">
        /// Gets the employeeGroupCourseAssignments for this screen.
        /// </field>
        /// <field name="EmployeeCourseAssignments" type="msls.VisualCollection" elementType="msls.application.EmployeeCourseAssignment">
        /// Gets the employeeCourseAssignments for this screen.
        /// </field>
        /// <field name="JobRoleCourseAssignments" type="msls.VisualCollection" elementType="msls.application.JobRoleCourseAssignment">
        /// Gets the jobRoleCourseAssignments for this screen.
        /// </field>
        /// <field name="TrainingSessions" type="msls.VisualCollection" elementType="msls.application.TrainingSession">
        /// Gets the trainingSessions for this screen.
        /// </field>
        /// <field name="EmployeeTrainingRecords" type="msls.VisualCollection" elementType="msls.application.EmployeeTrainingRecord">
        /// Gets the employeeTrainingRecords for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditCourse.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditCourse", parameters);
    }

    function AddEditCourseStatus(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditCourseStatus screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="CourseStatus" type="msls.application.CourseStatus">
        /// Gets or sets the courseStatus for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditCourseStatus.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditCourseStatus", parameters);
    }

    function AddEditEmployee(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditEmployee screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this screen.
        /// </field>
        /// <field name="EmployeeJobRoles" type="msls.VisualCollection" elementType="msls.application.EmployeeJobRole">
        /// Gets the employeeJobRoles for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditEmployee.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditEmployee", parameters);
    }

    function AddEditEmployeeCourseAssignment(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditEmployeeCourseAssignment screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EmployeeCourseAssignment" type="msls.application.EmployeeCourseAssignment">
        /// Gets or sets the employeeCourseAssignment for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditEmployeeCourseAssignment.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditEmployeeCourseAssignment", parameters);
    }

    function AddEditEmployeeGroup(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditEmployeeGroup screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EmployeeGroup" type="msls.application.EmployeeGroup">
        /// Gets or sets the employeeGroup for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditEmployeeGroup.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditEmployeeGroup", parameters);
    }

    function AddEditEmployeeGroupCourseAssignment(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditEmployeeGroupCourseAssignment screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EmployeeGroupCourseAssignment" type="msls.application.EmployeeGroupCourseAssignment">
        /// Gets or sets the employeeGroupCourseAssignment for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditEmployeeGroupCourseAssignment.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditEmployeeGroupCourseAssignment", parameters);
    }

    function AddEditEmployeeJobRole(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditEmployeeJobRole screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EmployeeJobRole" type="msls.application.EmployeeJobRole">
        /// Gets or sets the employeeJobRole for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditEmployeeJobRole.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditEmployeeJobRole", parameters);
    }

    function AddEditEmployeeTrainingRecord(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditEmployeeTrainingRecord screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EmployeeTrainingRecord" type="msls.application.EmployeeTrainingRecord">
        /// Gets or sets the employeeTrainingRecord for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditEmployeeTrainingRecord.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditEmployeeTrainingRecord", parameters);
    }

    function AddEditJobRole(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditJobRole screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="JobRole" type="msls.application.JobRole">
        /// Gets or sets the jobRole for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditJobRole.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditJobRole", parameters);
    }

    function AddEditJobRoleCourseAssignment(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditJobRoleCourseAssignment screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="JobRoleCourseAssignment" type="msls.application.JobRoleCourseAssignment">
        /// Gets or sets the jobRoleCourseAssignment for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditJobRoleCourseAssignment.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditJobRoleCourseAssignment", parameters);
    }

    function AddEditTrainingSession(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditTrainingSession screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TrainingSession" type="msls.application.TrainingSession">
        /// Gets or sets the trainingSession for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditTrainingSession.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditTrainingSession", parameters);
    }

    function AddEditTrainingSessionAndAttendees(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditTrainingSessionAndAttendees screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TrainingSession" type="msls.application.TrainingSession">
        /// Gets or sets the trainingSession for this screen.
        /// </field>
        /// <field name="TrainingSessionAttendees" type="msls.VisualCollection" elementType="msls.application.TrainingSessionAttendee">
        /// Gets the trainingSessionAttendees for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditTrainingSessionAndAttendees.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditTrainingSessionAndAttendees", parameters);
    }

    function AddEditTrainingSessionAttendee(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditTrainingSessionAttendee screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TrainingSessionAttendee" type="msls.application.TrainingSessionAttendee">
        /// Gets or sets the trainingSessionAttendee for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditTrainingSessionAttendee.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditTrainingSessionAttendee", parameters);
    }

    function BrowseCourses(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseCourses screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Courses" type="msls.VisualCollection" elementType="msls.application.Course">
        /// Gets the courses for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseCourses.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseCourses", parameters);
    }

    function BrowseCourseStatuses(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseCourseStatuses screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="CourseStatuses" type="msls.VisualCollection" elementType="msls.application.CourseStatus">
        /// Gets the courseStatuses for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseCourseStatuses.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseCourseStatuses", parameters);
    }

    function BrowseEmployeeGroups(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseEmployeeGroups screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EmployeeGroups" type="msls.VisualCollection" elementType="msls.application.EmployeeGroup">
        /// Gets the employeeGroups for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseEmployeeGroups.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseEmployeeGroups", parameters);
    }

    function BrowseEmployees(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseEmployees screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Employees" type="msls.VisualCollection" elementType="msls.application.Employee">
        /// Gets the employees for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseEmployees.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseEmployees", parameters);
    }

    function BrowseEmployeeTrainingRecords(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseEmployeeTrainingRecords screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EmployeeTrainingRecords" type="msls.VisualCollection" elementType="msls.application.EmployeeTrainingRecord">
        /// Gets the employeeTrainingRecords for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseEmployeeTrainingRecords.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseEmployeeTrainingRecords", parameters);
    }

    function BrowseJobRoles(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseJobRoles screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="JobRoles" type="msls.VisualCollection" elementType="msls.application.JobRole">
        /// Gets the jobRoles for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseJobRoles.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseJobRoles", parameters);
    }

    function BrowseMyCourses(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseMyCourses screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="MyCourses" type="msls.VisualCollection" elementType="msls.application.Course">
        /// Gets the myCourses for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseMyCourses.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseMyCourses", parameters);
    }

    function BrowseMyTrainingRecords(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseMyTrainingRecords screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="MyTrainingRecords" type="msls.VisualCollection" elementType="msls.application.EmployeeTrainingRecord">
        /// Gets the myTrainingRecords for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseMyTrainingRecords.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseMyTrainingRecords", parameters);
    }

    function BrowseTrainingSessions(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseTrainingSessions screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TrainingSessions" type="msls.VisualCollection" elementType="msls.application.TrainingSession">
        /// Gets the trainingSessions for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTrainingSessions.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTrainingSessions", parameters);
    }

    function Home(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Home screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.Home.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Home", parameters);
    }

    function MobileHome(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the MobileHome screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.MobileHome.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "MobileHome", parameters);
    }

    function Settings(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Settings screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.Settings.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Settings", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditCourse: $defineScreen(AddEditCourse, [
            { name: "Course", kind: "local", type: lightSwitchApplication.Course },
            {
                name: "EmployeeGroupCourseAssignments", kind: "collection", elementType: lightSwitchApplication.EmployeeGroupCourseAssignment,
                getNavigationProperty: function () {
                    if (this.owner.Course) {
                        return this.owner.Course.details.properties.EmployeeGroupCourseAssignments;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("EmployeeGroup");
                }
            },
            {
                name: "EmployeeCourseAssignments", kind: "collection", elementType: lightSwitchApplication.EmployeeCourseAssignment,
                getNavigationProperty: function () {
                    if (this.owner.Course) {
                        return this.owner.Course.details.properties.EmployeeCourseAssignments;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Employee");
                }
            },
            {
                name: "JobRoleCourseAssignments", kind: "collection", elementType: lightSwitchApplication.JobRoleCourseAssignment,
                getNavigationProperty: function () {
                    if (this.owner.Course) {
                        return this.owner.Course.details.properties.JobRoleCourseAssignments;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("JobRole");
                }
            },
            {
                name: "TrainingSessions", kind: "collection", elementType: lightSwitchApplication.TrainingSession,
                getNavigationProperty: function () {
                    if (this.owner.Course) {
                        return this.owner.Course.details.properties.TrainingSessions;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Employee");
                }
            },
            {
                name: "EmployeeTrainingRecords", kind: "collection", elementType: lightSwitchApplication.EmployeeTrainingRecord,
                getNavigationProperty: function () {
                    if (this.owner.Course) {
                        return this.owner.Course.details.properties.EmployeeTrainingRecords;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        AddEditCourseStatus: $defineScreen(AddEditCourseStatus, [
            { name: "CourseStatus", kind: "local", type: lightSwitchApplication.CourseStatus }
        ], [
        ]),

        AddEditEmployee: $defineScreen(AddEditEmployee, [
            { name: "Employee", kind: "local", type: lightSwitchApplication.Employee },
            {
                name: "EmployeeJobRoles", kind: "collection", elementType: lightSwitchApplication.EmployeeJobRole,
                getNavigationProperty: function () {
                    if (this.owner.Employee) {
                        return this.owner.Employee.details.properties.EmployeeJobRoles;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.orderBy("JobRole/JobRoleDescription").expand("JobRole");
                }
            }
        ], [
        ]),

        AddEditEmployeeCourseAssignment: $defineScreen(AddEditEmployeeCourseAssignment, [
            { name: "EmployeeCourseAssignment", kind: "local", type: lightSwitchApplication.EmployeeCourseAssignment }
        ], [
        ]),

        AddEditEmployeeGroup: $defineScreen(AddEditEmployeeGroup, [
            { name: "EmployeeGroup", kind: "local", type: lightSwitchApplication.EmployeeGroup }
        ], [
        ]),

        AddEditEmployeeGroupCourseAssignment: $defineScreen(AddEditEmployeeGroupCourseAssignment, [
            { name: "EmployeeGroupCourseAssignment", kind: "local", type: lightSwitchApplication.EmployeeGroupCourseAssignment }
        ], [
        ]),

        AddEditEmployeeJobRole: $defineScreen(AddEditEmployeeJobRole, [
            { name: "EmployeeJobRole", kind: "local", type: lightSwitchApplication.EmployeeJobRole }
        ], [
        ]),

        AddEditEmployeeTrainingRecord: $defineScreen(AddEditEmployeeTrainingRecord, [
            { name: "EmployeeTrainingRecord", kind: "local", type: lightSwitchApplication.EmployeeTrainingRecord }
        ], [
        ]),

        AddEditJobRole: $defineScreen(AddEditJobRole, [
            { name: "JobRole", kind: "local", type: lightSwitchApplication.JobRole }
        ], [
        ]),

        AddEditJobRoleCourseAssignment: $defineScreen(AddEditJobRoleCourseAssignment, [
            { name: "JobRoleCourseAssignment", kind: "local", type: lightSwitchApplication.JobRoleCourseAssignment }
        ], [
        ]),

        AddEditTrainingSession: $defineScreen(AddEditTrainingSession, [
            { name: "TrainingSession", kind: "local", type: lightSwitchApplication.TrainingSession }
        ], [
        ]),

        AddEditTrainingSessionAndAttendees: $defineScreen(AddEditTrainingSessionAndAttendees, [
            { name: "TrainingSession", kind: "local", type: lightSwitchApplication.TrainingSession },
            {
                name: "TrainingSessionAttendees", kind: "collection", elementType: lightSwitchApplication.TrainingSessionAttendee,
                getNavigationProperty: function () {
                    if (this.owner.TrainingSession) {
                        return this.owner.TrainingSession.details.properties.TrainingSessionAttendees;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Employee");
                }
            }
        ], [
        ]),

        AddEditTrainingSessionAttendee: $defineScreen(AddEditTrainingSessionAttendee, [
            { name: "TrainingSessionAttendee", kind: "local", type: lightSwitchApplication.TrainingSessionAttendee }
        ], [
        ]),

        BrowseCourses: $defineScreen(BrowseCourses, [
            {
                name: "Courses", kind: "collection", elementType: lightSwitchApplication.Course,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.Courses.filter("((" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", CourseReference)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", CourseTitle)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", CourseDescription)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", CourseStatus/Status)") + "").orderBy("CourseReference").thenBy("CourseVersion").expand("CourseStatus");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseCourseStatuses: $defineScreen(BrowseCourseStatuses, [
            {
                name: "CourseStatuses", kind: "collection", elementType: lightSwitchApplication.CourseStatus,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.CourseStatuses.orderBy("Status");
                }
            }
        ], [
        ]),

        BrowseEmployeeGroups: $defineScreen(BrowseEmployeeGroups, [
            {
                name: "EmployeeGroups", kind: "collection", elementType: lightSwitchApplication.EmployeeGroup,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.EmployeeGroups.orderBy("EmployeeGroupName");
                }
            }
        ], [
        ]),

        BrowseEmployees: $defineScreen(BrowseEmployees, [
            {
                name: "Employees", kind: "collection", elementType: lightSwitchApplication.Employee,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.Employees.filter("((" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", FirstName)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", LastName)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Email)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", UserName)") + "").orderBy("LastName").thenBy("FirstName").expand("EmployeeGroup");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseEmployeeTrainingRecords: $defineScreen(BrowseEmployeeTrainingRecords, [
            {
                name: "EmployeeTrainingRecords", kind: "collection", elementType: lightSwitchApplication.EmployeeTrainingRecord,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.EmployeeTrainingRecords.filter("((((" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Employee/FirstName)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Employee/LastName)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Employee/UserName)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Course/CourseReference)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Course/CourseTitle)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Course/CourseDescription)") + "").expand("Course").expand("Employee");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseJobRoles: $defineScreen(BrowseJobRoles, [
            {
                name: "JobRoles", kind: "collection", elementType: lightSwitchApplication.JobRole,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.JobRoles.orderBy("JobRoleDescription");
                }
            }
        ], [
        ]),

        BrowseMyCourses: $defineScreen(BrowseMyCourses, [
            {
                name: "MyCourses", kind: "collection", elementType: lightSwitchApplication.Course,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.MyCourses().filter("((" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", CourseReference)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", CourseTitle)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", CourseDescription)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", CourseStatus/Status)") + "").expand("CourseStatus");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseMyTrainingRecords: $defineScreen(BrowseMyTrainingRecords, [
            {
                name: "MyTrainingRecords", kind: "collection", elementType: lightSwitchApplication.EmployeeTrainingRecord,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.MyTrainingRecords().filter("(" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Course/CourseReference)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Course/CourseTitle)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Course/CourseDescription)") + "").expand("Course");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseTrainingSessions: $defineScreen(BrowseTrainingSessions, [
            {
                name: "TrainingSessions", kind: "collection", elementType: lightSwitchApplication.TrainingSession,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.TrainingSessions.filter("(" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Course/CourseReference)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Course/CourseTitle)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Course/CourseDescription)") + "").expand("Course").expand("Employee");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        Home: $defineScreen(Home, [
        ], [
        ]),

        MobileHome: $defineScreen(MobileHome, [
        ], [
        ]),

        Settings: $defineScreen(Settings, [
        ], [
            { name: "Blank" }
        ]),

        showAddEditCourse: $defineShowScreen(function showAddEditCourse(Course, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditCourse screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditCourse", parameters, options);
        }),

        showAddEditCourseStatus: $defineShowScreen(function showAddEditCourseStatus(CourseStatus, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditCourseStatus screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditCourseStatus", parameters, options);
        }),

        showAddEditEmployee: $defineShowScreen(function showAddEditEmployee(Employee, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditEmployee screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditEmployee", parameters, options);
        }),

        showAddEditEmployeeCourseAssignment: $defineShowScreen(function showAddEditEmployeeCourseAssignment(EmployeeCourseAssignment, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditEmployeeCourseAssignment screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditEmployeeCourseAssignment", parameters, options);
        }),

        showAddEditEmployeeGroup: $defineShowScreen(function showAddEditEmployeeGroup(EmployeeGroup, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditEmployeeGroup screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditEmployeeGroup", parameters, options);
        }),

        showAddEditEmployeeGroupCourseAssignment: $defineShowScreen(function showAddEditEmployeeGroupCourseAssignment(EmployeeGroupCourseAssignment, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditEmployeeGroupCourseAssignment screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditEmployeeGroupCourseAssignment", parameters, options);
        }),

        showAddEditEmployeeJobRole: $defineShowScreen(function showAddEditEmployeeJobRole(EmployeeJobRole, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditEmployeeJobRole screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditEmployeeJobRole", parameters, options);
        }),

        showAddEditEmployeeTrainingRecord: $defineShowScreen(function showAddEditEmployeeTrainingRecord(EmployeeTrainingRecord, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditEmployeeTrainingRecord screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditEmployeeTrainingRecord", parameters, options);
        }),

        showAddEditJobRole: $defineShowScreen(function showAddEditJobRole(JobRole, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditJobRole screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditJobRole", parameters, options);
        }),

        showAddEditJobRoleCourseAssignment: $defineShowScreen(function showAddEditJobRoleCourseAssignment(JobRoleCourseAssignment, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditJobRoleCourseAssignment screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditJobRoleCourseAssignment", parameters, options);
        }),

        showAddEditTrainingSession: $defineShowScreen(function showAddEditTrainingSession(TrainingSession, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditTrainingSession screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditTrainingSession", parameters, options);
        }),

        showAddEditTrainingSessionAndAttendees: $defineShowScreen(function showAddEditTrainingSessionAndAttendees(TrainingSession, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditTrainingSessionAndAttendees screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditTrainingSessionAndAttendees", parameters, options);
        }),

        showAddEditTrainingSessionAttendee: $defineShowScreen(function showAddEditTrainingSessionAttendee(TrainingSessionAttendee, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditTrainingSessionAttendee screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditTrainingSessionAttendee", parameters, options);
        }),

        showBrowseCourses: $defineShowScreen(function showBrowseCourses(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseCourses screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseCourses", parameters, options);
        }),

        showBrowseCourseStatuses: $defineShowScreen(function showBrowseCourseStatuses(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseCourseStatuses screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseCourseStatuses", parameters, options);
        }),

        showBrowseEmployeeGroups: $defineShowScreen(function showBrowseEmployeeGroups(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseEmployeeGroups screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseEmployeeGroups", parameters, options);
        }),

        showBrowseEmployees: $defineShowScreen(function showBrowseEmployees(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseEmployees screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseEmployees", parameters, options);
        }),

        showBrowseEmployeeTrainingRecords: $defineShowScreen(function showBrowseEmployeeTrainingRecords(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseEmployeeTrainingRecords screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseEmployeeTrainingRecords", parameters, options);
        }),

        showBrowseJobRoles: $defineShowScreen(function showBrowseJobRoles(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseJobRoles screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseJobRoles", parameters, options);
        }),

        showBrowseMyCourses: $defineShowScreen(function showBrowseMyCourses(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseMyCourses screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseMyCourses", parameters, options);
        }),

        showBrowseMyTrainingRecords: $defineShowScreen(function showBrowseMyTrainingRecords(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseMyTrainingRecords screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseMyTrainingRecords", parameters, options);
        }),

        showBrowseTrainingSessions: $defineShowScreen(function showBrowseTrainingSessions(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseTrainingSessions screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseTrainingSessions", parameters, options);
        }),

        showHome: $defineShowScreen(function showHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Home screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Home", parameters, options);
        }),

        showMobileHome: $defineShowScreen(function showMobileHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the MobileHome screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("MobileHome", parameters, options);
        }),

        showSettings: $defineShowScreen(function showSettings(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Settings screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Settings", parameters, options);
        })

    });

}(msls.application));
