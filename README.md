<h2>Training Manager</h2>
<a href="https://github.com/delordson/AuditManager/tree/master/Resources/TrainingAppHome.png"><img class="alignnone size-full wp-image-1672" title="TrainingAppHome" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/TrainingAppHome.png" width="602" height="386" /></a>

&nbsp;

The Training Manager App is a tool for managing internal employee training requirements. The Training Manager App allows organisation to define a series of training courses and then assign employees to those courses, offering them the opportunity to book training sessions and tracking training as it takes place.

This is a fully featured complete LightSwitch html5 line of business application which you can extend and adapt to your specific needs. The Training Manager demo can be accessed on windows azure at <a href="http://delordson.cloudapp.net/TrainingManagerApp/htmlclient/">http://delordson.cloudapp.net/TrainingManagerApp/htmlclient/</a>. To get the most out of the demo add yourself to the Employees table once you’ve logged in! Join the conversation by leaving a comment to this post for any suggestions of thought about the Training Manager App.


&nbsp;
<h2>Modules</h2>
The Training Manager App Home Page is laid out in two tabs, a Menu tab and a Settings tab. The Menu tab is used to access the primary modules which include the Manage Courses Module,  the My Courses Module, the All Training Records Module, the My Training Records Module and the Training Sessions Module. The settings tab is used to access the Employees, Employee Groups, Employee Job Roles as well as the Course Statuses.

&nbsp;

These modules are supported by a mature database schema…

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/TrainingAppSchema.png"><img class="alignnone size-full wp-image-1671" title="TrainingAppSchema" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/TrainingAppSchema.png" width="602" height="311" /></a>

&nbsp;

…and key validation and business rules. These include:

&nbsp;
<ul>
	<li>All Employees must belong to one and only one employee group</li>
	<li>An employee can have multiple job roles</li>
	<li>Employees can be assigned individually to training courses</li>
	<li>An Employee Group can also be assigned to a training course. When an Employee Group is assigned, all employees in that group are automatically assigned to the Course</li>
	<li>Finally a Job Role can be assigned to a training course. When a Job Role is assigned, all employees with that job role are automatically assigned to the course</li>
	<li>There is built in validation logic that prevents a training completion date from being set to a date earlier than the training commencement date</li>
	<li>An email is automatically sent to an employee as soon as they are assigned to a course</li>
	<li>A training record is created for an employee as soon as they are assigned to a course</li>
	<li>When assigning employee to course, a target completion date must be set</li>
	<li>It is not possible to set a training completion target that is earlier than the date training is assigned</li>
	<li>The course administrator can organise an unlimited number of training sessions for a course</li>
	<li>Validation logic does not allow a training session end date to be earlier than the start date</li>
	<li>Each session must have a max permitted number of attendees. Training Manager does not allow more students to be assigned than is set for course capacity</li>
</ul>
&nbsp;
<h2>Access</h2>
Access is controlled through a log in screen. The administrator uses an associated Silverlight application to configure new users, create roles and permissions for those roles as well as to assign users to roles.

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_191803.png"><img class="alignnone size-large wp-image-1621" title="screenshot_11122013_191803" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_191803-1024x575.png" width="700" height="393" /></a>
<h2></h2>
<h2>The Home Screen Menu Tab</h2>
Access to all the key users features of the Training Manager App is from the home page Menu Tab. From here, users can navigate to the ‘Manage Courses Module’, the ‘My Courses Module’, the ‘All Training Records Module’, the ‘My Training Records Module’ and the ‘Training Sessions Module’.

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192043.png"><img class="alignnone size-large wp-image-1623" title="screenshot_11122013_192043" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192043-1024x575.png" width="700" height="393" /></a>

&nbsp;
<h2>Manage Courses</h2>
Clicking or tabbing on the Manage Courses button takes the user to the ‘Browse Courses’ Page. On this page, the user of presented with a list of all Courses. A search box is present for quickly navigating to a required Course.

&nbsp;

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11162013_070146.png"><img class="alignnone size-large wp-image-1651" title="screenshot_11162013_070146" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11162013_070146-1024x575.png" width="700" height="393" /></a>

