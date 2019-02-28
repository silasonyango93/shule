/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the academic_class_levels table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"AcademicClassLevelsController" class
*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const AcademicClassLevelsController = require('../../controllers/classroom_management/AcademicClassLevelsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_academic_class_levels', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    
			
			AcademicClassLevelName:request.body.AcademicClassLevelName,
			AcademicClassLevelDescription:request.body.AcademicClassLevelDescription,
			HierarchyCode:request.body.HierarchyCode
			
						   
		 
		
      
        };
	
	     
          var myPromise = AcademicClassLevelsController.insert(jsonObject_);
	          
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_academic_class_levels',urlencodedParser,function(request,response){
    
    var myPromise = AcademicClassLevelsController.get_all_records();
	      
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });









   router.post('/get_specific_academic_class_levels',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
       
        


        var myPromise = AcademicClassLevelsController.get_specific_records(mKey,mValue);
	        
		   
		   myPromise.then(function(result) {
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });













   router.post('/update_academic_class_levels',urlencodedParser,function(request,response){
	   
	  
	
    var	jsonObject_ = {
         
		    AcademicClassLevelName:request.body.AcademicClassLevelName,
			AcademicClassLevelDescription:request.body.AcademicClassLevelDescription,
			HierarchyCode:request.body.HierarchyCode
		
      
        };
	
    
    var myPromise = AcademicClassLevelsController.batch_update(jsonObject_);
	   
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });








   router.post('/update_individual_academic_class_levels',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		    AcademicClassLevelName:request.body.AcademicClassLevelName,
			AcademicClassLevelDescription:request.body.AcademicClassLevelDescription,
			HierarchyCode:request.body.HierarchyCode
		
      
           };
	
         
         var myPromise = AcademicClassLevelsController.individual_record_update(column_name,value_,jsonObject_);
	         	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_academic_class_levels',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	   
	var UserIdColumnName=request.body.UserIdColumnName;
	   
	var UserId=request.body.UserId;
	
    
    var myPromise = AcademicClassLevelsController.delete_user_specic_record(column_name,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });






   router.post('/get_number_of_academic_class_levels_records',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
	
    
    var myPromise = AcademicClassLevelsController.get_number_of_records(column_name,value_);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







router.post('/academic_class_levels_user_specific_query',urlencodedParser,function(request,response){
	
    var ColumnName=request.body.ColumnName;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.value_;
	
	var UserIdColumnName=request.body.UserIdColumnName;
	
	var UserId=request.body.UserId;
	
	
    
    var myPromise = AcademicClassLevelsController.user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
   
   
   
   
   
   
   
   
router.post('/get_academic_class_level_of_a_particular_class',urlencodedParser,function(request,response){
	
    var TableTwo=request.body.TableTwo;
    
    var JoiningKey=request.body.JoiningKey;
	
	var SearchColumn=request.body.SearchColumn;
	
	var SearchValue=request.body.SearchValue;
	
	
    
    var myPromise = AcademicClassLevelsController.get_academic_class_level_of_a_particular_class(TableTwo,JoiningKey,SearchColumn,SearchValue);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });   
   
   
   
   




 
 
module.exports = router;
