/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the mean_grade table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"MeanGradeController" class
*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const MeanGradeController = require('../../controllers/exams_management/MeanGradeController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_mean_grade', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
			
			AcademicClassLevelId:request.body.AcademicClassLevelId,
			LowerBound:request.body.LowerBound,
			UpperBound:request.body.UpperBound,
			MeanGrade:request.body.MeanGrade
			
			
        };
	
	     
          var myPromise = MeanGradeController.insert(jsonObject_);
	          
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_mean_grade',urlencodedParser,function(request,response){
    
    var myPromise = MeanGradeController.get_all_records();
	      
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });









   router.post('/get_specific_mean_grade',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
       
        


        var myPromise = MeanGradeController.get_specific_records(mKey,mValue);
	        
		   
		   myPromise.then(function(result) {
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });













   router.post('/update_mean_grade',urlencodedParser,function(request,response){
	   
	  
	  var	jsonObject_ = {
         
			
			AcademicClassLevelId:request.body.AcademicClassLevelId,
			LowerBound:request.body.LowerBound,
			UpperBound:request.body.UpperBound,
			MeanGrade:request.body.MeanGrade
			
			
        };
	
    
    var myPromise = MeanGradeController.batch_update(jsonObject_);
	   
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });








   router.post('/update_individual_mean_grade',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
			
			AcademicClassLevelId:request.body.AcademicClassLevelId,
			LowerBound:request.body.LowerBound,
			UpperBound:request.body.UpperBound,
			MeanGrade:request.body.MeanGrade
			
			
        };
         
         var myPromise = MeanGradeController.individual_record_update(column_name,value_,jsonObject_);
	         	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_mean_grade',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	   
	var UserIdColumnName=request.body.UserIdColumnName;
	   
	var UserId=request.body.UserId;
	
    
    var myPromise = MeanGradeController.delete_user_specic_record(column_name,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });






   router.post('/get_number_of_mean_grade_records',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
	
    
    var myPromise = MeanGradeController.get_number_of_records(column_name,value_);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







router.post('/mean_grade_user_specific_query',urlencodedParser,function(request,response){
	
    var ColumnName=request.body.ColumnName;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.value_;
	
	var UserIdColumnName=request.body.UserIdColumnName;
	
	var UserId=request.body.UserId;
	
	
    
    var myPromise = MeanGradeController.user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
   
   
   
   
   
   
   
   
   
router.post('/select_mean_grade_for_particular_mean_for_particular_class_level',urlencodedParser,function(request,response){
	
    var ColumnNameOne=request.body.ColumnNameOne;
    var ValueOne=request.body.ValueOne;
	var ValueTwo=request.body.ValueTwo;
	var ColumnTwo=request.body.ColumnTwo;
	var ColumnThree=request.body.ColumnThree;
	
	
    
    var myPromise = MeanGradeController.select_mean_grade_for_particular_mean_for_particular_class_level(ColumnNameOne,ValueOne,ValueTwo,ColumnTwo,ColumnThree);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
		   
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });   
   
   
   
   
   


 
module.exports = router;
