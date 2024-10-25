import { db } from '../config/database.js'; 

export const getUser = (data,result) => {
    db.query('select username,fullname,date,phoneNumber from users')
        if(err){
            console.log(err);
        }
        else {
            result(null,result[0]);
        }
}
// Thêm Users
export const insertUser = (data,result) => {
    db.query("INSERT INTO users SET ?",data, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results[0]);
        }
    });
};

// Cập nhật thông tin Users
export const updateUserById = (id, data, result) => {
    db.query(
        "UPDATE users SET username = ?, password = ?, fullname = ?, date = ?, phoneNumber = ? WHERE id = ?", 
        [data.username, data.password, data.fullname, data.date, data.phoneNumber, id], 
        (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        }
    );
};

// Xóa tour

export const deleteUserById = (id,result) => {
    db.query("DELETE FROM users WHERE id = ?",[id], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};