/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the users's controller class.
It receives calls from the "UsersRoutes" class and
passes the calls down to the "UsersModel" class

*/


const ModelMaster=require('../../models/ModelMaster.js');
const UsersModel = require('../../models/users_management/UsersModel.js');
const crypto = require('crypto');
var pbkdf2 = require('pbkdf2');




module.exports = class UsersController{
    constructor(){

    }
	
	
	
	/*my_hash_function(password, salt){
		
          var hash = crypto.createHmac('sha512', salt); 
          hash.update(password);
          var value = hash.digest('hex');
          return {
             salt:salt,
             encrypted_Password:value
          };
    }*/
	
	
	
   static insert_users(jsonObject_){
	  return new Promise(function(resolve, reject) { 
		 
		 //var userAlreadyRegisteredResult;
		 var TableName="staff_members";
		 var ColumnName="StaffNo";
		 var value_=jsonObject_.StaffNo;
		 
		 var myModelMasterPromise = ModelMaster.selectSpecific(TableName,ColumnName,value_);
		  
		  myModelMasterPromise.then(function(userAlreadyRegisteredResult) {
        
          if(userAlreadyRegisteredResult.length === 0){
		
		 var salt = crypto.randomBytes(128).toString('base64');
		 var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
		 
	 	
	
		 hash.update(jsonObject_.Password);
	     var encrypted_Password = hash.digest('hex');
		 
	     delete jsonObject_["Password"]; 
	     jsonObject_["EncryptedPassword"] = encrypted_Password;
	     jsonObject_["Salt"] = salt;
	   
	   
	 
     var myUsersObjectPromise = UsersModel.insert_users(jsonObject_); 
     
		  
		   
		   myUsersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
			  
		  }else{var myResponse="A user already exists by this staff number";
			    resolve(myResponse);
			   }
			  
			   }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	static user_login(jsonObject_){
	   return new Promise(function(resolve, reject) { 
		   
		   
	     
		 var TableName="staff_members";
		 var SearchColumn="StaffNo";
		 var SearchValue=jsonObject_.AttemptedStaffNo;
		   
		   
	    
		var myModelMasterPromise = ModelMaster.selectSpecific(TableName,SearchColumn,SearchValue); 
		   
		   
		myModelMasterPromise.then(function(userExistsResult) {
			
			
			
			
			if(userExistsResult.length === 0){
			  
			  var error_msg="There is no staff member by this staff number";
			  var response_object = {error: true, error_msg:error_msg};
			  resolve(response_object);
			
			}else{
				 
		         // var loginResponse = [];
		          var hash = crypto.createHmac('sha512', userExistsResult[0].Salt); /** Hashing algorithm sha512 */
		          hash.update(jsonObject_.AttemptedPassword);
	              var Attempted_encrypted_Password = hash.digest('hex');
				
				  if(Attempted_encrypted_Password === userExistsResult[0].EncryptedPassword)
				  {
					  
					  var response_object = {
                                    error: false, StaffNo: userExistsResult[0].StaffNo,FirstName: userExistsResult[0].FirstName
                                    };
					  
				   
				  }else{
					  
					   var error_msg="Login failed";
					   var response_object = {error: true, error_msg:error_msg};
				       
					  
				  }
				
				
				  //loginResponse.push(response_object);
				  resolve(response_object);
				  
				
			     }
			
			}, function(err) {
           reject(err);
           })
		   
	 })
    }	
  
	
	
	
	static get_all_users(){
	   return new Promise(function(resolve, reject) {  
        
        var myUsersObjectPromise = UsersModel.get_all_users();
		   
		   
		   myUsersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	

	
	
	
	
   static get_specific_users(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
         
        var myUsersObjectPromise = UsersModel.get_specific_users(ColumnName,value_);
		   
		   
		   myUsersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_users_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       
        
		var myUsersObjectPromise = UsersModel.batch_users_update(jsonObject_);
		   
		   
		   myUsersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_users_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myUsersObjectPromise = UsersModel.individual_users_update(ColumnName,value_,jsonObject_);
		   
		   
		   myUsersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_users_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myUsersObjectPromise = UsersModel.delete_users_record(ColumnName,value_);
		    
		   
		   myUsersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }
	
	
	
	
	
   static get_staff_members_with_a_specific_quality(TableTwo,JoiningKey,SearchColumn,SearchValue){
	   return new Promise(function(resolve, reject) { 
        
        
		var myUsersObjectPromise = UsersModel.get_staff_members_with_a_specific_quality(TableTwo,JoiningKey,SearchColumn,SearchValue);
		    
		   
		   myUsersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }	
	
	
	
	

	
	
		
	
	
}