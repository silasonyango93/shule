/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the specific_student_exam_papers's controller class.
It receives calls from the "SpecificStudentExamPapersRoutes" class and
passes the calls down to the "SpecificStudentExamPapersModel" class
*/



const SpecificStudentExamPapersModel = require('../../models/exams_management/SpecificStudentExamPapersModel.js');




module.exports = class SpecificStudentExamPapersController{
    constructor(){

    }
	
	
	
   static insert(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myPromise = SpecificStudentExamPapersModel.insert(jsonObject_);
		  
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_records(){
	   return new Promise(function(resolve, reject) {  
        
        var myPromise = SpecificStudentExamPapersModel.get_all_records();
		   
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_records(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
        
        var myPromise = SpecificStudentExamPapersModel.get_specific_records(ColumnName,value_);
		   
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       
        
		var myPromise = SpecificStudentExamPapersModel.batch_update(jsonObject_);
		   
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_record_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       
        
		var myPromise = SpecificStudentExamPapersModel.individual_record_update(ColumnName,value_,jsonObject_);
		   
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_user_specic_record(ColumnName,value_,UserIdColumnName,UserId){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = SpecificStudentExamPapersModel.delete_user_specic_record(ColumnName,value_,UserIdColumnName,UserId);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	

   static get_number_of_records(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = SpecificStudentExamPapersModel.get_number_of_records(ColumnName,value_);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }	
	
	
	
	
	
	
	static user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = SpecificStudentExamPapersModel.user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }	
	
	
	
	
	
	
	
	
	static get_student_exam_papers_for_a_particular_exam_paper(TableOne,JoiningKey,SearchColumn,SearchValue){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = SpecificStudentExamPapersModel.get_student_exam_papers_for_a_particular_exam_paper(TableOne,JoiningKey,SearchColumn,SearchValue);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
	
	
	static update_student_specific_exam_papers_marks(JsonObject,ColumnOne,ValueOne,ColumnTwo,ValueTwo){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = SpecificStudentExamPapersModel.update_student_specific_exam_papers_marks(JsonObject,ColumnOne,ValueOne,ColumnTwo,ValueTwo);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
		
	
	
	
	
	
	
	
	
	static get_a_specific_student_specific_subject_results(AdmissionNo,FieldId){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = SpecificStudentExamPapersModel.get_a_specific_student_specific_subject_results(AdmissionNo,FieldId);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }	
	
	
	
	
	
	
	
	
	
	
	static get_any_unsubmitted_marks(ExamId){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = SpecificStudentExamPapersModel.get_any_unsubmitted_marks(ExamId);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
	
	
	
}