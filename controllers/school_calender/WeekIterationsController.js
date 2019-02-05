/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the week_iterations's controller class.
It receives calls from the "WeekIterationsRoutes" class and
passes the calls down to the "WeekIterationsModel" class
*/



const WeekIterationsModel = require('../../models/school_calender/WeekIterationsModel.js');




module.exports = class WeekIterationsController{
    constructor(){

    }
	
	
	
   static insert(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myPromise = WeekIterationsModel.insert(jsonObject_);
		  
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_records(){
	   return new Promise(function(resolve, reject) {  
        
        var myPromise = WeekIterationsModel.get_all_records();
		   
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_records(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
        
        var myPromise = WeekIterationsModel.get_specific_records(ColumnName,value_);
		   
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       
        
		var myPromise = WeekIterationsModel.batch_update(jsonObject_);
		   
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_record_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       
        
		var myPromise = WeekIterationsModel.individual_record_update(ColumnName,value_,jsonObject_);
		   
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_user_specic_record(ColumnName,value_,UserIdColumnName,UserId){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = WeekIterationsModel.delete_user_specic_record(ColumnName,value_,UserIdColumnName,UserId);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	

   static get_number_of_records(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = WeekIterationsModel.get_number_of_records(ColumnName,value_);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }	
	
	
	
	
	
	
	static user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = WeekIterationsModel.user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }	
	
	
	
	
}