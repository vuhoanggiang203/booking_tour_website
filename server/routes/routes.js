// import express 
import express from "express";
// import controller cho tour
import {
    showTours,
    showTourById,
    createTour,
    updateTour,
    deleteTour,
} from "../controllers/tourController.js";
// import controller cho hotel
import {
    showHotels,
    showHotelById,
    createHotel,
    updateHotel,
    deleteHotel,
} from "../controllers/hotelController.js";

// init express router
const router = express.Router();

////////////////////////// TOUR ////////////////////////////////

// get all Tours
router.get("/api/tours", showTours);

// get single Tour
router.get("/api/tours/:id", showTourById);

// create Tour
router.post("/api/tours", createTour);

// update Tour
router.put('/api/tours/:id', updateTour);

// delete Tour
router.delete("/api/tours/:id", deleteTour);

////////////////////////// HOTEL ////////////////////////////////

// get all hotel
router.get("/api/hotels", showHotels);

// get single hotel
router.get("/api/hotels/:id", showHotelById);

// create hotel
router.post("/api/hotels", createHotel);

// update Hotel
router.put('/api/hotels/:id', updateHotel);

// delete Tour
router.delete("/api/hotels/:id", deleteHotel);

// export default router
export default router;