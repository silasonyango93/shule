/*SON/2018-11-06 00:29 - DEVELOPMENT

This is the system's entry point.It creates
the database connection and port binding 
then initializes all the route files.

*/



const mysql = require('mysql');
const express = require('express');
const app = express();
const path =require("path");
var dbcredentials;
var cors = require('cors');
var port = process.env.PORT || 5000;

app.use(cors());
    dbcredentials={
        host: process.env.DB_HOST,
        user: process.env.DB__USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SHULE,
        insecureAuth : true
    }


app.use(express.static('public'));

var con;
app.use((req,res,next)=>{
    con = mysql.createConnection(dbcredentials);
    con.on('error',(err) =>{
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
            console.log(err);                        
        } else {                                      
            //throw err;                                  
        }
    });
    console.log("Connection established");

    next();
});





/*SON/2019-1-04 11:50 - DEVELOPMENT : Start User Management*/

app.use(require('./routes/users_management/UsersRoutes.js'));
app.use(require('./routes/users_management/StaffMemberRolesRoutes.js'));
app.use(require('./routes/users_management/RolesRoutes.js'));

/*SON/2019-1-04 11:50 - DEVELOPMENT : End User Management*/





/*SON/2019-1-04 11:50 - DEVELOPMENT : Start Department Management*/

app.use(require('./routes/department_management/DepartmentTypesRoutes.js'));
app.use(require('./routes/department_management/DepartmentsRoutes.js'));

/*SON/2019-1-04 11:50 - DEVELOPMENT : End Department Management*/





/*SON/2019-1-04 11:50 - DEVELOPMENT : Start Classroom Management*/

app.use(require('./routes/classroom_management/AcademicClassLevelsRoutes.js'));
app.use(require('./routes/classroom_management/ClassStreamsRoutes.js'));
app.use(require('./routes/classroom_management/ClassesRoutes.js'));
app.use(require('./routes/classroom_management/ClassPrefectRelationshipRoutes.js'));
app.use(require('./routes/classroom_management/LotDescriptionRoutes.js'));
app.use(require('./routes/classroom_management/LotRoutes.js'));

/*SON/2019-1-04 11:50 - DEVELOPMENT : End Classroom Management*/






/*SON/2019-1-04 11:50 - DEVELOPMENT : Start Prefects Management*/

app.use(require('./routes/prefects_management/PrefectTypeCategoriesRoutes.js'));
app.use(require('./routes/prefects_management/PrefectTypesRoutes.js'));
app.use(require('./routes/prefects_management/PrefectsRoutes.js'));
app.use(require('./routes/prefects_management/PrefectIndividualQualitiesRoutes.js'));

/*SON/2019-1-04 11:50 - DEVELOPMENT : End Prefects Management*/





/*SON/2019-1-04 11:50 - DEVELOPMENT : Start Students Management*/

app.use(require('./routes/student_management/StudentTypeCategoriesRoutes.js'));
app.use(require('./routes/student_management/StudentTypesRoutes.js'));
app.use(require('./routes/student_management/StudentsRoutes.js'));
app.use(require('./routes/student_management/StudentIndividualQualitiesRoutes.js'));
app.use(require('./routes/student_management/StudentRecordTypesRoutes.js'));
app.use(require('./routes/student_management/StudentRecordsRoutes.js'));
app.use(require('./routes/student_management/StudentGuardianRoutes.js'));

/*SON/2019-1-04 11:50 - DEVELOPMENT : End Students Management*/






/*SON/2019-1-04 11:50 - DEVELOPMENT : Start Staff Management*/

app.use(require('./routes/staff_management/ClassTeachersRoutes.js'));
app.use(require('./routes/staff_management/StaffRecordTypesRoutes.js'));
app.use(require('./routes/staff_management/StaffRecordsRoutes.js'));
app.use(require('./routes/staff_management/StaffDepartmentRelationshipRoutes.js'));
app.use(require('./routes/staff_management/StaffTypesRoutes.js'));
app.use(require('./routes/staff_management/StaffIndividualQualitiesRoutes.js'));

/*SON/2019-1-04 11:50 - DEVELOPMENT : End Staff Management*/






/*SON/2019-1-04 11:50 - DEVELOPMENT : Start Team Management*/

app.use(require('./routes/team_management/TeamConfigurationRoutes.js'));
app.use(require('./routes/team_management/StaffTeamLeadsRoutes.js'));
app.use(require('./routes/team_management/StaffTeamMembersRoutes.js'));
app.use(require('./routes/team_management/StudentTeamLeadsRoutes.js'));
app.use(require('./routes/team_management/StudentTeamMembersRoutes.js'));
app.use(require('./routes/team_management/StaffTeamLeadRolesRoutes.js'));
app.use(require('./routes/team_management/StaffTeamMemberRolesRoutes.js'));
app.use(require('./routes/team_management/StudentTeamLeadRolesRoutes.js'));
app.use(require('./routes/team_management/StudentTeamMemberRolesRoutes.js'));
app.use(require('./routes/team_management/TeamDutyRosterRoutes.js'));
app.use(require('./routes/team_management/TeamDutyRosterInformationTypesRoutes.js'));
app.use(require('./routes/team_management/TeamDutyRosterInformationRoutes.js'));