Clicking or tabbing on any Courses listed takes the user to a page for managing that Course. This page provides for full details of the Course, including status and version.

The page is laid out in a series of tabs. The first tab presents key information about the Course such as its reference code, title, description, version number and status.

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192254.png"><img class="alignnone size-large wp-image-1634" title="screenshot_11122013_192254" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192254-1024x575.png" width="700" height="393" /></a>

&nbsp;

Of course the built in LightSwitch validation of required fields and field lengths works great as expected…

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11162013_060309.png"><img class="alignnone size-large wp-image-1648" title="screenshot_11162013_060309" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11162013_060309-1024x575.png" width="700" height="393" /></a>

&nbsp;

…but we’ve also added business logic where it makes sense. So you can’t add employees to a training session if the maximum number of attendees has been reached for instance. More on this later.

&nbsp;

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192355.png"><img class="alignnone size-large wp-image-1641" title="screenshot_11122013_192355" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192355-1024x575.png" width="700" height="393" /></a>

&nbsp;

The Employees tab allows the user to assign individual Employees to a training course.

&nbsp;

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192302.png"><img class="alignnone size-large wp-image-1635" title="screenshot_11122013_192302" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192302-1024x575.png" width="700" height="393" /></a>

&nbsp;

Each employee can have multiple job roles. The Job Roles tab allows the user to assign a job role to a training course. When a Job Role is assigned, all Employees with that Job Role are automatically assigned to the course.

&nbsp;

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192306.png"><img class="alignnone size-large wp-image-1636" title="screenshot_11122013_192306" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192306-1024x575.png" width="700" height="393" /></a>

&nbsp;

Each Employee belongs to one and only one Employee Group. The Employee Groups tab allows the user to assign an employee group to a training course. When an Employee Group is assigned, all Employees with that job role are automatically assigned to the course.

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192310.png"><img class="alignnone size-large wp-image-1637" title="screenshot_11122013_192310" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192310-1024x575.png" width="700" height="393" /></a>

&nbsp;

All Employees who are assigned to a training course, whether assigned as individual Employees, through a Job Role or through an Employee Group, get an email alert.

&nbsp;

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/NewTrainingEmail.png"><img class="alignnone size-full wp-image-1670" title="NewTrainingEmail" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/NewTrainingEmail.png" width="602" height="352" /></a>

&nbsp;

Finally the Training Session tab allows the course administrator to lay on a number of sessions.

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192315.png"><img class="alignnone size-large wp-image-1638" title="screenshot_11122013_192315" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192315-1024x575.png" width="700" height="393" /></a>

&nbsp;

Clicking or tabbing on a session opens the Session details screen. This screen is laid out in two tabs. A details tab showing the start and end times as well as the max number of attendees…

&nbsp;

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192321.png"><img class="alignnone size-large wp-image-1639" title="screenshot_11122013_192321" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192321-1024x575.png" width="700" height="393" /></a>

&nbsp;

…and an Attendees tab used to book attendance.

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192327.png"><img class="alignnone size-large wp-image-1640" title="screenshot_11122013_192327" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192327-1024x575.png" width="700" height="393" /></a>

&nbsp;

Business rules prevent further Employees from booking if the maximum number of attendees has been reached.

&nbsp;

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192355.png"><img class="alignnone size-large wp-image-1641" title="screenshot_11122013_192355" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192355-1024x575.png" width="700" height="393" /></a>

&nbsp;

&nbsp;

My Courses

The My Courses Module presents a list of Courses that the logged in user has been assigned to.

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11162013_070153.png"><img class="alignnone size-large wp-image-1652" title="screenshot_11162013_070153" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11162013_070153-1024x575.png" width="700" height="393" /></a>

&nbsp;

Clicking or tabbing on any of these courses takes the user to the same course details screen described above…

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192210.png"><img class="alignnone size-large wp-image-1633" title="screenshot_11122013_192210" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192210-1024x575.png" width="700" height="393" /></a>

&nbsp;

&nbsp;
<h2>All Training Records</h2>
The All Training Records module provides a list of all training records in the application. A training record is created by the system each time an Employee is assigned to a training courses. This is the case whether the Employee is assigned directly or is assigned through a Job Role or through their Employee Group.

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11162013_071008.png"><img class="alignnone size-large wp-image-1653" title="screenshot_11162013_071008" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11162013_071008-1024x575.png" width="700" height="393" /></a>

