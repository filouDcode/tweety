const express = require('express'); // Importe le module Express.js
const router = express.Router(); // Crée un objet routeur Express et le stocke dans la variable "router"

// const router = require('express').Router();

router.get('/', (req, res) => {
	res.render('home');
});

module.exports = router;
