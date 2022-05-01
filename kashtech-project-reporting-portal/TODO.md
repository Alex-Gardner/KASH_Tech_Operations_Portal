# Building KASH Tech Project Reporting Application

Goal: login to reporting portal from main site

2 Levels of Security

- Admin
- Employees

## 4(5) Main Screens

### Login Screen

### Consultant/Employee Details

    Email
    Phone #
    Location

    Item List:
    Employee ID
    Employee Name
    Email
    Phone #
    Location
    List of Projects

### Client Detail

    Client Name
    Client Location
    Type of Project (List of Projects?)

    * Nice to Haves?
        Primary/Secondary Contacts for Client

    Item List:
    Client ID
    Client Name
    Client Location
    Primary Contact
    List of Projects

### Time Sheet With Status

    Boxes for Days of Work
        Mon - Sun
        - Billable
        - Non-billable
        - Status for each day (Status options?)
        - Get employee name from login

        - React calendar component?

    Ideas:
        [Calendar Dashboard](https://dribbble.com/shots/14136522-HRMS-Dashboard)
        [Timesheet with Date Picker](https://dribbble.com/shots/7364915-Timesheet-App-Design)

### Statement of Work Detail

    - Client Name
    - Project
    - Start Date
    - End Date
    - Total Hours (e.g 320 Hours)
    - List of Consultants on Project
        - Consultant Name
        - Consultant Rate

    * Nice to Haves?
        Primary Contact

    Item list:
        SoW ID
        Company Name
        Project Category
        Original Start Date
        Original End Date
        Total (Projected) Hours
        List of Consultants Assigned
        Primary Liaison
        Current Status

Weekly Report, Monthly Report, Status Report

- By Consultant
- By Client

Main Webfocus Workspace > KASH Operations > FOCEXEC Table

Login Page - Log in to view app properties

Current Status as a dropdown?
Master File Schema?

Company Table:
Company ID (Internal measure)
Company Name
Client Location
Company Primary Contact
List of Projects

04/01/2022 -
When data is inserted via the HTML Form (Created in App Studio), a table is generated which is deviod of styling - only generic styles are being added. Instead of outputing the table returned from the SQL Call into the i-frame, the FEX to generate the initial table should be re-run.

The SOW form should - with regard to company information - take in the company ID & The project primary contact only (Other data about the company can be taken from the company's own table.)

Master File architecture:
Is a .mas file a single table?
Do we join data tables to get various views? (ie, company information, employee information, timesheet information)

Security Table for access

Set default parameters
Set virtual (define) fields

<!---  &&&&&&&&&&&&&&&&&&&&&&&&&&&&& -->

Design:
Re-design styles for forms (SOW, Company, Employee)

UI:
Login Page
Choose portal/reports view (3-4 categories of reports to view/items to add)
Individual Employee View (Card view?)
Individual Company View (Card view?)
Statement of work views (designed in Figma)
Timesheet views

<!---  &&&&&&&&&&&&&&&&&&&&&&&&&&&&& -->

In statement of work form:
Make Current Progress a dropdown Input
Make Company Name a dropdown Input
Company Primary Contact populates based on company name
Client location does the same
Project Category as a dropdown?
Company ID populates from Company Name

<!---  &&&&&&&&&&&&&&&&&&&&&&&&&&&&& -->

"What does a timesheet table (dataset) look like?"

"What is the primary key for a timesheet table?"

    - Time period (weekly?)

"Do we ever want to see different employees' timetables simultaneously?"

    - N

- Location (onsite/remote)

Timesheet work flow
Timesheet necessary Components
Add employee to Project

Timesheet:
Analyze sample Excel timesheet
View: Prior week? Current week's Timesheet?
Project Dropdown
Number of hours
Current Status

<!---  &&&&&&&&&&&&&&&&&&&&&&&&&&&&& -->

EDIT BUTTONS!
Build HTML form to gather data for timesheet
Editable\*?

Column span 6-13?
https://infocenter.informationbuilders.com/wf80/index.jsp?topic=%2Fpubdocs%2Freporting%2FCreatingReportswithWFLanguage%2Fsource%2FCOLSPAN.htm

Careers page on website:
job opportunities & why join

Our Current job openings
Benfits
Submit profile / resume option

Propagate error states!
Incorrect inputs/mistakes
Necessary fields

\*Idea:
Time Sheet:
First form: populates information on particular task
2nd form: submits information presented from first
Make a temporary table with information?
Need a lookup for the Project Name to the company, SOW, and desc
Current/future past color coordination on date dropdown?
Do I need to enforce check on range of hours for day? (i.e 0 - 24)?

User-level permissions on timesheets

Timesheet input fex

- Set default variable values
- Set Up necessary fields not being used (EMP_ID, SOW_ID)
- Define file from master file ('CAR') - set up filed values
- Table file from master file ('CAR')

 <!-- ---------------------------------------------------------   -->
 <!-- ---------------------------------------------------------   -->
 <!-- ---------------------------------------------------------   -->
 <!-- ---------------------------------------------------------   -->

04-07-2022

- ++ Working Subtotals
- ++ Correct (similar to designer) page breaks
- "Project Information" should /display/ the fully condensed version, but deliver information in parts
- ++ MONDAY_HOURS (etc) should be aliased as "Mon" ...

- Create color coding for active hours (hours > 0 )

- Longer column for project details (project information)
  COLUMN=N3, WRAP=OFF, $

- Move N/A to the top of the non-billable reasons dropdown?

- Styling Input layout & buttons

- Create a way to assign an employee to a project (Statement of Work)

- Statement of Work main table (sample-report_KASHTECH_OPERATIONS) should use a virtual field to create Client Location (City, state, country from company table)
- Similar to ^, a number of fields should be retrieved from other tables (eg company primary contact)

 <!-- ---------------------------------------------------------   -->

- Keep track of employment ID for when uploading to Database

- <!-- ---------------------------------------------------------   -->

- Qs :
  Since we set up a temporary file in "CAR" with a number of define fileds, can we make new define fileds from those? - PROJECT_INFOMATION would be a define field made up of COMPANY_NAME, PROJECT_CATEGORY, AND SOW_ID

  - Create a new master file (instead of using "CAR") that has the required fields that can be combined to create a workable define field?

  If we want a date range as a column (the leading column), do we have to perform the above operation on a compute field?

  - Should we keep track of submission date/time on timesheets?

## From last working build:

    - Aliased PROJECT_INFORMATION field (both on CAR table and FOCCACHE)
    - Changed heading content
    - By Lowest on billable (Yes vs No)
    **** Works at this point

Find full webfocus flow from login to form access & management
List of tasks that can be accomplished
Apportion tasks based on showing team the flow

<!-- ---------------------------------------------------------   -->
<!-- ---------------------------------------------------------   -->
<!-- ---------------------------------------------------------   -->

1.  Enter webfocus app page from (website? webfocus portal? - not sure best way to proceed)
2.  Login screen: KASH TECH Operations Portal
    Login handled through WebFOCUS features or OAUTH or in-house login system
3.  Main introduction to app - panels:
    Employees
    Timesheets
    Clients (Companies)

    -- on focus/hover we get a slide-out of what can be accomplished on the page (&watermark text for design aesthetic)

4.  Employee Portal
    a. Add Employee Panel --> Add Employee Form
    b. Assign Employee Panel --> Assign Employee Form
    c. View Employee Cards
    d. View Reports

        a. Add Employee Form
            Goal: Add entry for employee information to database
        b. Assign Employee Form
            Goal: Non-exclusively link an employee with a project

5.  Timesheet Portal
    a. Update Timesheet (Weekly)
    b. View Reports

        a. Update Weekly Timesheet
            Goal: Update timesheet table with data from a specific employee * from a specific selectable week
        b. View Reports
            Goal: View formatted timesheet table from specific employee

6.  Clients Portal
    a. Create Client (Company) Entry
    b. Create Statement of Work (Project)

    ?? View Projects/Statments of Work?

    c. Add Client Contact
    d. View Reports

        a. Create Client (Company) Entry
            Goal: Add entry with company information
        b. Create Statement of Work (Project)
            Goal: Create project entry with relevant information
        c. Add Client Contact
            Goal: Create and attach an entry for a comanpy's contact person

---

Create detailed task reports

---

---

Timesheet form date input

- Lookback to nearest Monday and have that be the default input

Steps to getting desired timesheet UX behavior

1. Gather from information when staging button is clicked
2. Save a copy of information submitted in page memory (JS)
3. Send information to FEX (normal means) to display report
   \*Hidden variable for each staging submission?
4. Way to delete in-memory information and re-submit to FEX?

-- combined-report-project-listings

Input modifications? Trim leading/trailing spaces?

Add Assigned Employee field to projects table

04/19 TODO:
JS state machine (if/else) to check if summary report has already run once
HTML Pages for login, viewing reports, and choosing to edit files.

Create a view to join company contacts with companies

Success dialog when upload to database button is clicked
"Sumitted timesheet for <Name>"

[Tibco EBX Associate Certification](https://www.tibco.com/services/education/certification/tibco-ebx-associate-certification-exam)

Admin Login && restricted views

Webfocus security center
create group
manage permissions
