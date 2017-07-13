const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
	const den = { name: 'dennis', age: 500 };
  // res.send('why doesnt this work right');
  res.json(den);
});

router.get('/reverse/:name', (req,res) => {
	const reverse = [...req.params.name].reverse().join('');
	console.log(reverse);
	res.send(reverse);
})

module.exports = router;
