/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the secondary_results_table table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"SecondaryResultsTableController" class
*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const SecondaryResultsTableController = require('../../controllers/exams_management/SecondaryResultsTableController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_secondary_results_table', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
			
			
			ExamId:request.body.ExamId,
			AdmissionNo:request.body.AdmissionNo,
			MAT:request.body.MAT,
			MAT_GRADE:request.body.MAT_GRADE,
			ENG:request.body.ENG,
			ENG_GRADE:request.body.ENG_GRADE,
			KIS:request.body.KIS,
			KIS_GRADE:request.body.KIS_GRADE,
			PHYC:request.body.PHYC,
			PHYC_GRADE:request.body.PHYC_GRADE,
			CHEM:request.body.CHEM,
			CHEM_GRADE:request.body.CHEM_GRADE,
			BIO:request.body.BIO,
			BIO_GRADE:request.body.BIO_GRADE,
			GEO:request.body.GEO,
			GEO_GRADE:request.body.GEO_GRADE,
			HIST:request.body.HIST,
			HIST_GRADE:request.body.HIST_GRADE,
			CRE:request.body.CRE,
			CRE_GRADE:request.body.CRE_GRADE,
			AGRIC:request.body.AGRIC,
			AGRIC_GRADE:request.body.AGRIC_GRADE,
			BUST:request.body.BUST,
			BUST_GRADE:request.body.BUST_GRADE,
			FRE:request.body.FRE,
			FRE_GRADE:request.body.FRE_GRADE,
			COMP:request.body.COMP,
			COMP_GRADE:request.body.COMP_GRADE,
			HSCI:request.body.HSCI,
			HSCI_GRADE:request.body.HSCI_GRADE,
			MUSC:request.body.MUSC,
			MUSC_GRADE:request.body.MUSC_GRADE,
			TOTAL:request.body.TOTAL,
			MEAN:request.body.MEAN,
			MEAN_GRADE:request.body.MEAN_GRADE
			
			
			
			
				
        };
	
	     
          var myPromise = SecondaryResultsTableController.insert(jsonObject_);
	          
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_secondary_results_table',urlencodedParser,function(request,response){
    
    var myPromise = SecondaryResultsTableController.get_all_records();
	      
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });









   router.post('/get_specific_secondary_results_table',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
       
        


        var myPromise = SecondaryResultsTableController.get_specific_records(mKey,mValue);
	        
		   
		   myPromise.then(function(result) {
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });













   router.post('/update_secondary_results_table',urlencodedParser,function(request,response){
	   
	  
	   var	jsonObject_ = {
         
			
			ExamId:request.body.ExamId,
			AdmissionNo:request.body.AdmissionNo,
			MAT:request.body.MAT,
			MAT_GRADE:request.body.MAT_GRADE,
			ENG:request.body.ENG,
			ENG_GRADE:request.body.ENG_GRADE,
			KIS:request.body.KIS,
			KIS_GRADE:request.body.KIS_GRADE,
			PHYC:request.body.PHYC,
			PHYC_GRADE:request.body.PHYC_GRADE,
			CHEM:request.body.CHEM,
			CHEM_GRADE:request.body.CHEM_GRADE,
			BIO:request.body.BIO,
			BIO_GRADE:request.body.BIO_GRADE,
			GEO:request.body.GEO,
			GEO_GRADE:request.body.GEO_GRADE,
			HIST:request.body.HIST,
			HIST_GRADE:request.body.HIST_GRADE,
			CRE:request.body.CRE,
			CRE_GRADE:request.body.CRE_GRADE,
			AGRIC:request.body.AGRIC,
			AGRIC_GRADE:request.body.AGRIC_GRADE,
			BUST:request.body.BUST,
			BUST_GRADE:request.body.BUST_GRADE,
			FRE:request.body.FRE,
			FRE_GRADE:request.body.FRE_GRADE,
			COMP:request.body.COMP,
			COMP_GRADE:request.body.COMP_GRADE,
			HSCI:request.body.HSCI,
			HSCI_GRADE:request.body.HSCI_GRADE,
			MUSC:request.body.MUSC,
			MUSC_GRADE:request.body.MUSC_GRADE,
			TOTAL:request.body.TOTAL,
			MEAN:request.body.MEAN,
			MEAN_GRADE:request.body.MEAN_GRADE
			
				
        };
	
	
    
    var myPromise = SecondaryResultsTableController.batch_update(jsonObject_);
	   
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });








   router.post('/update_individual_secondary_results_table',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
			
			ExamId:request.body.ExamId,
			AdmissionNo:request.body.AdmissionNo,
			MAT:request.body.MAT,
			MAT_GRADE:request.body.MAT_GRADE,
			ENG:request.body.ENG,
			ENG_GRADE:request.body.ENG_GRADE,
			KIS:request.body.KIS,
			KIS_GRADE:request.body.KIS_GRADE,
			PHYC:request.body.PHYC,
			PHYC_GRADE:request.body.PHYC_GRADE,
			CHEM:request.body.CHEM,
			CHEM_GRADE:request.body.CHEM_GRADE,
			BIO:request.body.BIO,
			BIO_GRADE:request.body.BIO_GRADE,
			GEO:request.body.GEO,
			GEO_GRADE:request.body.GEO_GRADE,
			HIST:request.body.HIST,
			HIST_GRADE:request.body.HIST_GRADE,
			CRE:request.body.CRE,
			CRE_GRADE:request.body.CRE_GRADE,
			AGRIC:request.body.AGRIC,
			AGRIC_GRADE:request.body.AGRIC_GRADE,
			BUST:request.body.BUST,
			BUST_GRADE:request.body.BUST_GRADE,
			FRE:request.body.FRE,
			FRE_GRADE:request.body.FRE_GRADE,
			COMP:request.body.COMP,
			COMP_GRADE:request.body.COMP_GRADE,
			HSCI:request.body.HSCI,
			HSCI_GRADE:request.body.HSCI_GRADE,
			MUSC:request.body.MUSC,
			MUSC_GRADE:request.body.MUSC_GRADE,
			TOTAL:request.body.TOTAL,
			MEAN:request.body.MEAN,
			MEAN_GRADE:request.body.MEAN_GRADE
			
				
        };
	
         
         var myPromise = SecondaryResultsTableController.individual_record_update(column_name,value_,jsonObject_);
	         	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_secondary_results_table',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	   
	var UserIdColumnName=request.body.UserIdColumnName;
	   
	var UserId=request.body.UserId;
	
    
    var myPromise = SecondaryResultsTableController.delete_user_specic_record(column_name,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });






   router.post('/get_number_of_secondary_results_table_records',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
	
    
    var myPromise = SecondaryResultsTableController.get_number_of_records(column_name,value_);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







router.post('/secondary_results_table_user_specific_query',urlencodedParser,function(request,response){
	
    var ColumnName=request.body.ColumnName;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.value_;
	
	var UserIdColumnName=request.body.UserIdColumnName;
	
	var UserId=request.body.UserId;
	
	
    
    var myPromise = SecondaryResultsTableController.user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });




 
 
module.exports = router;
