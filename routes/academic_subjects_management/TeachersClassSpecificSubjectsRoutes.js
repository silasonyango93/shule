/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the teachers_class_specific_subjects table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"TeachersClassSpecificSubjectsController" class
*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const TeachersClassSpecificSubjectsController = require('../../controllers/academic_subjects_management/TeachersClassSpecificSubjectsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_teachers_class_specific_subjects', urlencodedParser,function(request,response){
	   
	   var date = new Date();
       date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		    
			
			
			StaffNo:request.body.StaffNo,
			ClassSpecificSubjectId:request.body.ClassSpecificSubjectId,
			AssignedBy:request.body.AssignedBy,
			AssignedDate:date
			
			
						 
      
        };
	
	     
          var myPromise = TeachersClassSpecificSubjectsController.insert(jsonObject_);
	          
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_teachers_class_specific_subjects',urlencodedParser,function(request,response){
    
    var myPromise = TeachersClassSpecificSubjectsController.get_all_records();
	      
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });









   router.post('/get_specific_teachers_class_specific_subjects',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
       
        


        var myPromise = TeachersClassSpecificSubjectsController.get_specific_records(mKey,mValue);
	        
		   
		   myPromise.then(function(result) {
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });













   router.post('/update_teachers_class_specific_subjects',urlencodedParser,function(request,response){
	   
	  
	   var date = new Date();
       date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		    
			
			
			StaffNo:request.body.StaffNo,
			ClassSpecificSubjectId:request.body.ClassSpecificSubjectId,
			AssignedBy:request.body.AssignedBy,
			AssignedDate:date
			
			
						 
      
        };
	
    
    var myPromise = TeachersClassSpecificSubjectsController.batch_update(jsonObject_);
	   
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });








   router.post('/update_individual_teachers_class_specific_subjects',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var date = new Date();
         date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		    
			
			
			StaffNo:request.body.StaffNo,
			ClassSpecificSubjectId:request.body.ClassSpecificSubjectId,
			AssignedBy:request.body.AssignedBy,
			AssignedDate:date
			
			
						 
      
        };
         
         var myPromise = TeachersClassSpecificSubjectsController.individual_record_update(column_name,value_,jsonObject_);
	         	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_teachers_class_specific_subjects',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	   
	var UserIdColumnName=request.body.UserIdColumnName;
	   
	var UserId=request.body.UserId;
	
    
    var myPromise = TeachersClassSpecificSubjectsController.delete_user_specic_record(column_name,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });






   router.post('/get_number_of_teachers_class_specific_subjects_records',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
	
    
    var myPromise = TeachersClassSpecificSubjectsController.get_number_of_records(column_name,value_);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







router.post('/teachers_class_specific_subjects_user_specific_query',urlencodedParser,function(request,response){
	
    var ColumnName=request.body.ColumnName;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.value_;
	
	var UserIdColumnName=request.body.UserIdColumnName;
	
	var UserId=request.body.UserId;
	
	
    
    var myPromise = TeachersClassSpecificSubjectsController.user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
   
   
   
   
   
   
   
   


router.post('/get_a_teachers_specific_subjects_by_full_reference',urlencodedParser,function(request,response){
	
    var JoiningKeyOne=request.body.JoiningKeyOne;
    var TableTwo=request.body.TableTwo;
	var JoiningKeyTwo=request.body.JoiningKeyTwo;
	var TableThree=request.body.TableThree;
	var JoiningKeyThree=request.body.JoiningKeyThree;
    var TableFour=request.body.TableFour;
	var JoiningKeyFour=request.body.JoiningKeyFour;
	var TableFive=request.body.TableFive;
	var JoiningKeyFive=request.body.JoiningKeyFive;
    var TableSix=request.body.TableSix;
	var SearchColumn=request.body.SearchColumn;
	var SearchValue=request.body.SearchValue;
	
	
    
    var myPromise = TeachersClassSpecificSubjectsController.get_a_teachers_specific_subjects_by_full_reference(TableTwo,TableThree,TableFour,TableFive,TableSix,JoiningKeyOne,JoiningKeyTwo,JoiningKeyThree,JoiningKeyFour,JoiningKeyFive,SearchColumn,SearchValue);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
   
   
   




 
 
module.exports = router;
