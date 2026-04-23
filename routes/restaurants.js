const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant');


// return all restaurant details
router.get('/', async (req, res) => {
  try {
    const { sortBy } = req.query;

    // selected columns and sorting by restaurant_id
    if (sortBy) {
      const sortOrder = sortBy.toUpperCase() === 'DESC' ? -1 : 1;

      const restaurants = await Restaurant.find(
        {},
        {
          _id: 1,
          cuisine: 1,
          name: 1,
          city: 1,
          restaurant_id: 1
        }
      ).sort({ restaurant_id: sortOrder });

      return res.status(200).json(restaurants);
    }

    const restaurants = await Restaurant.find({});
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching restaurants',
      error: error.message
    });
  }
});


// return all restaurant details by cuisine
router.get('/cuisine/:cuisine', async (req, res) => {
  try {
    const cuisineName = req.params.cuisine;

    const restaurants = await Restaurant.find({ cuisine: cuisineName });

    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching restaurants by cuisine',
      error: error.message
    });
  }
});


// Delicatessen and city is not Brooklyn
router.get('/Delicatessen', async (req, res) => {
  try {
    const restaurants = await Restaurant.find(
      {
        cuisine: 'Delicatessen',
        city: { $ne: 'Brooklyn' }
      },
      {
        _id: 0,
        cuisine: 1,
        name: 1,
        city: 1
      }
    ).sort({ name: 1 });

    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching Delicatessen restaurants',
      error: error.message
    });
  }
});

module.exports = router;