/*SON/2019-1-04 11:50 - DEVELOPMENT : End Team Management*/







/*SON/2019-1-04 11:50 - DEVELOPMENT : Start DutyRoster Management*/

app.use(require('./routes/duty_rosters/TeachersDutyRosterRoutes.js'));
app.use(require('./routes/duty_rosters/TeacherOnDutyInformationTypesRoutes.js'));
app.use(require('./routes/duty_rosters/TeacherOnDutyInformationRoutes.js'));
app.use(require('./routes/duty_rosters/TeacherOnDutyGeneralRecordTypesRoutes.js'));
app.use(require('./routes/duty_rosters/TeacherOnDutyGeneralRecordsRoutes.js'));
app.use(require('./routes/duty_rosters/TeacherOnDutyStudentRecordsRoutes.js'));
app.use(require('./routes/duty_rosters/TeacherOnDutyStaffRecordsRoutes.js'));
app.use(require('./routes/duty_rosters/PrefectsDutyRosterRoutes.js'));
app.use(require('./routes/duty_rosters/PrefectsOnDutyInformationTypesRoutes.js'));
app.use(require('./routes/duty_rosters/PrefectsOnDutyInformationRoutes.js'));

/*SON/2019-1-04 11:50 - DEVELOPMENT : End DutyRoster Management*/








/*SON/2019-1-04 11:50 - DEVELOPMENT : Start School Calender Management*/

app.use(require('./routes/school_calender/TermIterationsRoutes.js'));
app.use(require('./routes/school_calender/ActualTermsRoutes.js'));
app.use(require('./routes/school_calender/WeekIterationsRoutes.js'));
app.use(require('./routes/school_calender/ActualWeeksRoutes.js'));

/*SON/2019-1-04 11:50 - DEVELOPMENT : End School Calender Management*/






/*SON/2019-1-04 11:50 - DEVELOPMENT : Start Academic Subjects Management*/

app.use(require('./routes/academic_subjects_management/FieldCategoriesRoutes.js'));
app.use(require('./routes/academic_subjects_management/FieldsRoutes.js'));
app.use(require('./routes/academic_subjects_management/SubjectsRoutes.js'));
app.use(require('./routes/academic_subjects_management/ClassSpecificSubjectsRoutes.js'));
app.use(require('./routes/academic_subjects_management/TeachersClassSpecificSubjectsRoutes.js'));
app.use(require('./routes/academic_subjects_management/TeacherClassSpecificSubjectInformationTypesRoutes.js'));
app.use(require('./routes/academic_subjects_management/TeacherClassSpecificSubjectInformationRoutes.js'));
app.use(require('./routes/academic_subjects_management/StudentClassSpecificSubjectRshipRoutes.js'));
app.use(require('./routes/academic_subjects_management/StudentClassSpecificSubjectInformationTypesRoutes.js'));
app.use(require('./routes/academic_subjects_management/StudentClassSpecificSubjectInformationRoutes.js'));
app.use(require('./routes/academic_subjects_management/ClassSpecificSubjectInformationTypesRoutes.js'));
app.use(require('./routes/academic_subjects_management/ClassSpecificSubjectInformationRoutes.js'));

/*SON/2019-1-04 11:50 - DEVELOPMENT : End Academic Subjects Management*/






/*SON/2019-1-04 11:50 - DEVELOPMENT : Start Exams Management*/

app.use(require('./routes/exams_management/ExamTypesRoutes.js'));
app.use(require('./routes/exams_management/ExamsRoutes.js'));
app.use(require('./routes/exams_management/ExamInformationTypesRoutes.js'));
app.use(require('./routes/exams_management/ExamsInformationRoutes.js'));
app.use(require('./routes/exams_management/ClassSpecificExaminationCommentsRoutes.js'));
app.use(require('./routes/exams_management/StudentSpecificExaminationCommentsRoutes.js'));
app.use(require('./routes/exams_management/ExamPapersRoutes.js'));
app.use(require('./routes/exams_management/SpecificStudentExamPapersRoutes.js'));
app.use(require('./routes/exams_management/SpecificStudentExamPapersInformationTypesRoutes.js'));
app.use(require('./routes/exams_management/SpecificStudentExamPapersInformationRoutes.js'));
app.use(require('./routes/exams_management/FieldGradeConfigurationRoutes.js'));
app.use(require('./routes/exams_management/PrimaryResultsTableRoutes.js'));
app.use(require('./routes/exams_management/SecondaryResultsTableRoutes.js'));
app.use(require('./routes/exams_management/MeanGradeRoutes.js'));

/*SON/2019-1-04 11:50 - DEVELOPMENT : Start Exams Management*/







/*SON/2019-1-04 11:50 - DEVELOPMENT : Start Timetable Management*/

app.use(require('./routes/class_timetable_management/SlotConfigurationRoutes.js'));

/*SON/2019-1-04 11:50 - DEVELOPMENT : End Timetable Management*/








