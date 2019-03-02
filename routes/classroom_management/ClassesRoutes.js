/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the classes table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"ClassesController" class
*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const ClassesController = require('../../controllers/classroom_management/ClassesController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_classes', urlencodedParser,function(request,response){
	   
	   var date = new Date();
       date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		    
			
			AcademicClassLevelId:request.body.AcademicClassLevelId,
			ClassStreamId:request.body.ClassStreamId,
			LotId:request.body.LotId,
			ClassNickName:request.body.ClassNickName,
			ClassDescription:request.body.ClassDescription,
			PhysicalAddress:request.body.PhysicalAddress,
			ClassRefNo:request.body.ClassRefNo,
			DateCreated:date
			
						   
		 
		
      
        };
	
	     
          var myPromise = ClassesController.insert(jsonObject_);
	          
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_classes',urlencodedParser,function(request,response){
    
    var myPromise = ClassesController.get_all_records();
	      
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });









   router.post('/get_specific_classes',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
       
        


        var myPromise = ClassesController.get_specific_records(mKey,mValue);
	        
		   
		   myPromise.then(function(result) {
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });













   router.post('/update_classes',urlencodedParser,function(request,response){
	   
	  
	   var date = new Date();
       date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		    
			
			AcademicClassLevelId:request.body.AcademicClassLevelId,
			ClassStreamId:request.body.ClassStreamId,
			ClassNickName:request.body.ClassNickName,
			ClassDescription:request.body.ClassDescription,
			PhysicalAddress:request.body.PhysicalAddress,
			ClassRefNo:request.body.ClassRefNo,
			DateCreated:date
			
						   
		 
		
      
        };
	
    
    var myPromise = ClassesController.batch_update(jsonObject_);
	   
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });








   router.post('/update_individual_classes',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var date = new Date();
          date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		    
			
			AcademicClassLevelId:request.body.AcademicClassLevelId,
			ClassStreamId:request.body.ClassStreamId,
			ClassNickName:request.body.ClassNickName,
			ClassDescription:request.body.ClassDescription,
			PhysicalAddress:request.body.PhysicalAddress,
			ClassRefNo:request.body.ClassRefNo,
			DateCreated:date
			
						   
		 
		
      
        };
	
         
         var myPromise = ClassesController.individual_record_update(column_name,value_,jsonObject_);
	         	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_classes',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	   
	var UserIdColumnName=request.body.UserIdColumnName;
	   
	var UserId=request.body.UserId;
	
    
    var myPromise = ClassesController.delete_user_specic_record(column_name,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });






   router.post('/get_number_of_classes_records',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
	
    
    var myPromise = ClassesController.get_number_of_records(column_name,value_);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







router.post('/classes_user_specific_query',urlencodedParser,function(request,response){
	
    var ColumnName=request.body.ColumnName;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.value_;
	
	var UserIdColumnName=request.body.UserIdColumnName;
	
	var UserId=request.body.UserId;
	
	
    
    var myPromise = ClassesController.user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







router.post('/get_all_class_by_full_reference',urlencodedParser,function(request,response){
	
    var TableTwo=request.body.TableTwo;
   
    var JoiningKeyOne=request.body.JoiningKeyOne;
	
	var TableThree=request.body.TableThree;
	
	var JoiningKeyTwo=request.body.JoiningKeyTwo;
	
	
    
    var myPromise = ClassesController.get_all_classes_by_full_reference(TableTwo,TableThree,JoiningKeyOne,JoiningKeyTwo);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
   
   
   
   
   
   
   
router.post('/get_a_specific_students_class_by_full_reference',urlencodedParser,function(request,response){
	
    var AdmissionNo=request.body.AdmissionNo;
   
    
    var myPromise = ClassesController.get_a_specific_students_class_by_full_reference(AdmissionNo);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });   
   
   
   
   
   
   




 
 
module.exports = router;