&nbsp;

Clicking or tabbing on any of these opens an edit screen allowing the user to record training details.

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11162013_072606.png"><img class="alignnone size-large wp-image-1657" title="screenshot_11162013_072606" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11162013_072606-1024x575.png" width="700" height="393" /></a>

&nbsp;
<h2></h2>
<h2>My Training Records</h2>
The My training Records module provides a list of all training record for the logged in user.

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11162013_072544.png"><img class="alignnone size-large wp-image-1655" title="screenshot_11162013_072544" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11162013_072544-1024x575.png" width="700" height="393" /></a>

&nbsp;

&nbsp;

Clicking or tabbing on any of these opens the same edit screen described above.

&nbsp;
<h2>Training Sessions</h2>
The Training Sessions module provides a top level list of all training sessions across all training courses allowing the user to quickly browse to a required session.

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11162013_072550.png"><img class="alignnone size-large wp-image-1656" title="screenshot_11162013_072550" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11162013_072550-1024x575.png" width="700" height="393" /></a>

&nbsp;

Clicking or tabbing on any of these finding actions opens a the same Training Session details screen shown earlier.

&nbsp;
<h2>Settings</h2>
The Settings Module is the key module used by the administrator and any other users given the right permissions for managing key application reference data. The Settings module is accessed by clicking or tabbing on the Settings tab on the home page. This takes the user to the settings page.

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192050.png"><img class="alignnone size-large wp-image-1624" title="screenshot_11122013_192050" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192050-1024x575.png" width="700" height="393" /></a>

&nbsp;

The main items managed are the Course Statuses, the Employees Groups, Employees and Job Roles.

&nbsp;

<strong>Course Statuses</strong>

&nbsp;

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192101.png"><img class="alignnone size-large wp-image-1625" title="screenshot_11122013_192101" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192101-1024x575.png" width="700" height="393" /></a>

&nbsp;

<strong>Employee Groups</strong>

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192107.png"><img class="alignnone size-large wp-image-1626" title="screenshot_11122013_192107" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192107-1024x575.png" width="700" height="393" /></a>

&nbsp;

<strong>Job Roles</strong>

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192114.png"><img class="alignnone size-large wp-image-1627" title="screenshot_11122013_192114" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192114-1024x575.png" width="700" height="393" /></a>

&nbsp;

<strong>Employees</strong>

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11162013_073443.png"><img class="alignnone size-large wp-image-1658" title="screenshot_11162013_073443" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11162013_073443-1024x575.png" width="700" height="393" /></a>

&nbsp;

Clicking or tabbing on an employee takes the user to the Employee details screen. The screen is laid out in two tabs. A details tab and a Job Roles tab. The details tab shows the Employee name as well as the Employee Group they belong to.

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192130.png"><img class="alignnone size-large wp-image-1629" title="screenshot_11122013_192130" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192130-1024x575.png" width="700" height="393" /></a>

&nbsp;

An Employee can only belong to a single Employee Group…

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192139.png"><img class="alignnone size-large wp-image-1630" title="screenshot_11122013_192139" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192139-1024x575.png" width="700" height="393" /></a>

&nbsp;

The Job Roles tab show the list of Job Roles the Employee has. An Employee can have multiple Job Roles…

<a href="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192143.png"><img class="alignnone size-large wp-image-1631" title="screenshot_11122013_192143" alt="" src="https://github.com/delordson/AuditManager/tree/master/Resources/screenshot_11122013_192143-1024x575.png" width="700" height="393" /></a>

&nbsp;
<h2>Summary</h2>
The Training Manager App is a fully featured complete LightSwitch html5 line of business application which you can extend and adapt to your specific needs. Don’t forget to try out the demo on windows azure at <a href="http://delordson.cloudapp.net/TrainingManagerApp/htmlclient/">http://delordson.cloudapp.net/TrainingManagerApp/htmlclient/</a>. To get the most out of the demo add yourself to the Employees table once you’ve logged in. Finally please join the conversation by leaving a comment to this post for any suggestions of thoughts.
