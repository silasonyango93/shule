/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the my_favorites's controller class.
It receives calls from the "FavoritesRoutes" class and
passes the calls down to the "FavoritesModel" class
*/



const FavoritesModel = require('../../models/users_management/FavoritesModel.js');




module.exports = class FavoritesController{
    constructor(){

    }
	
	
	
   static insert_my_favorites(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myFavoritesObjectPromise = FavoritesModel.insert_my_favorites(jsonObject_);
		  
		   
		   myFavoritesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_my_favorites(){
	   return new Promise(function(resolve, reject) {  
        
        var myFavoritesObjectPromise = FavoritesModel.get_all_my_favorites();
		   
		   
		   myFavoritesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_my_favorites(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
        
        var myFavoritesObjectPromise = FavoritesModel.get_specific_my_favorites(ColumnName,value_);
		   
		   
		   myFavoritesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_my_favorites_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       
        
		var myFavoritesObjectPromise = FavoritesModel.batch_my_favorites_update(jsonObject_);
		   
		   
		   myFavoritesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_my_favorites_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       
        
		var myFavoritesObjectPromise = FavoritesModel.individual_my_favorites_update(ColumnName,value_,jsonObject_);
		   
		   
		   myFavoritesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_my_favorites_record(ColumnName,value_,UserIdColumnName,user_id_value){
	   return new Promise(function(resolve, reject) { 
        
        
		var myFavoritesObjectPromise = FavoritesModel.delete_my_favorites_record(ColumnName,value_,UserIdColumnName,user_id_value);
		    
		   
		   myFavoritesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	

static get_number_of_records(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myFavoritesObjectPromise = FavoritesModel.get_number_of_records(ColumnName,value_);
		    
		   
		   myFavoritesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }	
	
	
	
	
}