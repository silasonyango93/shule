/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the staff_resource_leasing_information table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"StaffResourceLeasingInformationController" class
*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const StaffResourceLeasingInformationController = require('../../controllers/library_management/StaffResourceLeasingInformationController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_staff_resource_leasing_information', urlencodedParser,function(request,response){
	   
	    var date = new Date();
        date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
			
			
			
			
			StaffRLITId:request.body.StaffRLITId,
			StaffResourceLeasingId:request.body.StaffResourceLeasingId,
			Information:request.body.Information,
			RecordedBy:request.body.RecordedBy,
			RecordedDate:date
			
			
				
        };
	
	     
          var myPromise = StaffResourceLeasingInformationController.insert(jsonObject_);
	          
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_staff_resource_leasing_information',urlencodedParser,function(request,response){
    
    var myPromise = StaffResourceLeasingInformationController.get_all_records();
	      
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });









   router.post('/get_specific_staff_resource_leasing_information',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
       
        


        var myPromise = StaffResourceLeasingInformationController.get_specific_records(mKey,mValue);
	        
		   
		   myPromise.then(function(result) {
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });













   router.post('/update_staff_resource_leasing_information',urlencodedParser,function(request,response){
	   
	  
	   var date = new Date();
        date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
			
			
			StaffRLITId:request.body.StaffRLITId,
			StaffResourceLeasingId:request.body.StaffResourceLeasingId,
			Information:request.body.Information,
			RecordedBy:request.body.RecordedBy,
			RecordedDate:date
			
			
				
        };
	
	
    
    var myPromise = StaffResourceLeasingInformationController.batch_update(jsonObject_);
	   
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });








   router.post('/update_individual_staff_resource_leasing_information',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var date = new Date();
        date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
			
			
			
			StaffRLITId:request.body.StaffRLITId,
			StaffResourceLeasingId:request.body.StaffResourceLeasingId,
			Information:request.body.Information,
			RecordedBy:request.body.RecordedBy,
			RecordedDate:date
			
			
				
        };
	
         
         var myPromise = StaffResourceLeasingInformationController.individual_record_update(column_name,value_,jsonObject_);
	         	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_staff_resource_leasing_information',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	   
	var UserIdColumnName=request.body.UserIdColumnName;
	   
	var UserId=request.body.UserId;
	
    
    var myPromise = StaffResourceLeasingInformationController.delete_user_specic_record(column_name,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });






   router.post('/get_number_of_staff_resource_leasing_information_records',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
	
    
    var myPromise = StaffResourceLeasingInformationController.get_number_of_records(column_name,value_);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







router.post('/staff_resource_leasing_information_user_specific_query',urlencodedParser,function(request,response){
	
    var ColumnName=request.body.ColumnName;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.value_;
	
	var UserIdColumnName=request.body.UserIdColumnName;
	
	var UserId=request.body.UserId;
	
	
    
    var myPromise = StaffResourceLeasingInformationController.user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });




 
 
module.exports = router;
