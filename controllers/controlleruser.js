
const mysqlConnection=require('../Database/connection')
module.exports={
    userList:()=>{
        return new Promise(async(resolve,reject)=>{
            let sql="select * from user_table";
             await mysqlConnection.query(sql,(err,result,fields)=>{
                if (err) throw err;
                console.log(result);
                resolve(result)
            })
        })
    },
    addUser:(data)=>{
        return new Promise(async(resolve,reject)=>{
            
            let sql="insert into user_table set?";
          await  mysqlConnection.query(sql,data,(err,result)=>{
                if (err) throw err;
                console.log(result);
                resolve(result)
            })
        })
    }
    
}