using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
using LightSwitchApplication.UserCode;
namespace LightSwitchApplication
{
    public partial class ApplicationDataService
    {
        partial void EmployeeGroupCourseAssignments_Validate(EmployeeGroupCourseAssignment entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.TargetCompletionDate != null & entity.DateAssigned != null)
            {
                if (entity.TargetCompletionDate < entity.DateAssigned)
                {
                    results.AddEntityError("The target date cannot be earlier than the assigned date");
                }
            }
        }

        partial void EmployeeCourseAssignments_Inserting(EmployeeCourseAssignment entity)
        {
            if (!entity.Employee.EmployeeTrainingRecords.Any(e => e.Course.Id == entity.Course.Id))
            {
                EmployeeTrainingRecord employeeTrainingRecord = this.DataWorkspace.ApplicationData.EmployeeTrainingRecords.AddNew();
                employeeTrainingRecord.Employee = entity.Employee;
                employeeTrainingRecord.Course = entity.Course;
                employeeTrainingRecord.DateAssigned = entity.DateAssigned;
                employeeTrainingRecord.TargetCompletionDate = entity.TargetCompletionDate;

                SendEmployeeTrainingRecordsInsertingEmail(employeeTrainingRecord);
            }
        }

        partial void EmployeeGroupCourseAssignments_Inserting(EmployeeGroupCourseAssignment entity)
        {
            var employees = this.DataWorkspace.ApplicationData.Employees.Where(employee => employee.EmployeeGroup.Id == entity.EmployeeGroup.Id).Execute();

            foreach (Employee employee in employees)
            {
                if (!employee.EmployeeTrainingRecords.Any(e => e.Course.Id == entity.Course.Id))
                {
                    EmployeeTrainingRecord employeeTrainingRecord = this.DataWorkspace.ApplicationData.EmployeeTrainingRecords.AddNew();
                    employeeTrainingRecord.Employee = employee;
                    employeeTrainingRecord.Course = entity.Course;
                    employeeTrainingRecord.DateAssigned = entity.DateAssigned;
                    employeeTrainingRecord.TargetCompletionDate = entity.TargetCompletionDate;

                    SendEmployeeTrainingRecordsInsertingEmail(employeeTrainingRecord);
                }
            }
        }

        partial void JobRoleCourseAssignments_Inserting(JobRoleCourseAssignment entity)
        {
            var employees = this.DataWorkspace.ApplicationData.Employees.Where(employee => employee.EmployeeJobRoles.Any(employeeJobRole => employeeJobRole.JobRole.Id == entity.JobRole.Id)).Execute();

            foreach (Employee employee in employees)
            {
                if (!employee.EmployeeTrainingRecords.Any(e => e.Course.Id == entity.Course.Id))
                {
                    EmployeeTrainingRecord employeeTrainingRecord = this.DataWorkspace.ApplicationData.EmployeeTrainingRecords.AddNew();
                    employeeTrainingRecord.Employee = employee;
                    employeeTrainingRecord.Course = entity.Course;
                    employeeTrainingRecord.DateAssigned = entity.DateAssigned;
                    employeeTrainingRecord.TargetCompletionDate = entity.TargetCompletionDate;

                    SendEmployeeTrainingRecordsInsertingEmail(employeeTrainingRecord);
                }
            }
        }

        partial void MyCourses_PreprocessQuery(ref IQueryable<Course> query)
        {
            query = from course in query
                    where course.EmployeeTrainingRecords.Any(e => e.Employee.UserName == this.Application.User.Name)
                    select course;
        }

        partial void MyTrainingRecords_PreprocessQuery(ref IQueryable<EmployeeTrainingRecord> query)
        {
            query = from trainingRecord in query
                    where trainingRecord.Employee.UserName == this.Application.User.Name
                    select trainingRecord;
        }

