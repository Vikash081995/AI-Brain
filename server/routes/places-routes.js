const express = require('express');
const router = express.Router();
const {
    getAllPlaces,
    getPlaceById,
    createPlace,
    updatePlace,
    deletePlace
} = require("../controller/places-controller");

// Routes for /api/places
router.route('/')
    .get(getAllPlaces)
    .post(createPlace);

// Routes for /api/places/:id
router.route('/:id')
    .get(getPlaceById)
    .patch(updatePlace)
    .delete(deletePlace);

module.exports = router;