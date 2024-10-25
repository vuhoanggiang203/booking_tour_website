import { db } from '../config/database.js'; 

// Lấy tất cả các tours
export const getTours = (result) => {
    db.query("SELECT * FROM tour", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};
// Lấy một tour
export const getTourById = (id,result) => {
    db.query("SELECT * FROM tour WHERE id = ?",[id], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results[0]);
        }
    });
};

// Thêm tour
export const insertTour = (data,result) => {
    db.query("INSERT INTO tour SET ?",data, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results[0]);
        }
    });
};

// Cập nhật thông tin tour
export const updateTourById = (id, data, result) => {
    db.query("UPDATE tour SET name = ?, pos_start = ?, pos_end = ?, veh = ?, price = ?, image = ?, is_Trend = ?, two_way = ?, numPerson = ?, des = ? WHERE id = ?", 
        [data.name, data.pos_start, data.pos_end, data.veh, data.price, data.image, data.is_Trend, data.two_way, data.numPerson, data.des, id], 
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

export const deleteTourById = (id,result) => {
    db.query("DELETE FROM tour WHERE id = ?",[id], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};