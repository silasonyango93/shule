/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the specific_student_exam_papers table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"SpecificStudentExamPapersController" class
*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const SpecificStudentExamPapersController = require('../../controllers/exams_management/SpecificStudentExamPapersController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_specific_student_exam_papers', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
			
			AdmissionNo:request.body.AdmissionNo,
			ExamPaperId:request.body.ExamPaperId,
			Marks:request.body.Marks,
			IsMarkSubmited:request.body.IsMarkSubmited
			
				
        };
	
	     
          var myPromise = SpecificStudentExamPapersController.insert(jsonObject_);
	          
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_specific_student_exam_papers',urlencodedParser,function(request,response){
    
    var myPromise = SpecificStudentExamPapersController.get_all_records();
	      
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });









   router.post('/get_specific_specific_student_exam_papers',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
       
        


        var myPromise = SpecificStudentExamPapersController.get_specific_records(mKey,mValue);
	        
		   
		   myPromise.then(function(result) {
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });













   router.post('/update_specific_student_exam_papers',urlencodedParser,function(request,response){
	   
	  
	   var	jsonObject_ = {
         
			
			AdmissionNo:request.body.AdmissionNo,
			ExamPaperId:request.body.ExamPaperId,
			Marks:request.body.Marks,
			IsMarkSubmited:request.body.IsMarkSubmited
			
				
        };
	
	
    
    var myPromise = SpecificStudentExamPapersController.batch_update(jsonObject_);
	   
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });








   router.post('/update_individual_specific_student_exam_papers',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
			
			
			Marks:request.body.Marks,
			
			
				
        };
	
         
         var myPromise = SpecificStudentExamPapersController.individual_record_update(column_name,value_,jsonObject_);
	         	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_specific_student_exam_papers',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	   
	var UserIdColumnName=request.body.UserIdColumnName;
	   
	var UserId=request.body.UserId;
	
    
    var myPromise = SpecificStudentExamPapersController.delete_user_specic_record(column_name,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });






   router.post('/get_number_of_specific_student_exam_papers_records',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
	
    
    var myPromise = SpecificStudentExamPapersController.get_number_of_records(column_name,value_);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







router.post('/specific_student_exam_papers_user_specific_query',urlencodedParser,function(request,response){
	
    var ColumnName=request.body.ColumnName;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.value_;
	
	var UserIdColumnName=request.body.UserIdColumnName;
	
	var UserId=request.body.UserId;
	
	
    
    var myPromise = SpecificStudentExamPapersController.user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
   
   
   
   
   
   
   
   
router.post('/get_student_exam_papers_for_a_particular_exam_paper',urlencodedParser,function(request,response){
	
    var TableOne=request.body.TableOne;
    
    var JoiningKey=request.body.JoiningKey;
	
	var SearchColumn=request.body.SearchColumn;
	
	var SearchValue=request.body.SearchValue;
	
	
    
    var myPromise = SpecificStudentExamPapersController.get_student_exam_papers_for_a_particular_exam_paper(TableOne,JoiningKey,SearchColumn,SearchValue);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
		   
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });   
   
   
   
   
   
   
   
   
   
   
router.post('/update_student_specific_exam_papers_marks',urlencodedParser,function(request,response){
	
    var	JsonObject = {
        
			Marks:request.body.Marks,
			IsMarkSubmited:request.body.IsMarkSubmited
				
        };
    
    var ColumnOne=request.body.ColumnOne;
	
	var ValueOne=request.body.ValueOne;
	
	var ColumnTwo=request.body.ColumnTwo;
	
	var ValueTwo=request.body.ValueTwo;
	
	
    
    var myPromise = SpecificStudentExamPapersController.update_student_specific_exam_papers_marks(JsonObject,ColumnOne,ValueOne,ColumnTwo,ValueTwo);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
		   
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });      
   
   
   
   
   
   
   
   
   
router.post('/get_a_specific_student_specific_subject_results',urlencodedParser,function(request,response){
	
    
    var AdmissionNo=request.body.AdmissionNo;
	
	var FieldId=request.body.FieldId;
	
	
    
    var myPromise = SpecificStudentExamPapersController.get_a_specific_student_specific_subject_results(AdmissionNo,FieldId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
		   
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });  
   
   
   
   
   
   
   
   
   
   
router.post('/get_any_unsubmitted_marks',urlencodedParser,function(request,response){
	var ExamId=request.body.ExamId;
    var myPromise = SpecificStudentExamPapersController.get_any_unsubmitted_marks(ExamId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
		   
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });     
   
   
   
   
   
   




 
 
module.exports = router;