/*SON/2019-1-04 11:50 - DEVELOPMENT : Start Library Management*/

app.use(require('./routes/library_management/ResourceTypesRoutes.js'));
app.use(require('./routes/library_management/ResourcesRoutes.js'));
app.use(require('./routes/library_management/ResourceIndividualQualitiesRoutes.js'));
app.use(require('./routes/library_management/ResourceAuthorsRoutes.js'));
app.use(require('./routes/library_management/ResourcePublishersRoutes.js'));
app.use(require('./routes/library_management/LocationConfigurationRoutes.js'));
app.use(require('./routes/library_management/LocationTypesRoutes.js'));
app.use(require('./routes/library_management/SubLocationsRoutes.js'));
app.use(require('./routes/library_management/LibraryFieldsRoutes.js'));
app.use(require('./routes/library_management/MasterCatalogueRoutes.js'));
app.use(require('./routes/library_management/ResourceCatalogueRoutes.js'));
app.use(require('./routes/library_management/ClassTextBooksRoutes.js'));
app.use(require('./routes/library_management/StudentResourceLeasingRoutes.js'));
app.use(require('./routes/library_management/StudentResourceLeasingInformationTypesRoutes.js'));
app.use(require('./routes/library_management/StudentResourceLeasingInformationRoutes.js'));
app.use(require('./routes/library_management/StaffResourceLeasingInformationRoutes.js'));
app.use(require('./routes/library_management/StaffResourceLeasingInformationTypesRoutes.js'));
app.use(require('./routes/library_management/StaffResourceLeasingRoutes.js'));
app.use(require('./routes/library_management/RuleAspectsRoutes.js'));
app.use(require('./routes/library_management/ResourceRuleStatementsRoutes.js'));

/*SON/2019-1-04 11:50 - DEVELOPMENT : End Library Management*/







/*SON/2019-1-04 11:50 - DEVELOPMENT : Start Boarding section Management*/

app.use(require('./routes/boarding_section/DormitoryTypesRoutes.js'));
app.use(require('./routes/boarding_section/DormitoriesRoutes.js'));
app.use(require('./routes/boarding_section/DormitoryIndividualQualitiesRoutes.js'));
app.use(require('./routes/boarding_section/DormitoryInformationTypesRoutes.js'));
app.use(require('./routes/boarding_section/DormitoryInformationRoutes.js'));
app.use(require('./routes/boarding_section/BedTypesRoutes.js'));
app.use(require('./routes/boarding_section/BedsRoutes.js'));
app.use(require('./routes/boarding_section/BedInformationTypesRoutes.js'));
app.use(require('./routes/boarding_section/BedsInformationRoutes.js'));
app.use(require('./routes/boarding_section/DormitoryLocationTypesRoutes.js'));
app.use(require('./routes/boarding_section/DormitoryLocationConfigurationRoutes.js'));
app.use(require('./routes/boarding_section/DormitorySubLocationsRoutes.js'));
app.use(require('./routes/boarding_section/BedLocationsRoutes.js'));
app.use(require('./routes/boarding_section/BedAllocationRoutes.js'));
app.use(require('./routes/boarding_section/BedAllocationInformationTypesRoutes.js'));
app.use(require('./routes/boarding_section/BedAllocationInformationRoutes.js'));
app.use(require('./routes/boarding_section/CleanlinessInspectionCategoriesRoutes.js'));
app.use(require('./routes/boarding_section/InspectionElementsRoutes.js'));
app.use(require('./routes/boarding_section/DormitoryInspectionElementMarksRoutes.js'));
app.use(require('./routes/boarding_section/WeeklyDormitoryFinalResultsRoutes.js'));

/*SON/2019-1-04 11:50 - DEVELOPMENT : End Boarding section Management*/





/*SON/2019-1-04 11:50 - DEVELOPMENT : Start Finance and Fee Management*/

app.use(require('./routes/finance_and_fee_management/PayableServicesCategoriesRoutes.js'));
app.use(require('./routes/finance_and_fee_management/PayableServiceConfigurationRoutes.js'));
app.use(require('./routes/finance_and_fee_management/IndividualStudentPayableServicesRoutes.js'));
app.use(require('./routes/finance_and_fee_management/TermFeeConfigurationRoutes.js'));
app.use(require('./routes/finance_and_fee_management/InstallmentsRoutes.js'));
app.use(require('./routes/finance_and_fee_management/BalancesRoutes.js'));
app.use(require('./routes/finance_and_fee_management/CarryForwardAmountsRoutes.js'));
app.use(require('./routes/finance_and_fee_management/AnnualPayableFeeRoutes.js'));

/*SON/2019-1-04 11:50 - DEVELOPMENT : End Finance and Fee Management*/




/*SON/2019-1-04 11:50 - DEVELOPMENT : Start Finance and Fee Management*/

app.use(require('./routes/system_files/CurriculumConfigRoutes.js'));

/*SON/2019-1-04 11:50 - DEVELOPMENT : End Finance and Fee Management*/








app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

var port = process.env.PORT || 5000;

app.listen(port,function(){
    console.log("Listening on "+port);
});