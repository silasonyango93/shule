/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the exams table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"ExamsController" class
*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const ExamsController = require('../../controllers/exams_management/ExamsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_exams', urlencodedParser,function(request,response){
	   
	   var date = new Date();
       date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
			
			
			
			ExamTypeId:request.body.ExamTypeId,
			ActualTermId:request.body.ActualTermId,
			ExamStartDate:request.body.ExamStartDate,
			ExamEndDate:request.body.ExamEndDate,
			ConfiguredBy:request.body.ConfiguredBy,
			ConfigurationDate:date
			
			
			
			
        };
	
	     
          var myPromise = ExamsController.insert(jsonObject_);
	          
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_exams',urlencodedParser,function(request,response){
    
    var myPromise = ExamsController.get_all_records();
	      
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });









   router.post('/get_specific_exams',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
       
        


        var myPromise = ExamsController.get_specific_records(mKey,mValue);
	        
		   
		   myPromise.then(function(result) {
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });













   router.post('/update_exams',urlencodedParser,function(request,response){
	   
	  
	   var date = new Date();
       date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
			
			
			
			ExamTypeId:request.body.ExamTypeId,
			ActualTermId:request.body.ActualTermId,
			ExamStartDate:request.body.ExamStartDate,
			ExamEndDate:request.body.ExamEndDate,
			ConfiguredBy:request.body.ConfiguredBy,
			ConfigurationDate:date
			
			
			
			
        };
	
    
    var myPromise = ExamsController.batch_update(jsonObject_);
	   
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });








   router.post('/update_individual_exams',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var date = new Date();
          date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
			
			
			
			ExamTypeId:request.body.ExamTypeId,
			ActualTermId:request.body.ActualTermId,
			ExamStartDate:request.body.ExamStartDate,
			ExamEndDate:request.body.ExamEndDate,
			ConfiguredBy:request.body.ConfiguredBy,
			ConfigurationDate:date
			
			
			
			
        };
         
         var myPromise = ExamsController.individual_record_update(column_name,value_,jsonObject_);
	         	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_exams',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	   
	var UserIdColumnName=request.body.UserIdColumnName;
	   
	var UserId=request.body.UserId;
	
    
    var myPromise = ExamsController.delete_user_specic_record(column_name,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });






   router.post('/get_number_of_exams_records',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
	
    
    var myPromise = ExamsController.get_number_of_records(column_name,value_);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







router.post('/exams_user_specific_query',urlencodedParser,function(request,response){
	
    var ColumnName=request.body.ColumnName;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.value_;
	
	var UserIdColumnName=request.body.UserIdColumnName;
	
	var UserId=request.body.UserId;
	
	
    
    var myPromise = ExamsController.user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
   
   
   
   
   
   
   
   
router.post('/get_all_current_year_configured_exams_by_full_reference',urlencodedParser,function(request,response){
	
    var TableTwo=request.body.TableTwo;
    var TableThree=request.body.TableThree;
	var TableFour=request.body.TableFour;
	var JoiningKeyOne=request.body.JoiningKeyOne;
	var JoiningKeyTwo=request.body.JoiningKeyTwo;
    var JoiningKeyThree=request.body.JoiningKeyThree;
	var SearchColumn=request.body.SearchColumn;
	var SearchValue=request.body.SearchValue;
	
	
    
    var myPromise = ExamsController.get_all_current_year_configured_exams_by_full_reference(TableTwo,TableThree,TableFour,JoiningKeyOne,JoiningKeyTwo,JoiningKeyThree,SearchColumn,SearchValue);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });   




 
 
module.exports = router;
