/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the student_guardian table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"StudentGuardianController" class
*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const StudentGuardianController = require('../../controllers/student_management/StudentGuardianController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_student_guardian', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    
			
			AdmissionNo:request.body.AdmissionNo,
			FirstName:request.body.FirstName,
			MiddleName:request.body.MiddleName,
			Surname:request.body.Surname,
			PhoneNumber:request.body.PhoneNumber,
			Email:request.body.Email,
			Gender:request.body.Gender,
			DOB:request.body.DOB,
			NationalId:request.body.NationalId,
			PhysicalAddress:request.body.PhysicalAddress,
			StudentGuardianRelationship:request.body.StudentGuardianRelationship
			
			
			
		 
		
      
        };
	
	     
          var myPromise = StudentGuardianController.insert(jsonObject_);
	          
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_student_guardian',urlencodedParser,function(request,response){
    
    var myPromise = StudentGuardianController.get_all_records();
	      
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });









   router.post('/get_specific_student_guardian',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
       
        


        var myPromise = StudentGuardianController.get_specific_records(mKey,mValue);
	        
		   
		   myPromise.then(function(result) {
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });













   router.post('/update_student_guardian',urlencodedParser,function(request,response){
	   
	  
	   var	jsonObject_ = {
         
		    
			
			AdmissionNo:request.body.AdmissionNo,
			FirstName:request.body.FirstName,
			MiddleName:request.body.MiddleName,
			Surname:request.body.Surname,
			PhoneNumber:request.body.PhoneNumber,
			Email:request.body.Email,
			Gender:request.body.Gender,
			DOB:request.body.DOB,
			NationalId:request.body.NationalId,
			PhysicalAddress:request.body.PhysicalAddress,
			StudentGuardianRelationship:request.body.StudentGuardianRelationship
			
			
			
		 
		
      
        };
	
    
    var myPromise = StudentGuardianController.batch_update(jsonObject_);
	   
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });








   router.post('/update_individual_student_guardian',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   var	jsonObject_ = {
         
		    
			
			AdmissionNo:request.body.AdmissionNo,
			FirstName:request.body.FirstName,
			MiddleName:request.body.MiddleName,
			Surname:request.body.Surname,
			PhoneNumber:request.body.PhoneNumber,
			Email:request.body.Email,
			Gender:request.body.Gender,
			DOB:request.body.DOB,
			NationalId:request.body.NationalId,
			PhysicalAddress:request.body.PhysicalAddress,
			StudentGuardianRelationship:request.body.StudentGuardianRelationship
			
			
			
		 
		
      
        };
	
         
         var myPromise = StudentGuardianController.individual_record_update(column_name,value_,jsonObject_);
	         	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_student_guardian',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	   
	var UserIdColumnName=request.body.UserIdColumnName;
	   
	var UserId=request.body.UserId;
	
    
    var myPromise = StudentGuardianController.delete_user_specic_record(column_name,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });






   router.post('/get_number_of_student_guardian_records',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
	
    
    var myPromise = StudentGuardianController.get_number_of_records(column_name,value_);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







router.post('/student_guardian_user_specific_query',urlencodedParser,function(request,response){
	
    var ColumnName=request.body.ColumnName;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.value_;
	
	var UserIdColumnName=request.body.UserIdColumnName;
	
	var UserId=request.body.UserId;
	
	
    
    var myPromise = StudentGuardianController.user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });




 
 
module.exports = router;
