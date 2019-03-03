/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the primary_results_table table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"PrimaryResultsTableController" class
*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const PrimaryResultsTableController = require('../../controllers/exams_management/PrimaryResultsTableController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_primary_results_table', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
			
			ExamId:request.body.ExamId,
			AdmissionNo:request.body.AdmissionNo,
			MAT:request.body.MAT,
			MAT_GRADE:request.body.MAT_GRADE,
			ENG:request.body.ENG,
			ENG_GRADE:request.body.ENG_GRADE,
			KIS:request.body.KIS,
			KIS_GRADE:request.body.KIS_GRADE,
			SCI:request.body.SCI,
			SCI_GRADE:request.body.SCI_GRADE,
			SOC:request.body.SOC,
			SOC_GRADE:request.body.SOC_GRADE,
			TOTAL:request.body.TOTAL,
			MEAN:request.body.MEAN,
			MEAN_GRADE:request.body.MEAN_GRADE
			
				
        };
	
	     
          var myPromise = PrimaryResultsTableController.insert(jsonObject_);
	          
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_primary_results_table',urlencodedParser,function(request,response){
    
    var myPromise = PrimaryResultsTableController.get_all_records();
	      
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });









   router.post('/get_specific_primary_results_table',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
       
        


        var myPromise = PrimaryResultsTableController.get_specific_records(mKey,mValue);
	        
		   
		   myPromise.then(function(result) {
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });













   router.post('/update_primary_results_table',urlencodedParser,function(request,response){
	   
	  
	   var	jsonObject_ = {
         
			
			ExamId:request.body.ExamId,
			AdmissionNo:request.body.AdmissionNo,
			MAT:request.body.MAT,
			MAT_GRADE:request.body.MAT_GRADE,
			ENG:request.body.ENG,
			ENG_GRADE:request.body.ENG_GRADE,
			KIS:request.body.KIS,
			KIS_GRADE:request.body.KIS_GRADE,
			SCI:request.body.SCI,
			SCI_GRADE:request.body.SCI_GRADE,
			SOC:request.body.SOC,
			SOC_GRADE:request.body.SOC_GRADE,
			TOTAL:request.body.TOTAL,
			MEAN:request.body.MEAN,
			MEAN_GRADE:request.body.MEAN_GRADE
			
				
        };
	
	
    
    var myPromise = PrimaryResultsTableController.batch_update(jsonObject_);
	   
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });








   router.post('/update_individual_primary_results_table',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
			
			ExamId:request.body.ExamId,
			AdmissionNo:request.body.AdmissionNo,
			MAT:request.body.MAT,
			MAT_GRADE:request.body.MAT_GRADE,
			ENG:request.body.ENG,
			ENG_GRADE:request.body.ENG_GRADE,
			KIS:request.body.KIS,
			KIS_GRADE:request.body.KIS_GRADE,
			SCI:request.body.SCI,
			SCI_GRADE:request.body.SCI_GRADE,
			SOC:request.body.SOC,
			SOC_GRADE:request.body.SOC_GRADE,
			TOTAL:request.body.TOTAL,
			MEAN:request.body.MEAN,
			MEAN_GRADE:request.body.MEAN_GRADE
			
				
        };
	
         
         var myPromise = PrimaryResultsTableController.individual_record_update(column_name,value_,jsonObject_);
	         	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_primary_results_table',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	   
	var UserIdColumnName=request.body.UserIdColumnName;
	   
	var UserId=request.body.UserId;
	
    
    var myPromise = PrimaryResultsTableController.delete_user_specic_record(column_name,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });






   router.post('/get_number_of_primary_results_table_records',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
	
    
    var myPromise = PrimaryResultsTableController.get_number_of_records(column_name,value_);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







router.post('/primary_results_table_user_specific_query',urlencodedParser,function(request,response){
	
    var ColumnName=request.body.ColumnName;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.value_;
	
	var UserIdColumnName=request.body.UserIdColumnName;
	
	var UserId=request.body.UserId;
	
	
    
    var myPromise = PrimaryResultsTableController.user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
   
   
   
   
   
   
   
router.post('/update_a_field_with_its_grade',urlencodedParser,function(request,response){
	
	
	var ColumnOneToBeSet=request.body.ColumnOneToBeSet;
	
	var ValueOneToBeSet=request.body.ValueOneToBeSet;
	
	var ColumnTwoToBeSet=request.body.ColumnTwoToBeSet;
	
	var ValueTwoToBeSet=request.body.ValueTwoToBeSet;
	
    var ColumnOne=request.body.ColumnOne;
    
    var ValueOne=request.body.ValueOne;
	
	var ColumnTwo=request.body.ColumnTwo;
	
	var ValueTwo=request.body.ValueTwo;
	
	
    
    var myPromise = PrimaryResultsTableController.update_a_field_with_its_grade(ColumnOneToBeSet,ValueOneToBeSet,ColumnTwoToBeSet,ValueTwoToBeSet,ColumnOne,ValueOne,ColumnTwo,ValueTwo);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });   
   
   
   
   
   
   
   
   
   
   
router.post('/getAspecifRecordForAspecificStudentAndExam',urlencodedParser,function(request,response){
	
	
	var ColumnNameOne=request.body.ColumnNameOne;
	
	var ValueOne=request.body.ValueOne;
	
	var ColumnNameTwo=request.body.ColumnNameTwo;
	
	var ValueTwo=request.body.ValueTwo;
	
	
    
    var myPromise = PrimaryResultsTableController.getAspecifRecordForAspecificStudentAndExam(ColumnNameOne,ValueOne,ColumnNameTwo,ValueTwo);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
		   
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });      
   
   
   
   
   
   
   
   
   
   
   
router.post('/update_a_row_with_sumtotal_average_and_meangrade',urlencodedParser,function(request,response){
	
	
	var ColumnOneToBeSet=request.body.ColumnOneToBeSet;
	var ValueOneToBeSet=request.body.ValueOneToBeSet;
	var ColumnTwoToBeSet=request.body.ColumnTwoToBeSet;
	var ValueTwoToBeSet=request.body.ValueTwoToBeSet;
	var ColumnThreeToBeSet=request.body.ColumnThreeToBeSet;
	var ValueThreeToBeSet=request.body.ValueThreeToBeSet;
	var ColumnOne=request.body.ColumnOne;
	var ValueOne=request.body.ValueOne;
	var ColumnTwo=request.body.ColumnTwo;
	var ValueTwo=request.body.ValueTwo;
	
	
	
    
    var myPromise = PrimaryResultsTableController.update_a_row_with_sumtotal_average_and_meangrade(ColumnOneToBeSet,ValueOneToBeSet,ColumnTwoToBeSet,ValueTwoToBeSet,ColumnThreeToBeSet,ValueThreeToBeSet,ColumnOne,ValueOne,ColumnTwo,ValueTwo);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });         
   
   
   







router.post('/get_final_results_for_particular_exam_and_class',urlencodedParser,function(request,response){
	
	
	var TableOne=request.body.TableOne;
	var JoiningKey=request.body.JoiningKey;
	var SearchColumnOne=request.body.SearchColumnOne;
	var SearchValueOne=request.body.SearchValueOne;
	var SearchColumnTwo=request.body.SearchColumnTwo;
	var SearchValueTwo=request.body.SearchValueTwo;
	
	
	
	
    
    var myPromise = PrimaryResultsTableController.get_final_results_for_particular_exam_and_class(TableOne,JoiningKey,SearchColumnOne,SearchValueOne,SearchColumnTwo,SearchValueTwo);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });     









router.post('/get_results_for_a_particular_class_level',urlencodedParser,function(request,response){
	
	
	var AcademicClassLevelId=request.body.AcademicClassLevelId;
	var ExamId=request.body.ExamId;
	
    
    var myPromise = PrimaryResultsTableController.get_results_for_a_particular_class_level(AcademicClassLevelId,ExamId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });   



   




 
 
module.exports = router;
