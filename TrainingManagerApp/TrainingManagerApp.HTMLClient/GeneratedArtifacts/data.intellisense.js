/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.Course, {
        /// <field>
        /// Called when a new course is created.
        /// <br/>created(msls.application.Course entity)
        /// </field>
        created: [lightSwitchApplication.Course]
    });

    msls._addEntryPoints(lightSwitchApplication.CourseStatus, {
        /// <field>
        /// Called when a new courseStatus is created.
        /// <br/>created(msls.application.CourseStatus entity)
        /// </field>
        created: [lightSwitchApplication.CourseStatus]
    });

    msls._addEntryPoints(lightSwitchApplication.Employee, {
        /// <field>
        /// Called when a new employee is created.
        /// <br/>created(msls.application.Employee entity)
        /// </field>
        created: [lightSwitchApplication.Employee]
    });

    msls._addEntryPoints(lightSwitchApplication.EmployeeGroup, {
        /// <field>
        /// Called when a new employeeGroup is created.
        /// <br/>created(msls.application.EmployeeGroup entity)
        /// </field>
        created: [lightSwitchApplication.EmployeeGroup]
    });

    msls._addEntryPoints(lightSwitchApplication.EmployeeGroupCourseAssignment, {
        /// <field>
        /// Called when a new employeeGroupCourseAssignment is created.
        /// <br/>created(msls.application.EmployeeGroupCourseAssignment entity)
        /// </field>
        created: [lightSwitchApplication.EmployeeGroupCourseAssignment]
    });

    msls._addEntryPoints(lightSwitchApplication.EmployeeCourseAssignment, {
        /// <field>
        /// Called when a new employeeCourseAssignment is created.
        /// <br/>created(msls.application.EmployeeCourseAssignment entity)
        /// </field>
        created: [lightSwitchApplication.EmployeeCourseAssignment]
    });

    msls._addEntryPoints(lightSwitchApplication.JobRole, {
        /// <field>
        /// Called when a new jobRole is created.
        /// <br/>created(msls.application.JobRole entity)
        /// </field>
        created: [lightSwitchApplication.JobRole]
    });

    msls._addEntryPoints(lightSwitchApplication.EmployeeJobRole, {
        /// <field>
        /// Called when a new employeeJobRole is created.
        /// <br/>created(msls.application.EmployeeJobRole entity)
        /// </field>
        created: [lightSwitchApplication.EmployeeJobRole]
    });

    msls._addEntryPoints(lightSwitchApplication.JobRoleCourseAssignment, {
        /// <field>
        /// Called when a new jobRoleCourseAssignment is created.
        /// <br/>created(msls.application.JobRoleCourseAssignment entity)
        /// </field>
        created: [lightSwitchApplication.JobRoleCourseAssignment]
    });

    msls._addEntryPoints(lightSwitchApplication.EmployeeTrainingRecord, {
        /// <field>
        /// Called when a new employeeTrainingRecord is created.
        /// <br/>created(msls.application.EmployeeTrainingRecord entity)
        /// </field>
        created: [lightSwitchApplication.EmployeeTrainingRecord]
    });

    msls._addEntryPoints(lightSwitchApplication.TrainingSession, {
        /// <field>
        /// Called when a new trainingSession is created.
        /// <br/>created(msls.application.TrainingSession entity)
        /// </field>
        created: [lightSwitchApplication.TrainingSession]
    });

    msls._addEntryPoints(lightSwitchApplication.TrainingSessionAttendee, {
        /// <field>
        /// Called when a new trainingSessionAttendee is created.
        /// <br/>created(msls.application.TrainingSessionAttendee entity)
        /// </field>
        created: [lightSwitchApplication.TrainingSessionAttendee]
    });

}(msls.application));
