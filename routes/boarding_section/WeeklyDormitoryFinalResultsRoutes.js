/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the weekly_dormitory_final_results table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"WeeklyDormitoryFinalResultsController" class
*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const WeeklyDormitoryFinalResultsController = require('../../controllers/boarding_section/WeeklyDormitoryFinalResultsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_weekly_dormitory_final_results', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		
			
			
			ActualWeekId:request.body.ActualWeekId,
			DormitoryId:request.body.DormitoryId,
			FinalResult:request.body.FinalResult
			
			
	
				
        };
	
	     
          var myPromise = WeeklyDormitoryFinalResultsController.insert(jsonObject_);
	          
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_weekly_dormitory_final_results',urlencodedParser,function(request,response){
    
    var myPromise = WeeklyDormitoryFinalResultsController.get_all_records();
	      
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });









   router.post('/get_specific_weekly_dormitory_final_results',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
       
        


        var myPromise = WeeklyDormitoryFinalResultsController.get_specific_records(mKey,mValue);
	        
		   
		   myPromise.then(function(result) {
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });













   router.post('/update_weekly_dormitory_final_results',urlencodedParser,function(request,response){
	   
	   
	     var date = new Date();
       date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		
			
			ActualWeekId:request.body.ActualWeekId,
			DormitoryId:request.body.DormitoryId,
			FinalResult:request.body.FinalResult
			
	
				
        };
	
    
    var myPromise = WeeklyDormitoryFinalResultsController.batch_update(jsonObject_);
	   
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });








   router.post('/update_individual_weekly_dormitory_final_results',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	     var date = new Date();
       date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		
			
			ActualWeekId:request.body.ActualWeekId,
			DormitoryId:request.body.DormitoryId,
			FinalResult:request.body.FinalResult
			
	
				
        };
         
         var myPromise = WeeklyDormitoryFinalResultsController.individual_record_update(column_name,value_,jsonObject_);
	         	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_weekly_dormitory_final_results',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	   
	var UserIdColumnName=request.body.UserIdColumnName;
	   
	var UserId=request.body.UserId;
	
    
    var myPromise = WeeklyDormitoryFinalResultsController.delete_user_specic_record(column_name,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });






   router.post('/get_number_of_weekly_dormitory_final_results_records',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
	
    
    var myPromise = WeeklyDormitoryFinalResultsController.get_number_of_records(column_name,value_);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







router.post('/weekly_dormitory_final_results_user_specific_query',urlencodedParser,function(request,response){
	
    var ColumnName=request.body.ColumnName;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.value_;
	
	var UserIdColumnName=request.body.UserIdColumnName;
	
	var UserId=request.body.UserId;
	
	
    
    var myPromise = WeeklyDormitoryFinalResultsController.user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });




 
 
module.exports = router;
