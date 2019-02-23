/*SON/2018-11-06 00:29 - DEVELOPMENT

This class carries all of the system's CRUD operations.
All create,read,update and delete operations go through
this class.The methods have been tested and proven to 
be working.Create an instance of the class and call any
of its methods

*/


var mysql = require('mysql');
var express = require('express');
var app = express();
var path =require("path");
var con=require('../common/dbConnect.js');

module.exports = class ModelMaster {


	
	
/*SON/2018-11-06 00:29 - DEVELOPMENT
	
The class constructor.Does not take any arguments

*/
    constructor() {
    }

	
	
	
/*SON/2018-11-06 00:29 - DEVELOPMENT
	
The insert function is for insertion of all tables
regardless of their number of columns.Pass it the
table name and a key-value pair of data to insert
with the key being the actual column name on the
database.
	
*/
	static insert(tableName, jsonObject_) {

      return new Promise(function(resolve, reject) {
    	
		  con.query('INSERT INTO ' + tableName + ' SET ?', jsonObject_, function (err, result) {
            if (err){reject(err);}
               else {
				   var returned_value_={success:true, message:"Record inserted succesfully."};
                   resolve(returned_value_);
                    }
            
            });
		
		
    })
        

    }

	
	
	
/*SON/2018-11-06 00:29 - DEVELOPMENT
	
The selectAll() is to select all data on the
table.Pass it the table name and a callback
function to retrieve back your result

*/
	static selectAll(tableName) {

       return new Promise(function(resolve, reject) {
             con.query('SELECT * FROM ' + tableName + ';', function (err, result, fields) {
                if (err){reject(err);}
                   else {
				        var returned_value_=result;
                        resolve(returned_value_);
                    }
                });
		   
		   })

    }
	
	

	
/*SON/2018-11-06 00:29 - DEVELOPMENT
	
The selectSpecific() is to select specific a
record(s) on the table depending on the 
arguments you pass to it.Pass it the table 
name and a callback function to retrieve back
your result

*/
	static selectSpecific(tableName,ColumnName,value_) {

     return new Promise(function(resolve, reject) {
        var sql = 'SELECT * FROM '+tableName+' WHERE '+ColumnName+' = '+ mysql.escape(value_);
        con.query(sql, function (err, result) {
            if (err){reject(err);}
                   else {
				        var returned_value_=result;
                        resolve(returned_value_);
                    }

        });
		 
	})


    }
	
	
	
/*SON/2018-11-06 00:29 - DEVELOPMENT
	
The batch_update() makes a similar update on all
records of the table you pass to it.Pass it the 
table name and the key-value pair of the updates
to make.

*/	
	static batch_update(tableName,jsonObject_) {
	return new Promise(function(resolve, reject) {	

        con.query('UPDATE ' + tableName + ' SET ?', jsonObject_, function (err, result) {
            if (err){reject(err);}
                   else {
				        var returned_value_="Update was Successful";
                        resolve(returned_value_);
                    }
        });
		
	})

   }
	
	
	
	
/*SON/2018-11-06 00:29 - DEVELOPMENT
	
individual_update() updates a specific record(s).

*/	
	static individual_update(tableName,jsonObject_,ColumnName,value_) {
		
      return new Promise(function(resolve, reject) {
    	
		var selectSpecificPromise = ModelMaster.selectSpecific(tableName,ColumnName,value_);
		  
		selectSpecificPromise.then(function(result) {
        
			var returned_value_=result;
			
			if(returned_value_.length===0)
			{
			returned_value_="No such record exists";
				resolve(returned_value_);
			}else{
			
			con.query('UPDATE ' + tableName + ' SET ? WHERE '+ColumnName+' = '+ mysql.escape(value_), jsonObject_, function (err, result) {
            if (err){reject(err);}
            
			var returned_value_="Update was Successful";
            resolve(returned_value_);
            });

			
			}
			
        }, function(err) {
        console.log(err);
        })
		
    })
        
		
    }
	

	
/*SON/2018-11-06 00:29 - DEVELOPMENT
	
delete() deletes a specific record(s).

*/	
	
	static delete(tableName,ColumnName,value_,UserIdColumnName,UserId) {
		
		
		return new Promise(function(resolve, reject) {
    	
		var selectSpecificPromise = ModelMaster.selectUserSpecific(tableName,ColumnName,value_,UserIdColumnName,UserId);
		  
		selectSpecificPromise.then(function(result) {
        
			var returned_value_=result;
			
			if(returned_value_.length===0)
			{
			returned_value_="No such record exists";
				resolve(returned_value_);
			}else{
			
			con.query('DELETE FROM ' + tableName + ' WHERE '+ColumnName+' = '+ mysql.escape(value_)+' AND '+UserIdColumnName+' = '+ mysql.escape(UserId), function (err, result) {
            if (err){reject(err);}
            
			var returned_value_="Record Succesfully Deleted";
            resolve(returned_value_);
            });

			
			}
			
        }, function(err) {
        console.log(err);
        })
		
    })
		
   }
	
	

	
/*SON/2018-11-06 00:29 - DEVELOPMENT
	
batch_program() is a special function that handles batch jobs.

*/	
	
   static batch_program(){
	return new Promise(function(resolve, reject) {
	if (err) {reject(err);}
       con.query("SELECT * FROM users", function (err, result, fields) {
       if (err) throw err;
	   for (var i = 0; i < result.length; i++) {
		  
        con.query("SELECT * FROM users WHERE users.id = "+result[i].id, function (err, result) {
         if (err) {reject(err);}
         resolve(result);
          });
         }
     });

	})
   }
	
	

	
	
	
	
/*SON/2018-11-06 00:29 - DEVELOPMENT
	
The two_table_inner_join() is used to conduct
an inner join query between two tables

*/	
	static two_table_inner_join(TableOne,TableTwo,JoiningKey,SearchColumn,SearchValue) {
	return new Promise(function(resolve, reject) {	

        con.query('SELECT * FROM '+TableOne+' INNER JOIN '+TableTwo+' ON '+TableOne+'.'+JoiningKey+' = '+TableTwo+'.'+JoiningKey+' WHERE '+TableTwo+'.'+SearchColumn+'= '+ mysql.escape(SearchValue),function (err, result) {
            if (err){reject(err);}
                   else {
				        
                        resolve(result);
                    }
        });
		
	})

   }
	
	
	
	
   /*SON/2018-11-06 00:29 - DEVELOPMENT
	
The three_table_one_parent_with_searchkey_inner_join() is used to conduct
an inner join query between three tables where one table(TableOne) is the parent 
of the other two,and there is a WHERE clause

*/	
	static three_table_one_parent_with_searchkey_inner_join(TableOne,TableTwo,TableThree,JoiningKeyOne,JoiningKeyTwo,SearchColumn,SearchValue) {
	return new Promise(function(resolve, reject) {	

        con.query('SELECT * FROM '+TableOne+' INNER JOIN '+TableTwo+' ON '+TableOne+'.'+JoiningKeyOne+' = '+TableTwo+'.'+JoiningKeyOne+' INNER JOIN '+TableThree+' ON '+TableOne+'.'+JoiningKeyTwo+' = '+TableThree+'.'+JoiningKeyTwo+' WHERE '+TableOne+'.'+SearchColumn+'= '+ mysql.escape(SearchValue),function (err, result) {
            if (err){reject(err);}
                   else {
				        
                        resolve(result);
                    }
        });
		
	})

   }
	
	
	
      /*SON/2018-11-06 00:29 - DEVELOPMENT
	
The three_table_one_parent_no_searchkey_inner_join() is used to conduct
an inner join query between three tables where one table(TableOne) is the parent 
of the other two,and there is no WHERE clause

*/	
	static three_table_one_parent_no_searchkey_inner_join(TableOne,TableTwo,TableThree,JoiningKeyOne,JoiningKeyTwo) {
	return new Promise(function(resolve, reject) {	

        con.query('SELECT * FROM '+TableOne+' INNER JOIN '+TableTwo+' ON '+TableOne+'.'+JoiningKeyOne+' = '+TableTwo+'.'+JoiningKeyOne+' INNER JOIN '+TableThree+' ON '+TableOne+'.'+JoiningKeyTwo+' = '+TableThree+'.'+JoiningKeyTwo,function (err, result) {
            if (err){reject(err);}
                   else {
				        
                        resolve(result);
                    }
        });
		
	})

   }
	
	
	
	
	
/*SON/2018-11-06 00:29 - DEVELOPMENT
	
batch_program() is a special function that handles batch jobs.

*/	
	
   static concatenate_two_query_results(){
	return new Promise(function(resolve, reject) {
	if (err) {reject(err);}
       con.query("SELECT * FROM users", function (err, result, fields) {
       if (err) throw err;
	   for (var i = 0; i < result.length; i++) {
		  
        con.query("SELECT * FROM users WHERE users.id = "+result[i].id, function (err, result) {
         if (err) {reject(err);}
         resolve(result);
          });
         }
     });

	})
   }
	
	
   
	

	
	
/*This function implements a select query based on the session Id/User making this request*/	
	static user_specific_select_query(tableName,ColumnName,value_,UserIdColumnName,UserId) {

     return new Promise(function(resolve, reject) {
        var sql = 'SELECT * FROM '+tableName+' WHERE '+ColumnName+' = '+ mysql.escape(value_)+' AND '+UserIdColumnName+' = '+ mysql.escape(UserId);
        con.query(sql, function (err, result) {
            if (err){reject(err);}
                   else {
				        var returned_value_=result;
                        resolve(returned_value_);
                    }

        });
		 
	})


    }
	

	
	
	
	
	
/*This function gets the number of records in a table.*/	
	
	static get_number_of_records(tableName,ColumnName,value_) {

     return new Promise(function(resolve, reject) {
        var sql = 'SELECT COUNT(*) AS NumberOfRecords FROM '+tableName+' WHERE '+ColumnName+' = '+ mysql.escape(value_);
        con.query(sql, function (err, result) {
            if (err){reject(err);}
                   else {
				        var returned_value_=result;
                        resolve(returned_value_);
                    }

        });
		 
	})


    }
	
	
	
	
	
	
/*SON/2018-11-06 00:29 - DEVELOPMENT
	
The two_table_inner_join() is used to conduct
an inner join query between two tables but 
with no WHERE clause(No condition)

*/	
	static two_table_inner_join_with_no_condition(TableOne,TableTwo,JoiningKey) {
	return new Promise(function(resolve, reject) {	

        con.query('SELECT * FROM '+TableOne+' INNER JOIN '+TableTwo+' ON '+TableOne+'.'+JoiningKey+' = '+TableTwo+'.'+JoiningKey,function (err, result) {
            if (err){reject(err);}
                   else {
				        
                        resolve(result);
                    }
        });
		
	})

   }	
	
	
	
	
	
	
/*SON/2018-11-06 00:29 - DEVELOPMENT
	
The three_table_one_parent_no_searchkey_inner_join() is used to conduct
an inner join query between three tables where one table(TableOne) is the parent 
of the other two,and there is no WHERE clause

*/	
	static five_table_inner_join_one_grandparent_two_parents_two_grandchildren_from_one_parent_no_searchkey(TableOne,TableTwo,TableThree,TableFour,TableFive,JoiningKeyOne,JoiningKeyTwo,JoiningKeyThree,JoiningKeyFour) {
	return new Promise(function(resolve, reject) {	

        con.query('SELECT * FROM '+TableOne+' INNER JOIN '+TableTwo+' ON '+TableOne+'.'+JoiningKeyOne+' = '+TableTwo+'.'+JoiningKeyOne+' INNER JOIN '+TableThree+' ON '+TableOne+'.'+JoiningKeyTwo+' = '+TableThree+'.'+JoiningKeyTwo+' INNER JOIN '+TableFour+' ON '+TableThree+'.'+JoiningKeyThree+' = '+TableFour+'.'+JoiningKeyThree+' INNER JOIN '+TableFive+' ON '+TableThree+'.'+JoiningKeyFour+' = '+TableFive+'.'+JoiningKeyFour,function (err, result) {
            if (err){reject(err);}
                   else {
				        
                        resolve(result);
                    }
        });
		
	})

   }
	
	
	
	

	

}