        partial void EmployeeCourseAssignments_Validate(EmployeeCourseAssignment entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.TargetCompletionDate != null & entity.DateAssigned != null)
            {
                if (entity.TargetCompletionDate < entity.DateAssigned)
                {
                    results.AddEntityError("The target date cannot be earlier than the assigned date");
                }
            }
        }

        partial void EmployeeTrainingRecords_Validate(EmployeeTrainingRecord entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.TargetCompletionDate != null & entity.DateAssigned != null)
            {
                if (entity.TargetCompletionDate < entity.DateAssigned)
                {
                    results.AddEntityError("The target date cannot be earlier than the assigned date");
                }
            }

            if (entity.DateTrainingCompleted != null & entity.DateTrainingCommenced != null)
            {
                if (entity.DateTrainingCompleted < entity.DateTrainingCommenced)
                {
                    results.AddEntityError("Training cannot be completed before it has commenced");
                }
            }
        }

        partial void JobRoleCourseAssignments_Validate(JobRoleCourseAssignment entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.TargetCompletionDate != null & entity.DateAssigned != null)
            {
                if (entity.TargetCompletionDate < entity.DateAssigned)
                {
                    results.AddEntityError("The target date cannot be earlier than the assigned date");
                }
            }
        }

        partial void TrainingSessions_Validate(TrainingSession entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.EndDate != null & entity.StartDate != null)
            {
                if (entity.EndDate < entity.StartDate)
                {
                    results.AddEntityError("The session cannot end before it has started");
                }
            }
        }

        partial void TrainingSessionAttendees_Validate(TrainingSessionAttendee entity, EntitySetValidationResultsBuilder results)
        {
            var session = this.DataWorkspace.ApplicationData.TrainingSessions.Where(s => s.Id == entity.TrainingSession.Id).FirstOrDefault();
            session.TrainingSessionAttendees.Count();


            if (session.MaximumAttendees < session.TrainingSessionAttendees.Count() + 1)
            {
                results.AddEntityError("The maximum number of attendees has been reached for this session.");
            }
        }

        partial void Courses_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditCourses);
        }

        partial void Courses_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditCourses);
        }

        partial void Courses_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditCourses);
        }

        partial void CourseStatuses_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditCourseStatuses);
        }

        partial void CourseStatuses_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditCourseStatuses);
        }

        partial void CourseStatuses_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditCourseStatuses);
        }

        partial void EmployeeCourseAssignments_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployeeCourseAssignments);
        }

        partial void EmployeeCourseAssignments_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployeeCourseAssignments);
        }

        partial void EmployeeCourseAssignments_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployeeCourseAssignments);
        }

        partial void EmployeeGroupCourseAssignments_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployeeGroupCourseAssignments);
        }

        partial void EmployeeGroupCourseAssignments_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployeeGroupCourseAssignments);
        }

        partial void EmployeeGroupCourseAssignments_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployeeGroupCourseAssignments);
        }

        partial void EmployeeGroups_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployeeGroups);
        }

        partial void EmployeeGroups_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployeeGroups);
        }

        partial void EmployeeGroups_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployeeGroups);
        }

        partial void EmployeeJobRoles_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployeeJobRoles);
        }

        partial void EmployeeJobRoles_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployeeJobRoles);
        }

        partial void EmployeeJobRoles_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployeeJobRoles);
        }

        partial void Employees_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void Employees_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void Employees_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void EmployeeTrainingRecords_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployeeTrainingRecords);
        }

        partial void EmployeeTrainingRecords_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployeeTrainingRecords);
        }

        partial void EmployeeTrainingRecords_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployeeTrainingRecords);
        }

        partial void JobRoleCourseAssignments_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditJobRoleCourseAssignments);
        }

        partial void JobRoleCourseAssignments_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditJobRoleCourseAssignments);
        }

        partial void JobRoleCourseAssignments_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditJobRoleCourseAssignments);
        }

        partial void JobRoles_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditJobRoles);
        }

        partial void JobRoles_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditJobRoles);
        }

        partial void JobRoles_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditJobRoles);
        }

        partial void TrainingSessionAttendees_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditTrainingSessionAttendees);
        }

        partial void TrainingSessionAttendees_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditTrainingSessionAttendees);
        }

        partial void TrainingSessionAttendees_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditTrainingSessionAttendees);
        }

        partial void TrainingSessions_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditTrainingSessions);
        }

        partial void TrainingSessions_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditTrainingSessions);
        }

        partial void TrainingSessions_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditTrainingSessions);
        }

        private void SendEmployeeTrainingRecordsInsertingEmail(EmployeeTrainingRecord entity)
        {
            if (entity.Employee.Email != string.Empty)
            {
                string subject = "New Training Assignment!";

                string message = string.Format("<html><body>Dear {0} {1}.<br></br><p>You have been assigned to the following training course:<br></br>Courses Reference: {2}.<br></br>Course Title: {3}.<br></br>Course Description: {4}.<br></br>The target date for you to complete this course is: {5}</p></body></html>", entity.Employee.FirstName, entity.Employee.LastName, entity.Course.CourseReference, entity.Course.CourseTitle, entity.Course.CourseDescription, entity.TargetCompletionDate);

                List<string> mailTos = new List<string>();

                mailTos.Add(entity.Employee.Email);

                SendEmail(mailTos, subject, message);
            }
        }

        private void SendEmail(List<string> mailTos, string subject, string message)
        {
            if (System.Net.NetworkInformation.NetworkInterface.GetIsNetworkAvailable())
            {
                if (mailTos.Count() != 0)
                {
                    MailHelper mailHelper = new MailHelper();

                    mailHelper.SendMail(mailTos, subject, message);
                }
            }
        }


    }
}
