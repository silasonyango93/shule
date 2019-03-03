/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the primary_results_table's controller class.
It receives calls from the "PrimaryResultsTableRoutes" class and
passes the calls down to the "PrimaryResultsTableModel" class
*/



const PrimaryResultsTableModel = require('../../models/exams_management/PrimaryResultsTableModel.js');




module.exports = class PrimaryResultsTableController{
    constructor(){

    }
	
	
	
   static insert(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myPromise = PrimaryResultsTableModel.insert(jsonObject_);
		  
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_records(){
	   return new Promise(function(resolve, reject) {  
        
        var myPromise = PrimaryResultsTableModel.get_all_records();
		   
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_records(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
        
        var myPromise = PrimaryResultsTableModel.get_specific_records(ColumnName,value_);
		   
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       
        
		var myPromise = PrimaryResultsTableModel.batch_update(jsonObject_);
		   
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_record_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       
        
		var myPromise = PrimaryResultsTableModel.individual_record_update(ColumnName,value_,jsonObject_);
		   
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_user_specic_record(ColumnName,value_,UserIdColumnName,UserId){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = PrimaryResultsTableModel.delete_user_specic_record(ColumnName,value_,UserIdColumnName,UserId);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	

   static get_number_of_records(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = PrimaryResultsTableModel.get_number_of_records(ColumnName,value_);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }	
	
	
	
	
	
	
	static user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = PrimaryResultsTableModel.user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }
	
	
	
	
	
	
	static update_a_field_with_its_grade(ColumnOneToBeSet,ValueOneToBeSet,ColumnTwoToBeSet,ValueTwoToBeSet,ColumnOne,ValueOne,ColumnTwo,ValueTwo){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = PrimaryResultsTableModel.update_a_field_with_its_grade(ColumnOneToBeSet,ValueOneToBeSet,ColumnTwoToBeSet,ValueTwoToBeSet,ColumnOne,ValueOne,ColumnTwo,ValueTwo);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }	
	
	
	
	
	
	
	
	
	static getAspecifRecordForAspecificStudentAndExam(ColumnNameOne,ValueOne,ColumnNameTwo,ValueTwo){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = PrimaryResultsTableModel.getAspecifRecordForAspecificStudentAndExam(ColumnNameOne,ValueOne,ColumnNameTwo,ValueTwo);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }
	
	
	
	
	
	
	
	
	static update_a_row_with_sumtotal_average_and_meangrade(ColumnOneToBeSet,ValueOneToBeSet,ColumnTwoToBeSet,ValueTwoToBeSet,ColumnThreeToBeSet,ValueThreeToBeSet,ColumnOne,ValueOne,ColumnTwo,ValueTwo){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = PrimaryResultsTableModel.update_a_row_with_sumtotal_average_and_meangrade(ColumnOneToBeSet,ValueOneToBeSet,ColumnTwoToBeSet,ValueTwoToBeSet,ColumnThreeToBeSet,ValueThreeToBeSet,ColumnOne,ValueOne,ColumnTwo,ValueTwo);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }	
	
	
	
	
	
	
	
	
	static get_final_results_for_particular_exam_and_class(TableOne,JoiningKey,SearchColumnOne,SearchValueOne,SearchColumnTwo,SearchValueTwo){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = PrimaryResultsTableModel.get_final_results_for_particular_exam_and_class(TableOne,JoiningKey,SearchColumnOne,SearchValueOne,SearchColumnTwo,SearchValueTwo);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }	
	
	
	
	
	
	
	static get_results_for_a_particular_class_level(AcademicClassLevelId,ExamId){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = PrimaryResultsTableModel.get_results_for_a_particular_class_level(AcademicClassLevelId,ExamId);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
}