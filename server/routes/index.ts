const express = require("express");
const router = express.Router();
import { movie } from '../controllers/index';

router.route('/movie').get(movie)

module.exports = router;