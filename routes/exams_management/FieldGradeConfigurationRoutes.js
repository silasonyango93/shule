/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the field_grade_configuration table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"FieldGradeConfigurationController" class
*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const FieldGradeConfigurationController = require('../../controllers/exams_management/FieldGradeConfigurationController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_field_grade_configuration', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
			
			FieldId:request.body.FieldId,
			AcademicClassLevelId:request.body.AcademicClassLevelId,
			LowerBound:request.body.LowerBound,
			UpperBound:request.body.UpperBound,
			Grade:request.body.Grade
			
				
        };
	
	     
          var myPromise = FieldGradeConfigurationController.insert(jsonObject_);
	          
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_field_grade_configuration',urlencodedParser,function(request,response){
    
    var myPromise = FieldGradeConfigurationController.get_all_records();
	      
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });









   router.post('/get_specific_field_grade_configuration',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
       
        


        var myPromise = FieldGradeConfigurationController.get_specific_records(mKey,mValue);
	        
		   
		   myPromise.then(function(result) {
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });













   router.post('/update_field_grade_configuration',urlencodedParser,function(request,response){
	   
	  
	   var	jsonObject_ = {
         
			
			FieldId:request.body.FieldId,
			AcademicClassLevelId:request.body.AcademicClassLevelId,
			LowerBound:request.body.LowerBound,
			UpperBound:request.body.UpperBound,
			Grade:request.body.Grade
			
				
        };
	
	
    
    var myPromise = FieldGradeConfigurationController.batch_update(jsonObject_);
	   
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });








   router.post('/update_individual_field_grade_configuration',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
			
			FieldId:request.body.FieldId,
			AcademicClassLevelId:request.body.AcademicClassLevelId,
			LowerBound:request.body.LowerBound,
			UpperBound:request.body.UpperBound,
			Grade:request.body.Grade
			
				
        };
	
         
         var myPromise = FieldGradeConfigurationController.individual_record_update(column_name,value_,jsonObject_);
	         	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_field_grade_configuration',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	   
	var UserIdColumnName=request.body.UserIdColumnName;
	   
	var UserId=request.body.UserId;
	
    
    var myPromise = FieldGradeConfigurationController.delete_user_specic_record(column_name,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });






   router.post('/get_number_of_field_grade_configuration_records',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
	
    
    var myPromise = FieldGradeConfigurationController.get_number_of_records(column_name,value_);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







router.post('/field_grade_configuration_user_specific_query',urlencodedParser,function(request,response){
	
    var ColumnName=request.body.ColumnName;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.value_;
	
	var UserIdColumnName=request.body.UserIdColumnName;
	
	var UserId=request.body.UserId;
	
	
    
    var myPromise = FieldGradeConfigurationController.user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
   
   
   
   
   
   
   
   
   
router.post('/get_grade',urlencodedParser,function(request,response){
	
    var ColumnNameOne=request.body.ColumnNameOne;
    var ValueOne=request.body.ValueOne;
	var ColumnNameTwo=request.body.ColumnNameTwo;
	var ValueTwo=request.body.ValueTwo;
	var ValueThree=request.body.ValueThree;
	var ColumnThree=request.body.ColumnThree;
	var ColumnFour=request.body.ColumnFour;
	
	
    
    var myPromise = FieldGradeConfigurationController.get_grade(ColumnNameOne,ValueOne,ColumnNameTwo,ValueTwo,ValueThree,ColumnThree,ColumnFour);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });   
   
   
   
   




 
 
module.exports = router;
