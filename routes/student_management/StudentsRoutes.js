/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the students table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"StudentsController" class
*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const StudentsController = require('../../controllers/student_management/StudentsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_students', urlencodedParser,function(request,response){
	   
	   var date = new Date();
       date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		    
			
			AdmissionNo:request.body.AdmissionNo,
			ClassId:request.body.ClassId,
			FirstName:request.body.FirstName,
			MiddleName:request.body.MiddleName,
			Surname:request.body.Surname,
			Gender:request.body.Gender,
			DOB:request.body.DOB,
			AdmissionDate:date
			
		 
		
      
        };
	
	     
          var myPromise = StudentsController.insert(jsonObject_);
	          
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_students',urlencodedParser,function(request,response){
    
    var myPromise = StudentsController.get_all_records();
	      
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });









   router.post('/get_specific_students',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
       
        


        var myPromise = StudentsController.get_specific_records(mKey,mValue);
	        
		   
		   myPromise.then(function(result) {
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });













   router.post('/update_students',urlencodedParser,function(request,response){
	   
	  
	   var date = new Date();
       date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		    
			
			AdmissionNo:request.body.AdmissionNo,
			ClassId:request.body.ClassId,
			FirstName:request.body.FirstName,
			MiddleName:request.body.MiddleName,
			Surname:request.body.Surname,
			Gender:request.body.Gender,
			DOB:request.body.DOB,
			AdmissionDate:date
			
		 
		
      
        };
	
    
    var myPromise = StudentsController.batch_update(jsonObject_);
	   
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });








   router.post('/update_individual_students',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var date = new Date();
          date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		    
			
			AdmissionNo:request.body.AdmissionNo,
			ClassId:request.body.ClassId,
			FirstName:request.body.FirstName,
			MiddleName:request.body.MiddleName,
			Surname:request.body.Surname,
			Gender:request.body.Gender,
			DOB:request.body.DOB,
			AdmissionDate:date
			
		 
		
      
        };
	
         
         var myPromise = StudentsController.individual_record_update(column_name,value_,jsonObject_);
	         	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_students',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	   
	var UserIdColumnName=request.body.UserIdColumnName;
	   
	var UserId=request.body.UserId;
	
    
    var myPromise = StudentsController.delete_user_specic_record(column_name,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });






   router.post('/get_number_of_students_records',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
	
    
    var myPromise = StudentsController.get_number_of_records(column_name,value_);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







router.post('/students_user_specific_query',urlencodedParser,function(request,response){
	
    var ColumnName=request.body.ColumnName;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.value_;
	
	var UserIdColumnName=request.body.UserIdColumnName;
	
	var UserId=request.body.UserId;
	
	
    
    var myPromise = StudentsController.user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });










router.post('/get_students_class_levels_from_classId',urlencodedParser,function(request,response){
	
    var TableOne=request.body.TableOne;
    var TableTwo=request.body.TableTwo;
	var JoiningKeyOne=request.body.JoiningKeyOne;
	var JoiningKeyTwo=request.body.JoiningKeyTwo;
	var SearchColumn=request.body.SearchColumn;
	var SearchValue=request.body.SearchValue;
	
	
	
    
    var myPromise = StudentsController.get_students_class_levels_from_classId(TableOne,TableTwo,JoiningKeyOne,JoiningKeyTwo,SearchColumn,SearchValue);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
		
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });










 
 
module.exports = router;
