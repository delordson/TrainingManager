/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function Course(entitySet) {
        /// <summary>
        /// Represents the Course entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this course.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this course.
        /// </field>
        /// <field name="CourseReference" type="String">
        /// Gets or sets the courseReference for this course.
        /// </field>
        /// <field name="CourseTitle" type="String">
        /// Gets or sets the courseTitle for this course.
        /// </field>
        /// <field name="CourseDescription" type="String">
        /// Gets or sets the courseDescription for this course.
        /// </field>
        /// <field name="CourseVersion" type="Number">
        /// Gets or sets the courseVersion for this course.
        /// </field>
        /// <field name="CourseStatus" type="msls.application.CourseStatus">
        /// Gets or sets the courseStatus for this course.
        /// </field>
        /// <field name="EmployeeGroupCourseAssignments" type="msls.EntityCollection" elementType="msls.application.EmployeeGroupCourseAssignment">
        /// Gets the employeeGroupCourseAssignments for this course.
        /// </field>
        /// <field name="EmployeeCourseAssignments" type="msls.EntityCollection" elementType="msls.application.EmployeeCourseAssignment">
        /// Gets the employeeCourseAssignments for this course.
        /// </field>
        /// <field name="JobRoleCourseAssignments" type="msls.EntityCollection" elementType="msls.application.JobRoleCourseAssignment">
        /// Gets the jobRoleCourseAssignments for this course.
        /// </field>
        /// <field name="EmployeeTrainingRecords" type="msls.EntityCollection" elementType="msls.application.EmployeeTrainingRecord">
        /// Gets the employeeTrainingRecords for this course.
        /// </field>
        /// <field name="TrainingSessions" type="msls.EntityCollection" elementType="msls.application.TrainingSession">
        /// Gets the trainingSessions for this course.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this course.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this course.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this course.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this course.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this course.
        /// </field>
        /// <field name="details" type="msls.application.Course.Details">
        /// Gets the details for this course.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function CourseStatus(entitySet) {
        /// <summary>
        /// Represents the CourseStatus entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this courseStatus.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this courseStatus.
        /// </field>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this courseStatus.
        /// </field>
        /// <field name="Courses" type="msls.EntityCollection" elementType="msls.application.Course">
        /// Gets the courses for this courseStatus.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this courseStatus.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this courseStatus.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this courseStatus.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this courseStatus.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this courseStatus.
        /// </field>
        /// <field name="details" type="msls.application.CourseStatus.Details">
        /// Gets the details for this courseStatus.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Employee(entitySet) {
        /// <summary>
        /// Represents the Employee entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this employee.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this employee.
        /// </field>
        /// <field name="LastName" type="String">
        /// Gets or sets the lastName for this employee.
        /// </field>
        /// <field name="FirstName" type="String">
        /// Gets or sets the firstName for this employee.
        /// </field>
        /// <field name="UserName" type="String">
        /// This is the user name of the 
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this employee.
        /// </field>
        /// <field name="Current" type="Boolean">
        /// Gets or sets the current for this employee.
        /// </field>
        /// <field name="EmployeeGroup" type="msls.application.EmployeeGroup">
        /// Gets or sets the employeeGroup for this employee.
        /// </field>
        /// <field name="EmployeeCourseAssignments" type="msls.EntityCollection" elementType="msls.application.EmployeeCourseAssignment">
        /// Gets the employeeCourseAssignments for this employee.
        /// </field>
        /// <field name="EmployeeJobRoles" type="msls.EntityCollection" elementType="msls.application.EmployeeJobRole">
        /// Gets the employeeJobRoles for this employee.
        /// </field>
        /// <field name="EmployeeTrainingRecords" type="msls.EntityCollection" elementType="msls.application.EmployeeTrainingRecord">
        /// Gets the employeeTrainingRecords for this employee.
        /// </field>
        /// <field name="TrainingSessions" type="msls.EntityCollection" elementType="msls.application.TrainingSession">
        /// Gets the trainingSessions for this employee.
        /// </field>
        /// <field name="TrainingSessionAttendees" type="msls.EntityCollection" elementType="msls.application.TrainingSessionAttendee">
        /// Gets the trainingSessionAttendees for this employee.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this employee.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this employee.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this employee.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this employee.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this employee.
        /// </field>
        /// <field name="details" type="msls.application.Employee.Details">
        /// Gets the details for this employee.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function EmployeeGroup(entitySet) {
        /// <summary>
        /// Represents the EmployeeGroup entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this employeeGroup.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this employeeGroup.
        /// </field>
        /// <field name="EmployeeGroupName" type="String">
        /// Gets or sets the employeeGroupName for this employeeGroup.
        /// </field>
        /// <field name="Employees" type="msls.EntityCollection" elementType="msls.application.Employee">
        /// Gets the employees for this employeeGroup.
        /// </field>
        /// <field name="EmployeeGroupCourseAssignments" type="msls.EntityCollection" elementType="msls.application.EmployeeGroupCourseAssignment">
        /// Gets the employeeGroupCourseAssignments for this employeeGroup.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this employeeGroup.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this employeeGroup.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this employeeGroup.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this employeeGroup.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this employeeGroup.
        /// </field>
        /// <field name="details" type="msls.application.EmployeeGroup.Details">
        /// Gets the details for this employeeGroup.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function EmployeeGroupCourseAssignment(entitySet) {
        /// <summary>
        /// Represents the EmployeeGroupCourseAssignment entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this employeeGroupCourseAssignment.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this employeeGroupCourseAssignment.
        /// </field>
        /// <field name="EmployeeGroup" type="msls.application.EmployeeGroup">
        /// Gets or sets the employeeGroup for this employeeGroupCourseAssignment.
        /// </field>
        /// <field name="Course" type="msls.application.Course">
        /// Gets or sets the course for this employeeGroupCourseAssignment.
        /// </field>
        /// <field name="DateAssigned" type="Date">
        /// Gets or sets the dateAssigned for this employeeGroupCourseAssignment.
        /// </field>
        /// <field name="TargetCompletionDate" type="Date">
        /// Gets or sets the targetCompletionDate for this employeeGroupCourseAssignment.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this employeeGroupCourseAssignment.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this employeeGroupCourseAssignment.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this employeeGroupCourseAssignment.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this employeeGroupCourseAssignment.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this employeeGroupCourseAssignment.
        /// </field>
        /// <field name="details" type="msls.application.EmployeeGroupCourseAssignment.Details">
        /// Gets the details for this employeeGroupCourseAssignment.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function EmployeeCourseAssignment(entitySet) {
        /// <summary>
        /// Represents the EmployeeCourseAssignment entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this employeeCourseAssignment.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this employeeCourseAssignment.
        /// </field>
        /// <field name="Course" type="msls.application.Course">
        /// Gets or sets the course for this employeeCourseAssignment.
        /// </field>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this employeeCourseAssignment.
        /// </field>
        /// <field name="DateAssigned" type="Date">
        /// Gets or sets the dateAssigned for this employeeCourseAssignment.
        /// </field>
        /// <field name="TargetCompletionDate" type="Date">
        /// Gets or sets the targetCompletionDate for this employeeCourseAssignment.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this employeeCourseAssignment.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this employeeCourseAssignment.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this employeeCourseAssignment.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this employeeCourseAssignment.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this employeeCourseAssignment.
        /// </field>
        /// <field name="details" type="msls.application.EmployeeCourseAssignment.Details">
        /// Gets the details for this employeeCourseAssignment.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function JobRole(entitySet) {
        /// <summary>
        /// Represents the JobRole entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this jobRole.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this jobRole.
        /// </field>
        /// <field name="JobRoleDescription" type="String">
        /// Gets or sets the jobRoleDescription for this jobRole.
        /// </field>
        /// <field name="EmployeeJobRoles" type="msls.EntityCollection" elementType="msls.application.EmployeeJobRole">
        /// Gets the employeeJobRoles for this jobRole.
        /// </field>
        /// <field name="JobRoleCourseAssignments" type="msls.EntityCollection" elementType="msls.application.JobRoleCourseAssignment">
        /// Gets the jobRoleCourseAssignments for this jobRole.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this jobRole.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this jobRole.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this jobRole.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this jobRole.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this jobRole.
        /// </field>
        /// <field name="details" type="msls.application.JobRole.Details">
        /// Gets the details for this jobRole.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function EmployeeJobRole(entitySet) {
        /// <summary>
        /// Represents the EmployeeJobRole entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this employeeJobRole.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this employeeJobRole.
        /// </field>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this employeeJobRole.
        /// </field>
        /// <field name="JobRole" type="msls.application.JobRole">
        /// Gets or sets the jobRole for this employeeJobRole.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this employeeJobRole.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this employeeJobRole.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this employeeJobRole.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this employeeJobRole.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this employeeJobRole.
        /// </field>
        /// <field name="details" type="msls.application.EmployeeJobRole.Details">
        /// Gets the details for this employeeJobRole.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function JobRoleCourseAssignment(entitySet) {
        /// <summary>
        /// Represents the JobRoleCourseAssignment entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this jobRoleCourseAssignment.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this jobRoleCourseAssignment.
        /// </field>
        /// <field name="JobRole" type="msls.application.JobRole">
        /// Gets or sets the jobRole for this jobRoleCourseAssignment.
        /// </field>
        /// <field name="Course" type="msls.application.Course">
        /// Gets or sets the course for this jobRoleCourseAssignment.
        /// </field>
        /// <field name="DateAssigned" type="Date">
        /// Gets or sets the dateAssigned for this jobRoleCourseAssignment.
        /// </field>
        /// <field name="TargetCompletionDate" type="Date">
        /// Gets or sets the targetCompletionDate for this jobRoleCourseAssignment.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this jobRoleCourseAssignment.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this jobRoleCourseAssignment.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this jobRoleCourseAssignment.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this jobRoleCourseAssignment.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this jobRoleCourseAssignment.
        /// </field>
        /// <field name="details" type="msls.application.JobRoleCourseAssignment.Details">
        /// Gets the details for this jobRoleCourseAssignment.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function EmployeeTrainingRecord(entitySet) {
        /// <summary>
        /// Represents the EmployeeTrainingRecord entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this employeeTrainingRecord.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this employeeTrainingRecord.
        /// </field>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this employeeTrainingRecord.
        /// </field>
        /// <field name="DateAssigned" type="Date">
        /// Gets or sets the dateAssigned for this employeeTrainingRecord.
        /// </field>
        /// <field name="TargetCompletionDate" type="Date">
        /// Gets or sets the targetCompletionDate for this employeeTrainingRecord.
        /// </field>
        /// <field name="DateTrainingCommenced" type="Date">
        /// Gets or sets the dateTrainingCommenced for this employeeTrainingRecord.
        /// </field>
        /// <field name="DateTrainingCompleted" type="Date">
        /// Gets or sets the dateTrainingCompleted for this employeeTrainingRecord.
        /// </field>
        /// <field name="Course" type="msls.application.Course">
        /// Gets or sets the course for this employeeTrainingRecord.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this employeeTrainingRecord.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this employeeTrainingRecord.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this employeeTrainingRecord.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this employeeTrainingRecord.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this employeeTrainingRecord.
        /// </field>
        /// <field name="details" type="msls.application.EmployeeTrainingRecord.Details">
        /// Gets the details for this employeeTrainingRecord.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TrainingSession(entitySet) {
        /// <summary>
        /// Represents the TrainingSession entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this trainingSession.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this trainingSession.
        /// </field>
        /// <field name="StartDate" type="Date">
        /// Gets or sets the startDate for this trainingSession.
        /// </field>
        /// <field name="EndDate" type="Date">
        /// Gets or sets the endDate for this trainingSession.
        /// </field>
        /// <field name="MaximumAttendees" type="Number">
        /// Gets or sets the maximumAttendees for this trainingSession.
        /// </field>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this trainingSession.
        /// </field>
        /// <field name="Course" type="msls.application.Course">
        /// Gets or sets the course for this trainingSession.
        /// </field>
        /// <field name="TrainingSessionAttendees" type="msls.EntityCollection" elementType="msls.application.TrainingSessionAttendee">
        /// Gets the trainingSessionAttendees for this trainingSession.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this trainingSession.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this trainingSession.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this trainingSession.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this trainingSession.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this trainingSession.
        /// </field>
        /// <field name="details" type="msls.application.TrainingSession.Details">
        /// Gets the details for this trainingSession.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TrainingSessionAttendee(entitySet) {
        /// <summary>
        /// Represents the TrainingSessionAttendee entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this trainingSessionAttendee.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this trainingSessionAttendee.
        /// </field>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this trainingSessionAttendee.
        /// </field>
        /// <field name="TrainingSession" type="msls.application.TrainingSession">
        /// Gets or sets the trainingSession for this trainingSessionAttendee.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this trainingSessionAttendee.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this trainingSessionAttendee.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this trainingSessionAttendee.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this trainingSessionAttendee.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this trainingSessionAttendee.
        /// </field>
        /// <field name="details" type="msls.application.TrainingSessionAttendee.Details">
        /// Gets the details for this trainingSessionAttendee.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Courses" type="msls.EntitySet">
        /// Gets the Courses entity set.
        /// </field>
        /// <field name="CourseStatuses" type="msls.EntitySet">
        /// Gets the CourseStatuses entity set.
        /// </field>
        /// <field name="Employees" type="msls.EntitySet">
        /// Gets the Employees entity set.
        /// </field>
        /// <field name="EmployeeGroups" type="msls.EntitySet">
        /// Gets the EmployeeGroups entity set.
        /// </field>
        /// <field name="EmployeeGroupCourseAssignments" type="msls.EntitySet">
        /// Gets the EmployeeGroupCourseAssignments entity set.
        /// </field>
        /// <field name="EmployeeCourseAssignments" type="msls.EntitySet">
        /// Gets the EmployeeCourseAssignments entity set.
        /// </field>
        /// <field name="JobRoles" type="msls.EntitySet">
        /// Gets the JobRoles entity set.
        /// </field>
        /// <field name="EmployeeJobRoles" type="msls.EntitySet">
        /// Gets the EmployeeJobRoles entity set.
        /// </field>
        /// <field name="JobRoleCourseAssignments" type="msls.EntitySet">
        /// Gets the JobRoleCourseAssignments entity set.
        /// </field>
        /// <field name="EmployeeTrainingRecords" type="msls.EntitySet">
        /// Gets the EmployeeTrainingRecords entity set.
        /// </field>
        /// <field name="TrainingSessions" type="msls.EntitySet">
        /// Gets the TrainingSessions entity set.
        /// </field>
        /// <field name="TrainingSessionAttendees" type="msls.EntitySet">
        /// Gets the TrainingSessionAttendees entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        Course: $defineEntity(Course, [
            { name: "Id", type: Number },
            { name: "CourseReference", type: String },
            { name: "CourseTitle", type: String },
            { name: "CourseDescription", type: String },
            { name: "CourseVersion", type: Number },
            { name: "CourseStatus", kind: "reference", type: CourseStatus },
            { name: "EmployeeGroupCourseAssignments", kind: "collection", elementType: EmployeeGroupCourseAssignment },
            { name: "EmployeeCourseAssignments", kind: "collection", elementType: EmployeeCourseAssignment },
            { name: "JobRoleCourseAssignments", kind: "collection", elementType: JobRoleCourseAssignment },
            { name: "EmployeeTrainingRecords", kind: "collection", elementType: EmployeeTrainingRecord },
            { name: "TrainingSessions", kind: "collection", elementType: TrainingSession },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        CourseStatus: $defineEntity(CourseStatus, [
            { name: "Id", type: Number },
            { name: "Status", type: String },
            { name: "Courses", kind: "collection", elementType: Course },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Employee: $defineEntity(Employee, [
            { name: "Id", type: Number },
            { name: "LastName", type: String },
            { name: "FirstName", type: String },
            { name: "UserName", type: String },
            { name: "Email", type: String },
            { name: "Current", type: Boolean },
            { name: "EmployeeGroup", kind: "reference", type: EmployeeGroup },
            { name: "EmployeeCourseAssignments", kind: "collection", elementType: EmployeeCourseAssignment },
            { name: "EmployeeJobRoles", kind: "collection", elementType: EmployeeJobRole },
            { name: "EmployeeTrainingRecords", kind: "collection", elementType: EmployeeTrainingRecord },
            { name: "TrainingSessions", kind: "collection", elementType: TrainingSession },
            { name: "TrainingSessionAttendees", kind: "collection", elementType: TrainingSessionAttendee },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        EmployeeGroup: $defineEntity(EmployeeGroup, [
            { name: "Id", type: Number },
            { name: "EmployeeGroupName", type: String },
            { name: "Employees", kind: "collection", elementType: Employee },
            { name: "EmployeeGroupCourseAssignments", kind: "collection", elementType: EmployeeGroupCourseAssignment },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        EmployeeGroupCourseAssignment: $defineEntity(EmployeeGroupCourseAssignment, [
            { name: "Id", type: Number },
            { name: "EmployeeGroup", kind: "reference", type: EmployeeGroup },
            { name: "Course", kind: "reference", type: Course },
            { name: "DateAssigned", type: Date },
            { name: "TargetCompletionDate", type: Date },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        EmployeeCourseAssignment: $defineEntity(EmployeeCourseAssignment, [
            { name: "Id", type: Number },
            { name: "Course", kind: "reference", type: Course },
            { name: "Employee", kind: "reference", type: Employee },
            { name: "DateAssigned", type: Date },
            { name: "TargetCompletionDate", type: Date },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        JobRole: $defineEntity(JobRole, [
            { name: "Id", type: Number },
            { name: "JobRoleDescription", type: String },
            { name: "EmployeeJobRoles", kind: "collection", elementType: EmployeeJobRole },
            { name: "JobRoleCourseAssignments", kind: "collection", elementType: JobRoleCourseAssignment },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        EmployeeJobRole: $defineEntity(EmployeeJobRole, [
            { name: "Id", type: Number },
            { name: "Employee", kind: "reference", type: Employee },
            { name: "JobRole", kind: "reference", type: JobRole },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        JobRoleCourseAssignment: $defineEntity(JobRoleCourseAssignment, [
            { name: "Id", type: Number },
            { name: "JobRole", kind: "reference", type: JobRole },
            { name: "Course", kind: "reference", type: Course },
            { name: "DateAssigned", type: Date },
            { name: "TargetCompletionDate", type: Date },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        EmployeeTrainingRecord: $defineEntity(EmployeeTrainingRecord, [
            { name: "Id", type: Number },
            { name: "Employee", kind: "reference", type: Employee },
            { name: "DateAssigned", type: Date },
            { name: "TargetCompletionDate", type: Date },
            { name: "DateTrainingCommenced", type: Date },
            { name: "DateTrainingCompleted", type: Date },
            { name: "Course", kind: "reference", type: Course },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        TrainingSession: $defineEntity(TrainingSession, [
            { name: "Id", type: Number },
            { name: "StartDate", type: Date },
            { name: "EndDate", type: Date },
            { name: "MaximumAttendees", type: Number },
            { name: "Employee", kind: "reference", type: Employee },
            { name: "Course", kind: "reference", type: Course },
            { name: "TrainingSessionAttendees", kind: "collection", elementType: TrainingSessionAttendee },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        TrainingSessionAttendee: $defineEntity(TrainingSessionAttendee, [
            { name: "Id", type: Number },
            { name: "Employee", kind: "reference", type: Employee },
            { name: "TrainingSession", kind: "reference", type: TrainingSession },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "Courses", elementType: Course },
            { name: "CourseStatuses", elementType: CourseStatus },
            { name: "Employees", elementType: Employee },
            { name: "EmployeeGroups", elementType: EmployeeGroup },
            { name: "EmployeeGroupCourseAssignments", elementType: EmployeeGroupCourseAssignment },
            { name: "EmployeeCourseAssignments", elementType: EmployeeCourseAssignment },
            { name: "JobRoles", elementType: JobRole },
            { name: "EmployeeJobRoles", elementType: EmployeeJobRole },
            { name: "JobRoleCourseAssignments", elementType: JobRoleCourseAssignment },
            { name: "EmployeeTrainingRecords", elementType: EmployeeTrainingRecord },
            { name: "TrainingSessions", elementType: TrainingSession },
            { name: "TrainingSessionAttendees", elementType: TrainingSessionAttendee }
        ], [
            {
                name: "Courses_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Courses },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Courses(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "CourseStatuses_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.CourseStatuses },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/CourseStatuses(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Employees_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Employees },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Employees(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "EmployeeGroups_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.EmployeeGroups },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/EmployeeGroups(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "EmployeeGroupCourseAssignments_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.EmployeeGroupCourseAssignments },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/EmployeeGroupCourseAssignments(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "EmployeeCourseAssignments_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.EmployeeCourseAssignments },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/EmployeeCourseAssignments(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "JobRoles_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.JobRoles },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/JobRoles(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "EmployeeJobRoles_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.EmployeeJobRoles },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/EmployeeJobRoles(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "JobRoleCourseAssignments_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.JobRoleCourseAssignments },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/JobRoleCourseAssignments(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "EmployeeTrainingRecords_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.EmployeeTrainingRecords },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/EmployeeTrainingRecords(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "TrainingSessions_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.TrainingSessions },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/TrainingSessions(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "TrainingSessionAttendees_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.TrainingSessionAttendees },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/TrainingSessionAttendees(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "MyCourses", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.Courses },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MyCourses()",
                        {
                        });
                }
            },
            {
                name: "MyTrainingRecords", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.EmployeeTrainingRecords },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MyTrainingRecords()",
                        {
                        });
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
