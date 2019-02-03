/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the my_favorites table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"FavoritesController" class
*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const FavoritesController = require('../../controllers/users_management/FavoritesController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_my_favorites', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    
			UserId:request.body.UserId,
			name:request.body.name,
			height:request.body.height,
			mass:request.body.mass,
			gender:request.body.gender,
			url:request.body.url
			
						   
		 
		
      
        };
	
	     
          var myFavoritesControllerObjectPromise = FavoritesController.insert_my_favorites(jsonObject_);
	          
		   
		   myFavoritesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_my_favorites',urlencodedParser,function(request,response){
    
    var myFavoritesControllerObjectPromise = FavoritesController.get_all_my_favorites();
	      
		   
		   myFavoritesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_my_favorites',urlencodedParser,function(request,response){
	   
	  
	
    var	jsonObject_ = {
         
		    UserId:request.body.UserId,
			name:request.body.name,
			height:request.body.height,
			mass:request.body.mass,
			gender:request.body.gender,
			url:request.body.url
		
      
        };
	
    
    var myFavoritesControllerObjectPromise = FavoritesController.batch_my_favorites_update(jsonObject_);
	   
		   
		   myFavoritesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_my_favorites',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
       
        


        var myFavoritesControllerObjectPromise = FavoritesController.get_specific_my_favorites(mKey,mValue);
	        
		   
		   myFavoritesControllerObjectPromise.then(function(result) {
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_my_favorites',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		          UserId:request.body.UserId,
			name:request.body.name,
			height:request.body.height,
			mass:request.body.mass,
			gender:request.body.gender,
			url:request.body.url
		
      
           };
	
         
         var myFavoritesControllerObjectPromise = FavoritesController.individual_my_favorites_update(column_name,value_,jsonObject_);
	         	        
		   
		   myFavoritesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_my_favorites',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	   
	var UserIdColumnName=request.body.UserIdColumnName;
	   
	var user_id_value=request.body.user_id_value;
	
    
    var myFavoritesControllerObjectPromise = FavoritesController.delete_my_favorites_record(column_name,value_,UserIdColumnName,user_id_value);
	      	        
		   
		   myFavoritesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });




router.post('/get_number_of_records',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
	
    
    var myFavoritesControllerObjectPromise = FavoritesController.get_number_of_records(column_name,value_);
	      	        
		   
		   myFavoritesControllerObjectPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });




 
 
module.exports = router;
