// Import functions from Hotel model
import {
    getHotels,
    getHotelById,
    insertHotel,
    updateHotelById,
    deleteHotelById,
} from '../models/hotelModel.js';
// Hiện thị tất cả các hotel
export const showHotels = (req, res) => {
    getHotels((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};
// Lấy một Hotel theo id
export const showHotelById=(req,res)=>{
    getHotelById(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};
// Tạo thêm Hotel
export const createHotel=(req,res)=>{
    const data = req.body;
    insertHotel(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json({ message: 'Hotel add successfully', results });
        }
    });
};
// Cập nhật thông tin Hotel
export const updateHotel = (req, res) => {
    const id = req.params.id; 
    const tourData = req.body; 

    updateHotelById(id, tourData, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Hotel updated successfully', results });
        }
    });
};
// Xóa Hotel
export const deleteHotel=(req,res)=>{
    const id = req.params.id;
    deleteHotelById(id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json({ message: 'Hotel delete successfully', results });
        }
    });
};
