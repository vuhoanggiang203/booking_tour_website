import { db } from '../config/database.js'; 

// Lấy tất cả các Hotel
export const getHotels = (result) => {
    db.query("SELECT * FROM hotel", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};
// Lấy một Hotel
export const getHotelById = (id,result) => {
    db.query("SELECT * FROM hotel WHERE id = ?",[id], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results[0]);
        }
    });
};

// Thêm Hotel
export const insertHotel = (data,result) => {
    db.query("INSERT INTO hotel SET ?",data, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results[0]);
        }
    });
};

// Cập nhật thông tin Hotel
export const updateHotelById = (id, data, result) => {
    db.query("UPDATE hotel SET nameHotel = ?, pos = ?, price = ?, image = ?, des = ?, size = ?, isVip = ?, Detail = ? WHERE id = ?", 
        [data.nameHotel, data.pos, data.price, data.image, data.des, data.size, data.isVip, data.Detail, id], 
        (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
    });
};

// Xóa tour

export const deleteHotelById = (id,result) => {
    db.query("DELETE FROM hotel WHERE id = ?",[id], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};