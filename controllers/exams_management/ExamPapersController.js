/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the exam_papers's controller class.
It receives calls from the "ExamPapersRoutes" class and
passes the calls down to the "ExamPapersModel" class
*/



const ExamPapersModel = require('../../models/exams_management/ExamPapersModel.js');




module.exports = class ExamPapersController{
    constructor(){

    }
	
	
	
   static insert(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myPromise = ExamPapersModel.insert(jsonObject_);
		  
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_records(){
	   return new Promise(function(resolve, reject) {  
        
        var myPromise = ExamPapersModel.get_all_records();
		   
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_records(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
        
        var myPromise = ExamPapersModel.get_specific_records(ColumnName,value_);
		   
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       
        
		var myPromise = ExamPapersModel.batch_update(jsonObject_);
		   
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_record_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       
        
		var myPromise = ExamPapersModel.individual_record_update(ColumnName,value_,jsonObject_);
		   
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_user_specic_record(ColumnName,value_,UserIdColumnName,UserId){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = ExamPapersModel.delete_user_specic_record(ColumnName,value_,UserIdColumnName,UserId);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	

   static get_number_of_records(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = ExamPapersModel.get_number_of_records(ColumnName,value_);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }	
	
	
	
	
	
	
	static user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = ExamPapersModel.user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }	
	
	
	
	
	
	static innerjoin_classSpecifSubjects_with_ExamPapers(TableOne,JoiningKey,SearchColumn,SearchValue){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = ExamPapersModel.innerjoin_classSpecifSubjects_with_ExamPapers(TableOne,JoiningKey,SearchColumn,SearchValue);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }	
	
	
	
	
	
	
	
	static get_a_classSpecicSubject_exam_paper_for_a_specific_exam(ColumnNameOne,ValueOne,ColumnNameTwo,ValueTwo){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = ExamPapersModel.get_a_classSpecicSubject_exam_paper_for_a_specific_exam(ColumnNameOne,ValueOne,ColumnNameTwo,ValueTwo);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }	
	
	
	
	
	
	
	
	
	
	static get_exam_papers_assignable_to_particular_student(TableOne,JoiningKey,SearchColumnOne,SearchValueOne,SearchColumnTwo,SearchValueTwo){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = ExamPapersModel.get_exam_papers_assignable_to_particular_student(TableOne,JoiningKey,SearchColumnOne,SearchValueOne,SearchColumnTwo,SearchValueTwo);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
	
	
	

	
	
}