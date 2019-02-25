/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the "teachers_class_specific_subjects" table's model
class.It receives any CRUD operation 
requests and hands the over to class 
ModelMaster.It creates an instance of class
ModelMaster then passes parameters to its
functions.
*/



const ModelMaster=require('../ModelMaster.js');
const TableName="teachers_class_specific_subjects";


module.exports = class TeachersClassSpecificSubjectsModel{


    constructor(){                                                                                                                                                                                                                                                             
     
 }
	
	
	
   static insert(jsonObject_){
	   return new Promise(function(resolve, reject) {
	   
 	   

       var myPromise = ModelMaster.insert(TableName,jsonObject_);
		   
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
		   
	   })
 
    }		
	
	

	
	
	
   static get_all_records(){
	   return new Promise(function(resolve, reject) {
        

        var myPromise = ModelMaster.selectAll(TableName);
		 myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		
     })
    }	
	
	
	
	
	
	
	
	
	
   static get_specific_records(ColumnName,value_){
	   return new Promise(function(resolve, reject) {
        


        var myPromise = ModelMaster.selectSpecific(TableName,ColumnName,value_);
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
     })
    }		
	
	
	
	
   static batch_update(jsonObject_){
	   return new Promise(function(resolve, reject) {
        


        var myPromise = ModelMaster.batch_update(TableName,jsonObject_);
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
     })
    }		
	
	
	
	
	
   static individual_record_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) {
        

        
		var myPromise = ModelMaster.individual_update(TableName,jsonObject_,ColumnName,value_);
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
     })
    }		
	
	
	
	
   static delete_user_specic_record(ColumnName,value_,UserIdColumnName,UserId){
	   return new Promise(function(resolve, reject) {
        

        
		var myPromise = ModelMaster.delete(TableName,ColumnName,value_,UserIdColumnName,UserId);
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
     })
    }	
	
	
	
  static get_number_of_records(ColumnName,value_){
	   return new Promise(function(resolve, reject) {
        

        
		var myPromise = ModelMaster.get_number_of_records(TableName,ColumnName,value_);
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
     })
    }	
	
	
	
	

  static user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId){
	   return new Promise(function(resolve, reject) {
        

        
		var myPromise = ModelMaster.user_specific_select_query(TableName,ColumnName,value_,UserIdColumnName,UserId);
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
     })
    }	
	
	
	
	
	
	
	
  static get_a_teachers_specific_subjects_by_full_reference(TableTwo,TableThree,TableFour,TableFive,TableSix,JoiningKeyOne,JoiningKeyTwo,JoiningKeyThree,JoiningKeyFour,JoiningKeyFive,SearchColumn,SearchValue){
	   return new Promise(function(resolve, reject) {
        

        
		var myPromise = ModelMaster.one_grandparent_one_parent_two_children_two_grandchildren_from_one_child(TableName,TableTwo,TableThree,TableFour,TableFive,TableSix,JoiningKeyOne,JoiningKeyTwo,JoiningKeyThree,JoiningKeyFour,JoiningKeyFive,SearchColumn,SearchValue);
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
     })
    }		
	
	
	
	
	
}