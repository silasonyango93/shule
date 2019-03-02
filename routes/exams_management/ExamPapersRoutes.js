/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the exam_papers table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"ExamPapersController" class
*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const ExamPapersController = require('../../controllers/exams_management/ExamPapersController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_exam_papers', urlencodedParser,function(request,response){
	   
	   var date = new Date();
       date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
			
			
			
			
			ExamId:request.body.ExamId,
			ClassSpecificSubjectId:request.body.ClassSpecificSubjectId,
			ExamPaperStartDate:request.body.ExamPaperStartDate,
			ExamPaperEndDate:request.body.ExamPaperEndDate,
			ConfiguredBy:request.body.ConfiguredBy,
			ConfigurationDate:date,
			WasItDone:request.body.WasItDone
			
			
			
			
			
        };
	
	     
          var myPromise = ExamPapersController.insert(jsonObject_);
	          
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_exam_papers',urlencodedParser,function(request,response){
    
    var myPromise = ExamPapersController.get_all_records();
	      
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });









   router.post('/get_specific_exam_papers',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
       
        


        var myPromise = ExamPapersController.get_specific_records(mKey,mValue);
	        
		   
		   myPromise.then(function(result) {
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });













   router.post('/update_exam_papers',urlencodedParser,function(request,response){
	   
	  
	   var date = new Date();
       date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
			
			
			
			ExamId:request.body.ExamId,
			ClassSpecificSubjectId:request.body.ClassSpecificSubjectId,
			ExamPaperStartDate:request.body.ExamPaperStartDate,
			ExamPaperEndDate:request.body.ExamPaperEndDate,
			ConfiguredBy:request.body.ConfiguredBy,
			ConfigurationDate:date,
			WasItDone:request.body.WasItDone
			
			
			
			
        };
	
    
    var myPromise = ExamPapersController.batch_update(jsonObject_);
	   
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });








   router.post('/update_individual_exam_papers',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var date = new Date();
          date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
			
			
			
			ExamId:request.body.ExamId,
			ClassSpecificSubjectId:request.body.ClassSpecificSubjectId,
			ExamPaperStartDate:request.body.ExamPaperStartDate,
			ExamPaperEndDate:request.body.ExamPaperEndDate,
			ConfiguredBy:request.body.ConfiguredBy,
			ConfigurationDate:date,
			WasItDone:request.body.WasItDone
			
			
			
			
        };
         
         var myPromise = ExamPapersController.individual_record_update(column_name,value_,jsonObject_);
	         	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_exam_papers',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	   
	var UserIdColumnName=request.body.UserIdColumnName;
	   
	var UserId=request.body.UserId;
	
    
    var myPromise = ExamPapersController.delete_user_specic_record(column_name,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });






   router.post('/get_number_of_exam_papers_records',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
	
    
    var myPromise = ExamPapersController.get_number_of_records(column_name,value_);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







router.post('/exam_papers_user_specific_query',urlencodedParser,function(request,response){
	
    var ColumnName=request.body.ColumnName;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.value_;
	
	var UserIdColumnName=request.body.UserIdColumnName;
	
	var UserId=request.body.UserId;
	
	
    
    var myPromise = ExamPapersController.user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
   
   
   
   
   
   
   
   
router.post('/innerjoin_classSpecifSubjects_with_ExamPapers',urlencodedParser,function(request,response){
	
    var TableOne=request.body.TableOne;
    
    var JoiningKey=request.body.JoiningKey;
	
	var SearchColumn=request.body.SearchColumn;
	
	var SearchValue=request.body.SearchValue;
	
	
    
    var myPromise = ExamPapersController.innerjoin_classSpecifSubjects_with_ExamPapers(TableOne,JoiningKey,SearchColumn,SearchValue);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   }); 
   
   
   
   
   
   
   
   
   
   
router.post('/get_a_classSpecicSubject_exam_paper_for_a_specific_exam',urlencodedParser,function(request,response){
	
    var ColumnNameOne=request.body.ColumnNameOne;
    
    var ValueOne=request.body.ValueOne;
	
	var ColumnNameTwo=request.body.ColumnNameTwo;
	
	var ValueTwo=request.body.ValueTwo;
	
	
    
    var myPromise = ExamPapersController.get_a_classSpecicSubject_exam_paper_for_a_specific_exam(ColumnNameOne,ValueOne,ColumnNameTwo,ValueTwo);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   }); 
   
   
   
   
   
   
   
   
   
   
router.post('/get_exam_papers_assignable_to_particular_student',urlencodedParser,function(request,response){
	
    var TableOne=request.body.TableOne;
    var JoiningKey=request.body.JoiningKey;
	var SearchColumnOne=request.body.SearchColumnOne;
	var SearchValueOne=request.body.SearchValueOne;
	var SearchColumnTwo=request.body.SearchColumnTwo;
	var SearchValueTwo=request.body.SearchValueTwo;
	
	
    
    var myPromise = ExamPapersController.get_exam_papers_assignable_to_particular_student(TableOne,JoiningKey,SearchColumnOne,SearchValueOne,SearchColumnTwo,SearchValueTwo);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });    
   
   
   
   
   
   
   
   

 
module.exports = router;
