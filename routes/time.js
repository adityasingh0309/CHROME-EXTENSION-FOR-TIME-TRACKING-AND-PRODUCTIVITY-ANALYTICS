const express = require('express');
const router = express.Router();
const TimeEntry = require('../models/TimeEntry');

// Endpoint to receive time data from the extension
router.post('/add', async (req, res) => {
  try {
    const { userId, domain, timeSpent, timestamp } = req.body;
    const entry = new TimeEntry({ userId, domain, timeSpent, timestamp });
    await entry.save();
    res.status(201).json({ message: 'Time entry saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save time entry' });
  }
});

// Endpoint to get weekly report for a user (aggregating last 7 days)
router.get('/weekly/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const report = await TimeEntry.aggregate([
      { $match: { userId, timestamp: { $gte: sevenDaysAgo } } },
      { $group: {
          _id: '$domain',
          totalTime: { $sum: '$timeSpent' }
        }
      }
    ]);

    res.json(report);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch report' });
  }
});

module.exports = router;
