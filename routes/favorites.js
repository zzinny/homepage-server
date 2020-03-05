var express = require('express');
var router = express.Router();
const Singer = require('../models/Singer');
const Album = require('../models/Album');

router.get('/', async function(req, res, next) {
  const { count, rows } = await Album.findAndCountAll({
    attributes: [
      'name',
      'imageUrl',
      'publishedAt',
    ],
    where: {
      is_favorite: true,
    },
    include: [{
      model: Singer,
      attributes: [
        'name',
      ],
    }],
  });
  res.json(rows);
});

module.exports = router;
