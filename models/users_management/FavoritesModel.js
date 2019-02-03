/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the "my_favorites" table's model
class.It receives any CRUD operation 
requests and hands the over to class 
ModelMaster.It creates an instance of class
ModelMaster then passes parameters to its
functions.
*/



const ModelMaster=require('../ModelMaster.js');
const TableName="my_favorites";


module.exports = class FavoritesModel{


    constructor(){                                                                                                                                                                                                                                                             
     
 }
	
	
	
   static insert_my_favorites(jsonObject_){
	   return new Promise(function(resolve, reject) {
	   
 	   

       var myModelMasterPromise = ModelMaster.insert(TableName,jsonObject_);
		   
		   
		   myModelMasterPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
		   
	   })
 
    }		
	
	

	
	
	
   static get_all_my_favorites(){
	   return new Promise(function(resolve, reject) {
        

        var myModelMasterPromise = ModelMaster.selectAll(TableName);
		 myModelMasterPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		
     })
    }	
	
	
	
	
	
	
	
	
	
   static get_specific_my_favorites(ColumnName,value_){
	   return new Promise(function(resolve, reject) {
        


        var myModelMasterPromise = ModelMaster.selectSpecific(TableName,ColumnName,value_);
		   myModelMasterPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
     })
    }		
	
	
	
	
   static batch_my_favorites_update(jsonObject_){
	   return new Promise(function(resolve, reject) {
        


        var myModelMasterPromise = ModelMaster.batch_update(TableName,jsonObject_);
		   myModelMasterPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
     })
    }		
	
	
	
	
	
   static individual_my_favorites_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) {
        

        
		var myModelMasterPromise = ModelMaster.individual_update(TableName,jsonObject_,ColumnName,value_);
		   myModelMasterPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
     })
    }		
	
	
	
	
   static delete_my_favorites_record(ColumnName,value_,UserIdColumnName,user_id_value){
	   return new Promise(function(resolve, reject) {
        

        
		var myModelMasterPromise = ModelMaster.delete(TableName,ColumnName,value_,UserIdColumnName,user_id_value);
		   myModelMasterPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
     })
    }	
	
	
	
  static get_number_of_records(ColumnName,value_){
	   return new Promise(function(resolve, reject) {
        

        
		var myModelMasterPromise = ModelMaster.get_number_of_records(TableName,ColumnName,value_);
		   myModelMasterPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
     })
    }	
	
	
	
	
	
}