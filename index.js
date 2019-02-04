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

/*SON/2019-1-04 11:50 - DEVELOPMENT : End Team Management*/




app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

var port = process.env.PORT || 5000;

app.listen(port,function(){
    console.log("Listening on "+port);
});