// Import functions from Tour model
import {
    getTours,
    getTourById,
    insertTour,
    updateTourById,
    deleteTourById,
} from '../models/tourModel.js';

// Hiện thị tất cả các tour
export const showTours = (req, res) => {
    getTours((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};
// Lấy một tours theo id
export const showTourById=(req,res)=>{
    getTourById(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};
// Tạo thêm tour
export const createTour=(req,res)=>{
    const data = req.body;
    insertTour(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json({ message: 'Tour add successfully', results });
        }
    });
};

// Cập nhật thông tin tour
export const updateTour = (req, res) => {
    const id = req.params.id; 
    const tourData = req.body; 

    updateTourById(id, tourData, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Tour updated successfully', results });
        }
    });
};
// Xóa Tour
export const deleteTour=(req,res)=>{
    const id = req.params.id;
    deleteTourById(id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json({ message: 'Tour delete successfully', results });
        }
    });
};